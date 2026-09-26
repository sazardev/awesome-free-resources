#!/usr/bin/env node
// Validate the bookmark data itself: every file parses, every entry is
// complete, every URL is well-formed, and nothing is duplicated.
// Exits non-zero with a readable list of problems.
import { readdirSync, readFileSync } from 'node:fs';
import { GROUPS } from '../groups.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = readdirSync(root).filter((f) => /^data-\d+.*\.js$/.test(f)).sort();

const problems = [];
const seenTitle = new Map();
const seenUrl = new Map();
const seenCat = new Map();
let count = 0;

for (const f of files) {
  const src = readFileSync(join(root, f), 'utf8');
  const m = src.match(/const\s+(BOOKMARKS_\d+)\s*=\s*([\s\S]*?);\s*$/m);
  if (!m) { problems.push(`${f}: cannot find a BOOKMARKS_* array`); continue; }

  let arr;
  try {
    arr = new Function(`${m[1]} = ${m[2]}; return ${m[1]};`)();
  } catch (e) {
    problems.push(`${f}: does not parse -> ${e.message}`);
    continue;
  }

  for (const b of arr) {
    count++;
    const where = `${f} :: ${b?.t ?? b?.u ?? '(no title)'}`;
    for (const k of ['c', 't', 'u', 'd', 'g']) {
      if (b[k] === undefined || b[k] === '') problems.push(`${where}: missing "${k}"`);
    }
    if (b.u) {
      let parsed;
      try { parsed = new URL(b.u); } catch { problems.push(`${where}: unparseable url "${b.u}"`); }
      if (parsed && !['http:', 'https:'].includes(parsed.protocol)) {
        problems.push(`${where}: bad scheme in "${b.u}"`);
      }
    }
    if (b.g && !Array.isArray(b.g)) problems.push(`${where}: "g" must be an array`);
    if (b.g && Array.isArray(b.g) && b.g.length === 0) problems.push(`${where}: "g" is empty`);

    if (b.t && seenTitle.has(b.t)) problems.push(`${where}: duplicate title of ${seenTitle.get(b.t)}`);
    if (b.u && seenUrl.has(b.u)) problems.push(`${where}: duplicate url of ${seenUrl.get(b.u)}`);
    if (b.t) seenTitle.set(b.t, where);
    if (b.u) seenUrl.set(b.u, where);

    // Categories are compared case- and punctuation-insensitively. Without
    // this, "Tech pioneers" and "Tech Pioneers" look like two categories in
    // the UI and quietly split the links between them.
    if (b.c) {
      const k = b.c.toLowerCase().replace(/[^a-z0-9]+/g, '');
      const prev = seenCat.get(k);
      // Only a *differently spelled* name is a problem. Repeating the exact
      // same category is the normal case.
      if (prev !== undefined && prev !== b.c) {
        problems.push(`${where}: category "${b.c}" collides with "${prev}" — same name, different spelling or case`);
      } else if (prev === undefined) {
        seenCat.set(k, b.c);
      }
    }
  }
}

// Every category must be reachable from the group map. A category that exists
// in the data but not in groups.mjs used to be skipped silently, which is how
// 132 links became invisible on the site while every build reported success.
const mapped = new Set(GROUPS.flatMap(([, cs]) => cs));
const unmapped = [...seenCat.values()].filter((c) => !mapped.has(c));
for (const c of unmapped) problems.push(`category "${c}" is not in groups.mjs — it will not render`);

// ...and the reverse: a group entry with no matching category is dead config.
const actual = new Set(seenCat.values());
for (const [g, cs] of GROUPS) {
  for (const c of cs) {
    if (!actual.has(c)) problems.push(`groups.mjs maps "${c}" to "${g}" but no bookmark uses that category`);
  }
}

// ...and a category listed in two groups at once.
const dupes = GROUPS.flatMap(([, cs]) => cs).filter((c, i, a) => a.indexOf(c) !== i);
for (const c of new Set(dupes)) problems.push(`groups.mjs lists "${c}" in more than one group`);

if (count < 500) problems.push(`only ${count} bookmarks — did a data file fail to load?`);

if (problems.length) {
  console.error(`${problems.length} problem(s):`);
  for (const p of problems.slice(0, 40)) console.error('  - ' + p);
  if (problems.length > 40) console.error(`  …and ${problems.length - 40} more`);
  process.exit(1);
}

console.log(`${files.length} data files, ${count} entries, no problems.`);
