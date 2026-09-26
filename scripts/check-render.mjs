#!/usr/bin/env node
// Guard against the failure mode where the site builds cleanly, reports the
// right number of links, and still hides some of them.
//
// The cause was three hand-maintained copies of the category-to-group map that
// drifted apart. Anything not present in the map was skipped by the render loop
// without a warning, so 132 links were invisible while every build printed
// "1996 bookmarks" and exited 0.
//
// This walks the same loop index.html does and asserts that every bookmark is
// reachable. If a category is ever added without being added to groups.mjs,
// this fails with the exact category name.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const src = readFileSync(join(root, 'all.js'), 'utf8');
const { BOOKMARKS, CATEGORIES, GROUPS } = new Function(
  `${src}; return { BOOKMARKS, CATEGORIES, GROUPS };`
)();

const CAT_TO_GROUP = new Map();
for (const [g, cs] of GROUPS) for (const c of cs) CAT_TO_GROUP.set(c, g);
const ORDER = GROUPS.flatMap(([g]) => g);

const seen = new Set();
let visible = 0;
for (const group of ORDER) {
  for (const cat of CATEGORIES.filter((c) => CAT_TO_GROUP.get(c) === group)) {
    seen.add(cat);
    visible += BOOKMARKS.filter((b) => b.c === cat).length;
  }
}

const problems = [];

for (const c of CATEGORIES) {
  if (!seen.has(c)) problems.push(`category "${c}" never renders — not in any group in groups.mjs`);
}

if (visible !== BOOKMARKS.length) {
  problems.push(`render loop shows ${visible} of ${BOOKMARKS.length} links (${BOOKMARKS.length - visible} hidden)`);
}

// Any hardcoded link count in the page chrome must match the data, or the site
// advertises a number it does not have. seo.mjs rewrites the og:title, so this
// catches the case where the page was edited by hand and the count went stale.
const html = readFileSync(join(root, 'index.html'), 'utf8');
const expected = BOOKMARKS.length.toLocaleString('en-US');
for (const m of html.matchAll(/(\d[\d,]*) (free and open-source resources|links?)\b/g)) {
  if (m[1] !== expected) {
    problems.push(`index.html says "${m[0]}" but the data has ${expected} links`);
  }
}

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}

console.log(`all ${BOOKMARKS.length} links reachable across ${seen.size}/${CATEGORIES.length} categories in ${ORDER.length} groups.`);
