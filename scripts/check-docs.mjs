// Contrasta cada afirmación numérica de la documentación con la realidad.
import { readFileSync, readdirSync } from 'node:fs';

const src = readFileSync('all.js', 'utf8');
const { BOOKMARKS: B, CATEGORIES, TAGS, GROUPS } =
  new Function(`${src}; return { BOOKMARKS, CATEGORIES, TAGS, GROUPS };`)();

const real = {
  enlaces: B.length,
  categorias: CATEGORIES.length,
  tags: TAGS.length,
  dominios: new Set(B.map((b) => new URL(b.u).hostname)).size,
  grupos: GROUPS.length,
  http: B.filter((b) => b.u.startsWith('http://')).length,
  must: new Set(B.flatMap((b) => b.g).filter((g) => g.startsWith('must-'))).size,
  archivosDatos: readdirSync('.').filter((f) => /^data-\d+.*\.js$/.test(f)).length,
};

console.log('=== REALIDAD ===');
for (const [k, v] of Object.entries(real)) console.log(`  ${k.padEnd(14)} ${v}`);

const docs = ['README.md', 'CONTRIBUTING.md'].map((f) => [f, readFileSync(f, 'utf8')]);
const n = (x) => Number(String(x).replace(/[,~]/g, ''));

const patterns = [
  [/([\d,]+) links across ([\d,]+) categories, from ([\d,]+) distinct domains/g, (m) => ({ enlaces: m[1], categorias: m[2], dominios: m[3] })],
  [/([\d,]+) links across ([\d,]+) categories and ([\d,]+) domains/g, (m) => ({ enlaces: m[1], categorias: m[2], dominios: m[3] })],
  [/([\d,]+) links, ([\d,]+) categories, ([\d,]+) domains/g, (m) => ({ enlaces: m[1], categorias: m[2], dominios: m[3] })],
  [/([\d,]+) links in (\d+) grouped folders/g, (m) => ({ enlaces: m[1], grupos: m[2] })],
  [/all ([\d,]+) links in (\d+) grouped folders/g, (m) => ({ enlaces: m[1], grupos: m[2] })],
  [/You get all ([\d,]+) links in (\d+) grouped folders/g, (m) => ({ enlaces: m[1], grupos: m[2] })],
  [/(\d+) links are `http:\/\/`/g, (m) => ({ http: m[1] })],
  [/(\d+) top-level folders/g, (m) => ({ grupos: m[1] })],
  [/(\d+) groups, all reachable/g, (m) => ({ grupos: m[1] })],
  [/(\d+) categories, all visible/g, (m) => ({ categorias: m[1] })],
  [/(\d+) groups — all reachable/g, (m) => ({ grupos: m[1] })],
  [/There are (\d+) such tags across ([\d,]+) links/g, (m) => ({ must: m[1], enlaces: m[2] })],
  [/across (\d+) data files/g, (m) => ({ archivosDatos: m[1] })],
  [/the other (\d+) data files/g, (m) => ({ archivosDatos: n(m[1]) + 1 })],
  [/all ([\d,]+) internal links/g, (m) => ({ enlaces: m[1] })],
  [/all 7 generated files/g, () => ({})],
  [/the other (\d+) of these/g, () => ({})],
  [/\*\*(\d[\d,]*)\*\* links across (\d+) categories/g, (m) => ({ enlaces: m[1], categorias: m[2] })],
  [/(\d[\d,]*) links, (\d+) categories, (\d[\d,]*) domains/g, (m) => ({ enlaces: m[1], categorias: m[2], dominios: m[3] })],
];

let problems = 0;
for (const [file, text] of docs) {
  for (const [re, pick] of patterns) {
    for (const m of text.matchAll(re)) {
      const got = pick(m);
      const approx = m[0].includes('~');
      const wrong = Object.entries(got).filter(([k, v]) =>
        approx ? Math.abs(n(v) - real[k]) / real[k] > 0.1 : n(v) !== real[k]
      );
      if (wrong.length) {
        problems++;
        console.log(`  FALSA  ${file}: ${JSON.stringify(m[0])}`);
        for (const [k, v] of wrong) console.log(`           ${k}: dice ${v}, real ${real[k]}`);
      } else if (got && Object.keys(got).length) {
        console.log(`  ok     ${file}: ${JSON.stringify(m[0])}`);
      }
    }
  }
}

// The slug rule must exist in exactly one place. index.html cannot import it at
// runtime, so seo.mjs injects it from slug.mjs into a marked slot; if someone
// pastes a second copy in by hand the sitemap and the rendered anchors drift
// apart and search engines index anchors that do not exist.
{
  const src = readFileSync('index.html', 'utf8');
  const occurrences = (src.match(/\[\^a-z0-9\]/g) || []).length;
  if (occurrences > 1) {
    problems++;
    console.log(`  FALSA  index.html: ${occurrences} copies of the slug regex — it must be injected from slug.mjs by seo.mjs, never hand-written`);
  } else if (occurrences === 0) {
    problems++;
    console.log('  FALSA  index.html: no slug rule found — run node seo.mjs');
  } else {
    console.log(`  ok     index.html: ${occurrences} copy of the slug rule (injected)`);
  }
}

// The counts in the static HTML must match the data. They are baked in at build
// time so a crawler that does not execute JavaScript still sees the real size of
// the collection, which means they can also go stale if the build is skipped.
{
  const src = readFileSync('index.html', 'utf8');
  const n = B.length.toLocaleString('en-US');
  const want = {
    'link count in the h1': new RegExp(`id="count">· ${n} links`),
    'shown count': new RegExp(`id="shown">${n}</`),
    'category count': new RegExp(`id="cats">${CATEGORIES.length}</`),
    'domain count': new RegExp(`id="doms">${real.dominios}</`),
  };
  for (const [label, re] of Object.entries(want)) {
    if (!re.test(src)) {
      problems++;
      console.log(`  FALSA  index.html: ${label} is stale — run node seo.mjs`);
    }
  }
  if (!problems) console.log('  ok     index.html: static counts match the data');
}

console.log(`\n=== AFIRMACIONES FALSAS: ${problems} ===`);
