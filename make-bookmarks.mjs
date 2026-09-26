#!/usr/bin/env node
// Generate a Netscape bookmark file that Chromium/Chrome can import:
// Bookmark Manager (Ctrl+Shift+O) -> menu -> Import bookmarks.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, 'all.js'), 'utf8');
const BOOKMARKS = new Function(`${src}; return BOOKMARKS;`)();

// Timestamps must be byte-reproducible, otherwise the generated file differs
// on every run and the "generated files are up to date" CI check can never
// pass. Anything clock-derived is wrong here: git checkouts set mtime to the
// moment of checkout, so a build in CI would stamp a different time than the
// same build on a laptop and the two would never match.
//
// So the default is the Unix epoch and callers can override it via
// SOURCE_DATE_EPOCH, the standard reproducible-builds convention. Chromium
// imports a zero timestamp fine, and an invented "added on" date would be a
// lie anyway — these links were curated over time, not created at once.
const now = /^\d+$/.test(process.env.SOURCE_DATE_EPOCH ?? '')
  ? Number(process.env.SOURCE_DATE_EPOCH)
  : 0;

const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  .replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Top-level folder per group, mirroring write-bookmarks.mjs.
const GROUPS = [
  ['Software & Dev', ['Software Engineering', 'Architecture', 'CS fundamentals', 'AI / ML', 'Compilers', 'Go', 'Go frameworks', 'Go blogs', 'Rust', 'Rust ecosystem', 'Flutter', 'Android', 'Kotlin', 'Computer Science', 'DevOps / Infra', 'Databases', 'Testing', 'Security', 'Performance', 'Tools & productivity', 'Big tech blogs', 'Dev blogs']],
  ['Science', ['Science', 'Science news', 'Research data']],
  ['Physics & Chemistry', ['Physics', 'Chemistry']],
  ['Atomic & Particles', ['Quantum & Atomic', 'Particle physics']],
  ['Astronomy & Biology', ['Astronomy', 'Biology']],
  ['Medicine', ['Medicine']],
  ['Anatomy & Physiotherapy', ['Anatomy', 'Physiotherapy']],
  ['Nutrition & Health', ['Nutrition', 'Health']],
  ['Papers, Books & Blogs', ['Papers & preprints', 'Free textbooks', 'Topic blogs']],
  ['Electronics & Devices', ['Electronics', 'Circuits & Signals', 'Electricity & Power', 'Semiconductors & Chips', 'Embedded & Devices', 'Hardware & Making', 'Device Repair', 'Computer Architecture']],
  ['Linux, Unix & Omarchy', ['Omarchy', 'Linux & Unix', 'Language docs', 'Framework docs', 'Technical writing', 'Influential tech']],
  ['Fun & News', ['Fun facts', 'News & aggregators']],
];
const CAT_TO_GROUP = new Map();
for (const [g, cats] of GROUPS) for (const c of cats) CAT_TO_GROUP.set(c, g);

const byGroup = new Map();
for (const b of BOOKMARKS) {
  const g = CAT_TO_GROUP.get(b.c) ?? '🎉 Fun & News';
  if (!byGroup.has(g)) byGroup.set(g, new Map());
  const m = byGroup.get(g);
  if (!m.has(b.c)) m.set(b.c, []);
  m.get(b.c).push(b);
}

const lines = [
  '<!DOCTYPE NETSCAPE-Bookmark-file-1>',
  '<!-- This is an automatically generated file. Import it in Chromium via',
  '     Bookmark Manager -> three-dot menu -> Import bookmarks. -->',
  '<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">',
  '<TITLE>Bookmarks</TITLE>',
  '<H1>Bookmarks</H1>',
  '<DL><p>',
  `    <DT><H3 ADD_DATE="${now}" LAST_MODIFIED="${now}">Importable bookmarks export</H3>`,
  '    <DL><p>',
];

for (const [group, cats] of byGroup) {
  lines.push(`        <DT><H3 ADD_DATE="${now}" LAST_MODIFIED="${now}">${escAttr(group)}</H3>`);
  lines.push('        <DL><p>');
  for (const [cat, items] of cats) {
    lines.push(`            <DT><H3 ADD_DATE="${now}" LAST_MODIFIED="${now}">${escAttr(cat)}</H3>`);
    lines.push('            <DL><p>');
    for (const b of items) {
      lines.push(
        `                <DT><A HREF="${escAttr(b.u)}" ADD_DATE="${now}">${escAttr(b.t)}</A>` +
        (b.d ? `<DD>${escAttr(b.d)}` : '')
      );
    }
    lines.push('            </DL><p>');
  }
  lines.push('        </DL><p>');
}
lines.push('    </DL><p>');
lines.push('</DL><p>');

const out = join(here, 'chromium-bookmarks.html');
writeFileSync(out, lines.join('\n') + '\n');
const totalCats = [...byGroup.values()].reduce((n, m) => n + m.size, 0);
console.log(`Wrote ${out}`);
console.log(`  ${BOOKMARKS.length} bookmarks, ${totalCats} categories, ${byGroup.size} top-level folders`);
