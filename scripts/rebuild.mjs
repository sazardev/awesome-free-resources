#!/usr/bin/env node
// Regenerate every derived file in the right order. Used by CI and locally.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Dedupe runs first, and deliberately. build.mjs treats duplicate titles and
// URLs as a hard error, so a rebuild that started with build.mjs could never
// repair a duplicate — it would just fail on the thing it was supposed to fix.
// Stripping duplicates from the data files first makes the pipeline
// self-healing while still failing loudly on anything genuinely malformed.
const steps = [
  ['dedupe.mjs', 'remove duplicate titles and URLs from the data files'],
  ['build.mjs', 'validate and merge data-*.js into all.js'],
  ['make-bookmarks.mjs', 'regenerate the browser import file'],
  ['seo.mjs', 'regenerate sitemap, robots, 404 and README stats'],
];

for (const [script, why] of steps) {
  process.stdout.write(`  node ${script}  (${why})\n`);
  execFileSync(process.execPath, [join(root, script)], { stdio: 'inherit' });
}
