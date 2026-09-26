#!/usr/bin/env node
// Commit the regenerated files if they differ from what is already committed.
// No-ops cleanly, so a scheduled run that finds nothing changed does not
// create an empty commit.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sh = (cmd, args) => execFileSync('git', args, { cwd: root, stdio: 'pipe' }).toString().trim();

try {
  sh('git', ['add', '-A']);
  const changed = sh('git', ['diff', '--cached', '--name-only']);
  if (!changed) {
    console.log('Generated files already current — nothing to commit.');
    process.exit(0);
  }

  const stat = sh('git', ['diff', '--cached', '--stat']);
  console.log(stat);

  sh('git', ['config', 'user.name', 'github-actions[bot]']);
  sh('git', ['config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com']);
  sh('git', ['commit', '-m', 'chore: regenerate all.js, bookmarks export, sitemap and README stats']);
  sh('git', ['push']);
  console.log('Pushed regenerated files.');
} catch (err) {
  // Never fail the workflow over the housekeeping commit.
  console.log('Skipping auto-commit: ' + (err.stdout?.toString().trim() || err.message));
}
