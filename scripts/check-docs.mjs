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

console.log(`\n=== AFIRMACIONES FALSAS: ${problems} ===`);
