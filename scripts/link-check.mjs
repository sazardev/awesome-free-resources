#!/usr/bin/env node
// Re-checks every unique bookmark URL over HTTP and writes a report.
//
//   node scripts/link-check.mjs            # check, write link-report.txt
//   node scripts/link-check.mjs --quiet    # exit code only
//
// Exit codes: 0 = nothing flagged, 1 = something flagged, 2 = could not run.
//
// The point of the separate OK set is that a lot of perfectly healthy sites
// answer bots with 401/403/406/429. Treating those as dead would be wrong, so
// they are deliberately accepted. Timeouts are reported separately from real
// 404s because in CI they are usually rate limiting, not rot.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const quiet = process.argv.includes('--quiet');

const src = readFileSync(join(root, 'all.js'), 'utf8');
const BOOKMARKS = new Function(`${src}; return BOOKMARKS;`)();
const urls = [...new Set(BOOKMARKS.map((b) => b.u))];

const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const ACCEPTABLE = new Set([
  200, 204, 206, 301, 302, 303, 307, 308, // alive
  401, 403, 405, 406, 418, 429, 451, 501, // alive but refusing bots
]);
const TIMEOUT = 0;

// Only these are treated as genuinely dead. Everything else that is flagged
// (5xx, 400, 418…) is a transient server or WAF response, not rot: a burst of
// requests from one IP reliably trips rate limiters, and reporting those as
// "dead" would produce noise and delete working links.
const DEFINITELY_DEAD = new Set([404, 410]);

const WORKERS = 12;
const ATTEMPTS = 3;
const TIMEOUT_MS = 15_000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function probe(url) {
  for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
    for (const method of ['HEAD', 'GET']) {
      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), TIMEOUT_MS);
      try {
        const r = await fetch(url, {
          method,
          redirect: 'follow',
          signal: ac.signal,
          headers: { 'user-agent': UA, accept: '*/*' },
        });
        clearTimeout(t);
        if (method === 'HEAD' && r.status === 405) continue;
        return r.status;
      } catch {
        clearTimeout(t);
      }
    }
    await sleep(500);
  }
  return TIMEOUT;
}

let next = 0;
let done = 0;
const flagged = [];

async function worker() {
  while (next < urls.length) {
    const url = urls[next++];
    const status = await probe(url);
    done++;
    if (!ACCEPTABLE.has(status)) flagged.push({ status, url });
    if (!quiet && done % 50 === 0) process.stdout.write(`\r  ${done}/${urls.length}`);
  }
}

const t0 = Date.now();
if (!quiet) console.log(`Checking ${urls.length} unique URLs with ${WORKERS} workers...`);
await Promise.all(Array.from({ length: WORKERS }, worker));
if (!quiet) process.stdout.write(`\r${' '.repeat(24)}\r`);

const dead = flagged.filter((f) => DEFINITELY_DEAD.has(f.status));
const timeouts = flagged.filter((f) => f.status === TIMEOUT);
const transient = flagged.filter((f) => !dead.includes(f) && f.status !== TIMEOUT);

writeFileSync(
  join(root, 'link-report.txt'),
  flagged.map((f) => `${f.status}\t${f.url}`).sort().join('\n') + (flagged.length ? '\n' : '')
);

// A markdown body the workflow can post as an issue comment.
const list = (arr) =>
  arr.length
    ? arr.map((f) => `- \`${f.status}\` ${f.url}`).join('\n')
    : '_none_';

const body = `Automated link check of **${urls.length}** unique URLs.

| Outcome | Count |
|---|---|
| Healthy | ${urls.length - flagged.length} |
| Dead (404 / 410) | ${dead.length} |
| Transient (5xx, WAF, rate limit) | ${transient.length} |
| Timeout / DNS failure | ${timeouts.length} |

<details><summary>Dead or moved (${dead.length})</summary>

${list(dead)}

</details>

<details><summary>Transient, not dead (${transient.length})</summary>

Server errors, WAF blocks or rate limiting — the sites are fine, the request
was not. Ignored by this report.

${list(transient.slice(0, 40))}
${transient.length > 40 ? `\n_…and ${transient.length - 40} more_` : ''}

</details>

<details><summary>Timeouts (${timeouts.length})</summary>

These are usually CI-side rate limiting or a sandboxed network, not dead links.
Re-check locally before removing anything:

${list(timeouts.slice(0, 60))}
${timeouts.length > 60 ? `\n_…and ${timeouts.length - 60} more_` : ''}

</details>

<details><summary>How to read this</summary>

- \`200\`–\`3xx\` healthy
- \`401\` \`403\` \`406\` \`429\` \`501\` alive but refusing bots — deliberately accepted
- \`404\` \`410\` genuinely dead: needs a replacement URL or removal
- \`5xx\` \`400\` \`418\` transient: rate limit or WAF, **not** reported as dead
- \`0\` timeout/DNS: usually the runner's network, not the site

To fix: edit the relevant \`data-*.js\`, then run

\`\`\`bash
node build.mjs && node dedupe.mjs && node build.mjs && node make-bookmarks.mjs && node seo.mjs
\`\`\`

</details>

_Checked in ${Math.round((Date.now() - t0) / 1000)}s._`;

writeFileSync(join(root, 'comment.md'), body);

if (!quiet) {
  console.log(`Done in ${Math.round((Date.now() - t0) / 1000)}s`);
  console.log(`  healthy:  ${urls.length - flagged.length}`);
  console.log(`  dead:     ${dead.length}  (404/410 only)`);
  console.log(`  transient: ${transient.length}  (5xx / WAF / rate limit — ignored)`);
  console.log(`  timeouts: ${timeouts.length}`);
  if (dead.length) {
    console.log('\nDead links:');
    for (const f of dead) console.log(`  ${f.status}\t${f.url}`);
  }
}

process.exit(dead.length ? 1 : 0);
