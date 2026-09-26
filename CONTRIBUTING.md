# Contributing

Adding a link takes about two minutes. This file exists so you do not have to
learn the rules by having CI fail on you.

## The whole process

```bash
git clone https://github.com/sazardev/awesome-free-resources
cd awesome-free-resources
node --version          # needs 20 or newer, nothing else to install

# 1. add your line to the right data-*.js file (see below)
# 2. regenerate everything
node scripts/rebuild.mjs

# 3. sanity-check exactly what CI will check
node scripts/check-data.mjs
node scripts/check-render.mjs

# 4. commit the generated files too, then open a pull request
git add -A
git commit -m "Add <thing>"
git push origin HEAD:add-links
```

There are no dependencies to install. The scripts use only Node's standard
library.

## Where to put your link

Each `data-NN-topic.js` file holds one array. Pick the file whose name matches your
topic, and if nothing fits, create `data-99-yourtopic.js` with this shape:

```js
// Part 99: your topic
const BOOKMARKS_99 = [
  { c: "Category Name", t: "Resource title", u: "https://example.org/", d: "One sentence on what it is and why it is worth your time.", g: ["tag", "free"] },
];
```

`build.mjs` discovers every `data-*.js` file automatically, so a new file needs no
registration anywhere.

### Field reference

| Field | Meaning |
|---|---|
| `c` | Category. **Must exactly match** a name in `groups.mjs`, or the link will not render — see below. |
| `t` | Title. Human readable, not a slug. |
| `u` | URL. `https://` only. Must be a real page, not a search page. |
| `d` | One or two sentences. What it is, and who it is for. |
| `g` | Array of tags. Reuse existing tags where one fits; see the tag cloud on the site. |

## Verify before you write the line down

This is the part that matters most, and the part people skip.

**Check the URL exists before you add it.** A confident-looking URL that 404s is
worse than no link. A previous batch of 34 entries in this repo were invented deep
paths that all turned out to be dead — `github.com/jketterl/urh` does not exist
(the project moved to `jopohl/urh`), and a dozen made-up
`rfwireless-world.com` and `ti.com` paths were not real either. Every one of them
had to be removed before the pull request could land.

```bash
curl -s -o /dev/null -w '%{http_code}\n' -L "https://example.org/page"
```

For a GitHub repository, the API is authoritative and will catch a wrong owner or
a typo in the repo name:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://api.github.com/repos/OWNER/REPO   # want 200
```

For a Wikipedia article, use the API rather than fetching the page, because
Wikipedia throttles by returning `404` instead of `429` when it is rate-limiting
you. Check the title resolves:

```bash
curl -s 'https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&titles=Exact%20Title'
```

A valid article has no `"missing"` key. Note that the API writes it as
`"missing": ""` — an empty string, which is **falsy** in JavaScript, so a naive
`p.missing ? ... : ...` check will wrongly report every absent article as present.

If you cannot confirm a URL resolves, **do not add it**. The CI check is the same
one, so it will catch it anyway; finding out locally is faster.

## Rules the automated checks enforce

`verify.yml` runs on every pull request and fails on any of these.

**Your category must be in `groups.mjs`.** If a `c` value is not listed in
`groups.mjs`, `check-data.mjs` fails with `category "X" is not in groups.mjs`. This
is not cosmetic: 132 links once sat in exactly that state and were invisible on the
site while every build reported success.

**Category names are compared case- and punctuation-insensitively.** `Tech
pioneers` and `Tech Pioneers` are treated as a collision, because they render as
two near-identical headings that split the links between them.

**No duplicate titles or URLs, anywhere in the collection.** Not just within your
file — against all 21 of them. `node dedupe.mjs` will strip them, but it keeps the
first occurrence, so check that the surviving entry is the better one.

**Every entry needs all five fields**, and `u` must parse and use `https`.

**The generated files must be committed.** If `all.js`, `chromium-bookmarks.html`,
`sitemap.xml` or the README statistics are out of date, CI fails and tells you to
run `node scripts/rebuild.mjs`. This is deliberate: the same drift is how a
hand-maintained link count stayed at `1,996` while the data held `2,327`.

## What makes a good link

1. **Free to read in full** — or free at a genuinely useful depth. Flag a paywall
   rather than pretending it is open.
2. **Genuinely free or open source**, not a free tier or a trial.
3. **Worth reading.** This list is curated, not exhaustive. Ten great links beat a
   hundred mediocre ones.
4. **Stable.** Prefer a canonical page over a deep link that will rot.

Add `must-read`, `must-do` or `must-use` to the tags for the genuinely
high-signal entries. There are 12 such tags across 2,400 links, so it still means
something.

## Radio and telecommunications specifically

Receiving and analysing is unrestricted. **Transmitting is regulated**, and the
line between the two is drawn entirely by documents that are free to read: the ITU
Radio Regulations, 47 CFR Parts 15/95/97, and your national regulator's spectrum
pages. Please add those alongside the technical material when you add something
that involves putting a signal on the air.

Please do not contribute tooling whose only purpose is interfering with radio
services that are not yours. Receiving, decoding your own transmissions,
protecting your own networks, and research stacks that are openly published for
legitimate study are all welcome.

## Reporting a dead or wrong link

Open an issue with the label `link-rot`, or just paste the URL. The weekly
`maintain.yml` run opens issues automatically for anything it finds, and you are
welcome to add what it missed.

If a link is fine but has moved, a replacement is far more useful than a removal.

## Small changes to the site or scripts

Also welcome, and more than you might expect — the two most important fixes in the
history of this repo were a reproducible-build bug and a broken link checker, not
a content change. If you touch anything generated, run `node scripts/rebuild.mjs`
and commit the result.

## Code of conduct

Be accurate and be kind. If your submission gets rejected, it is usually because a
URL did not verify, not because the topic was uninteresting.
