#!/usr/bin/env node
// Write the curated bookmarks into a Chromium profile's Bookmarks file (JSON format),
// merging with whatever is already there and preserving the existing root structure.
// Usage: node write-bookmarks.mjs <path-to-Bookmarks-file>
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const target = process.argv[2];
if (!target) { console.error('usage: write-bookmarks.mjs <path-to-Bookmarks-file>'); process.exit(1); }

const src = readFileSync(join(here, 'all.js'), 'utf8');
const BOOKMARKS = new Function(`${src}; return BOOKMARKS;`)();
const CATEGORIES = new Function(`${src}; return CATEGORIES;`)();

const ROOT = 'Dev Bookmarks';
const FOLDER_NAME = 'Dev Bookmarks';

// Top-level bookmark-bar folder for each category, so related topics live together.
const GROUPS = [
  ['Software & Dev', [
    'Software Engineering', 'Architecture', 'CS fundamentals', 'AI / ML', 'Compilers',
    'Go', 'Go frameworks', 'Go blogs', 'Rust', 'Rust ecosystem', 'Flutter', 'Android',
    'Kotlin', 'Computer Science', 'DevOps / Infra', 'Databases', 'Testing', 'Security', 'Performance',
    'Tools & productivity', 'Big tech blogs', 'Dev blogs',
  ]],
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
for (const [group, cats] of GROUPS) for (const c of cats) CAT_TO_GROUP.set(c, group);
const GROUP_ORDER = GROUPS.map(([g]) => g);

// Chromium stores dates as microseconds since 1601-01-01 (Windows epoch).
const CHROME_EPOCH_OFFSET = 11644473600;
const now = String((Math.floor(Date.now() / 1000) + CHROME_EPOCH_OFFSET) * 1e6);

// ---- read / scaffold the existing file ----
let doc = existsSync(target)
  ? JSON.parse(readFileSync(target, 'utf8'))
  : { roots: {}, version: 1 };

if (!doc.roots) doc.roots = {};
doc.version = 1;

// Guarantee the three standard roots exist.
const ROOTS = {
  bookmark_bar: 'Bookmarks bar',
  other: 'Other bookmarks',
  synced: 'Mobile bookmarks',
};
for (const [key, name] of Object.entries(ROOTS)) {
  if (!doc.roots[key]) {
    doc.roots[key] = {
      children: [], date_added: now, date_last_used: '0', date_modified: now,
      guid: randomUUID(), id: 'root', name, type: 'folder',
    };
  }
  if (!Array.isArray(doc.roots[key].children)) doc.roots[key].children = [];
}

// ---- id allocation: must not collide with anything already present ----
let nextId = 1;
const seenIds = new Set();
const walkIds = (n) => {
  if (!n) return;
  if (n.id !== undefined && n.id !== 'root') seenIds.add(String(n.id));
  (n.children || []).forEach(walkIds);
};
Object.values(doc.roots).forEach(walkIds);
for (const v of seenIds) {
  const m = /^(\d+)$/.exec(v);
  if (m) nextId = Math.max(nextId, Number(m[1]) + 1);
}
const takeId = () => String(nextId++);

// ---- remove any previously-imported copy so re-running is idempotent ----
// Must clear every group name plus the legacy single-folder name, otherwise
// re-running against an older export leaves duplicates behind.
// LEGACY holds folder names from earlier versions (including the emoji-named
// ones) so a re-run after renaming migrates cleanly instead of duplicating.
const LEGACY_FOLDER_NAMES = [
  'Dev Bookmarks',
  '💻 Software & Dev', '🔬 Science', '🧪 Physics & Chemistry',
  '⚛️ Atomic & Particles', '🌌 Astronomy & Biology', '🩺 Medicine',
  '🦴 Anatomy & Physiotherapy', '🥗 Nutrition & Health',
  '📚 Papers, Books & Blogs', '⚡ Electronics & Devices',
  '⚙️ Linux, Unix & Omarchy', '🎉 Fun & News',
];
const GENERATED_NAMES = new Set([...GROUP_ORDER, ...LEGACY_FOLDER_NAMES, ROOT]);
function stripGenerated(node) {
  if (!Array.isArray(node.children)) return;
  node.children = node.children.filter((c) => !GENERATED_NAMES.has(c.name));
  node.children.forEach(stripGenerated);
}
Object.values(doc.roots).forEach(stripGenerated);

// ---- build the tree: one top-level folder per group, one subfolder per category ----
const byGroup = new Map(); // group -> Map(cat -> items)
for (const b of BOOKMARKS) {
  const group = CAT_TO_GROUP.get(b.c) ?? '🎉 Fun & News';
  if (!byGroup.has(group)) byGroup.set(group, new Map());
  const cats = byGroup.get(group);
  if (!cats.has(b.c)) cats.set(b.c, []);
  cats.get(b.c).push(b);
}

const mkFolder = (name) => ({
  name,
  type: 'folder',
  date_added: now,
  date_last_used: '0',
  date_modified: now,
  guid: randomUUID(),
  id: takeId(),
  children: [],
});

const groupFolders = GROUP_ORDER
  .filter((g) => byGroup.has(g))
  .map((g) => {
    const f = mkFolder(g);
    for (const [cat, items] of byGroup.get(g)) {
      f.children.push({
        ...mkFolder(cat),
        children: items.map((b) => ({
          name: b.t,
          type: 'url',
          url: b.u,
          date_added: now,
          date_last_used: '0',
          date_modified: now,
          guid: randomUUID(),
          id: takeId(),
        })),
      });
    }
    return f;
  });

// Any category not covered by the map goes into a catch-all folder.
const orphans = byGroup.get('🎉 Fun & News');
for (const [group, cats] of byGroup) {
  if (GROUP_ORDER.includes(group) && group !== '🎉 Fun & News') continue;
  for (const [cat, items] of cats) {
    if (!groupFolders.some((f) => f.children.some((c) => c.name === cat))) {
      orphans.set(cat, items);
    }
  }
}

// Put them on the bookmarks bar so they are one click away.
doc.roots.bookmark_bar.children.unshift(...groupFolders);
doc.roots.bookmark_bar.date_modified = now;

// Chromium rejects the file outright if "checksum" is present but wrong, and
// regenerates it when the key is absent — so drop it.
delete doc.checksum;

writeFileSync(target, JSON.stringify(doc, null, 3) + '\n');
console.log(`Wrote ${target}`);
const totalCats = groupFolders.reduce((n, f) => n + f.children.length, 0);
console.log(`  ${BOOKMARKS.length} bookmarks in ${totalCats} categories, on ${groupFolders.length} top-level folders:`);
for (const f of groupFolders) {
  const n = f.children.reduce((a, c) => a + c.children.length, 0);
  console.log(`    ${f.name.padEnd(30)} ${String(f.children.length).padStart(2)} categories, ${String(n).padStart(4)} links`);
}
console.log(`  existing root entries kept: bookmark_bar=${doc.roots.bookmark_bar.children.length - groupFolders.length}, other=${doc.roots.other.children.length}, synced=${doc.roots.synced.children.length}`);
