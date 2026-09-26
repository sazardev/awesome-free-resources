#!/usr/bin/env node
// Remove duplicate entries (by title or url) from the data source files,
// keeping the first occurrence. Rewrites the .js files in place.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const files = readdirSync(here).filter((f) => /^data-\d+.*\.js$/.test(f)).sort();

const seenTitle = new Set();
const seenUrl = new Set();
let removed = 0;

for (const f of files) {
  const path = join(here, f);
  const lines = readFileSync(path, 'utf8').split('\n');
  const out = [];
  for (const line of lines) {
    const m = line.match(/^\s*\{ c: "(.*?)", t: "(.*?)", u: "(.*?)",/);
    if (!m) { out.push(line); continue; }
    const [, , title, url] = m;
    if (seenTitle.has(title) || seenUrl.has(url)) {
      removed++;
      console.log(`  removed duplicate from ${f}: "${title}"`);
      continue;
    }
    seenTitle.add(title);
    seenUrl.add(url);
    out.push(line);
  }
  writeFileSync(path, out.join('\n'));
}

console.log(`\nRemoved ${removed} duplicate entries.`);
