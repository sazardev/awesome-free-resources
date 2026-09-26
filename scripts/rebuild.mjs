#!/usr/bin/env node
// Regenerate every derived file in the right order. Used by CI and locally.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const steps = [
  ['build.mjs', 'merge and validate data-*.js'],
  ['dedupe.mjs', 'remove duplicate titles and URLs'],
  ['build.mjs', 'rebuild after dedupe'],
  ['make-bookmarks.mjs', 'regenerate the browser import file'],
  ['seo.mjs', 'regenerate sitemap, robots, 404, _headers and README stats'],
];

for (const [script, why] of steps) {
  process.stdout.write(`  node ${script}  (${why})\n`);
  execFileSync(process.execPath, [join(root, script)], { stdio: 'inherit' });
}
