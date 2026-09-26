// Runs inside actions/github-script, so `github` and `core` are provided.
// Files an issue only when something is genuinely flagged — a clean run stays
// silent rather than spamming the tracker every Monday.
const fs = require('fs');

const reportPath = 'comment.md';
if (!fs.existsSync(reportPath)) {
  core.info('No report file produced — nothing to do.');
  return;
}

const report = fs.readFileSync(reportPath, 'utf8');
const raw = fs.existsSync('link-report.txt') ? fs.readFileSync('link-report.txt', 'utf8').trim() : '';

if (!raw) {
  core.info('No flagged links — staying silent.');
  return;
}

const flagged = raw.split('\n').length;
const { owner, repo } = context.repo;
const title = `Link check: ${flagged} URL(s) need review`;
const runUrl = `${context.serverUrl}/${owner}/${repo}/actions/runs/${context.runId}`;

try {
  await github.rest.issues.create({
    owner,
    repo,
    title,
    body: `${report}\n\n[View the workflow run](${runUrl})`,
    labels: ['link-rot'],
  });
  core.info(`Opened an issue for ${flagged} flagged URL(s).`);
} catch (err) {
  // A pre-existing open issue is fine; don't fail the run for it.
  core.info('Could not open issue: ' + err.message);
}
