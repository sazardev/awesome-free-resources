# Awesome Free Resources

A curated, **link-verified** collection of **1,996 free and open-source resources** for
developers, scientists, engineers, students and self-learners.

Everything here is free to read, free to use, and — in the vast majority of cases —
openly licensed by its authors. No paywalled papers, no paid courses, no trials.

**Browse it online:** <https://sazardev.github.io/awesome-free-resources/>

---

## Why this exists

Most "awesome" lists are unverified. This one is not:

- **Every URL was checked over HTTP** with retries. Broken links were either repaired
  (often to a moved page) or removed outright.
- **Duplicates were removed** programmatically by title *and* URL.
- The result: **1,996 links across 63 categories, from 1,332 distinct domains.**

That work is reproducible — see [Regenerating](#regenerating).

## What's inside

<details open>
<summary><b>All 63 categories, 1,996 links</b> (click to expand)</summary>

<!-- AUTO-GENERATED: category table. Regenerate with `node seo.mjs`. -->
| Category | Links |
|---|---|
| Linux & Unix | 95 |
| AI / ML | 77 |
| Computer Science | 74 |
| Papers & preprints | 74 |
| Framework docs | 64 |
| Language docs | 58 |
| Go frameworks | 52 |
| Android | 51 |
| Medicine | 49 |
| Science | 48 |
| Flutter | 47 |
| Big tech blogs | 46 |
| Free textbooks | 46 |
| Topic blogs | 46 |
| Rust ecosystem | 41 |
| Electronics | 39 |
| DevOps / Infra | 38 |
| Chemistry | 35 |
| Physics | 34 |
| Fun facts | 33 |
| Influential tech | 33 |
| Dev blogs | 32 |
| Omarchy | 32 |
| Databases | 31 |
| Tech pioneers | 31 |
| Hardware & Making | 30 |
| Kotlin | 30 |
| Nutrition | 30 |
| Quantum & Atomic | 30 |
| Astronomy | 29 |
| Compilers | 27 |
| Semiconductors & Chips | 27 |
| Tools & productivity | 27 |
| Data Engineering | 26 |
| Rust | 26 |
| Anatomy | 25 |
| Architecture | 25 |
| Software Engineering | 25 |
| Electricity & Power | 24 |
| Go | 24 |
| Computer Architecture | 23 |
| Science news | 23 |
| Circuits & Signals | 22 |
| CS fundamentals | 22 |
| Embedded & Devices | 22 |
| News & aggregators | 21 |
| Technical writing | 21 |
| Biology | 20 |
| Particle physics | 20 |
| Health | 19 |
| Physiotherapy | 19 |
| Robotics & Control | 19 |
| Mathematics | 17 |
| Go blogs | 14 |
| Research data | 14 |
| Device Repair | 13 |
| Security | 13 |
| Testing | 13 |
| Web Performance | 13 |
| Self-taught learning | 12 |
| Performance | 11 |
| Formal Methods | 10 |
| Tech Pioneers | 4 |
<!-- /AUTO-GENERATED -->

</details>

Highlights by area:

| Area | What's there |
|---|---|
| **Software & Dev** | SWE, architecture, AI/ML, compilers, Go, Rust, Flutter, Android, Kotlin, DevOps, testing, security |
| **Linux, Unix & Omarchy** | Kernel docs, Arch Wiki, Beej's guides, POSIX, systemd, robotics-style sysadmin refs; a full **Omarchy** manual index |
| **Electronics & Devices** | All About Circuits, MIT 6.002, KiCad, Zephyr, RISC-V, Tiny Tapeout, iFixit, GPU Gems |
| **Papers, Books & Blogs** | arXiv across 12 categories, bioRxiv/medRxiv/chemRxiv, INSPIRE-HEP, AI paper readers, 46 free textbooks, 46 topic blogs |
| **Science** | OpenStax, LibreTexts, Scholarpedia, EurekAlert, Zenodo, OpenAlex, ScienceDaily |
| **Physics & Chemistry** | Feynman Lectures, Srednicki's QFT, David Tong, Preskill, PubChem, NIST WebBook, Molecule of the Month |
| **Atomic & Particles** | INSPIRE-HEP, CERN Open Data, GWOSC, PDG, Nobel Prize, Nobel lectures |
| **Astronomy & Biology** | NASA, ESA/Webb, Ned Wright, UniProt, PDB, Human Protein Atlas, iBiology |
| **Medicine** | StatPearls, PMC, Cochrane, LITFL, Geeky Medics, PLOS Medicine, ClinicalTrials.gov |
| **Nutrition & Health** | FoodData Central, Open Food Facts, MyPlate, NCCIH, NIH ODS, EFSA |
| **Anatomy & Physiotherapy** | Z-Anatomy 3D atlas, TeachMeAnatomy, Physiopedia, JOSPT guidelines, PEDro |
| **Robotics & Control** | Underactuated Robotics, Probabilistic Robotics, State Estimation, ROS 2, TLA+ |
| **Formal Methods** | TLA+, Dafny, Why3, Frama-C, Alloy, Lean/Coq/Isabelle, FLAME |
| **Mathematics** | Book of Proof, Tao's Analysis, Abstract Algebra, APEX Calculus, interactive references |
| **Data Engineering** | dbt, Airflow, Flink, dbt, database internals, The Art of PostgreSQL |
| **JavaScript & language docs** | MDN, WHATWG, ECMA-262, TypeScript, Python/Rust/Go/C++/Elixir/Haskell references |
| **Self-taught learning** | Eloquent JS, Automate the Boring Stuff, Learn You a Haskell, SICP, exercises |
| **Web Performance** | Core Web Vitals, HTTP caching, DevTools, Web Almanac, performance.now() talks |
| **Tech Pioneers** | Bret Victor, Jef Raskin, Stallman, McCarthy, Shannon, Hofstadter, plus primary sources |
| **Fun & News** | Quanta, 3Blue1Brown, Numberphile, Lobsters, Computerphile |

## How it stays up to date

This is the part that makes it a real resource rather than a snapshot.

**`.github/workflows/verify.yml`** runs on every pull request and fails if:

- a `data-*.js` file does not parse
- any entry is missing a field, or has a URL that will not parse
- two entries share a title or a URL
- the committed `all.js`, `chromium-bookmarks.html`, `sitemap.xml` or README stats
  are **stale** — it regenerates them and fails on any diff

**`.github/workflows/maintain.yml`** runs on push to `main` and every Monday:

1. regenerates everything and commits the result
2. re-checks all ~1,330 unique URLs over HTTP (12 workers, HEAD then GET, 3 attempts)
3. classifies the results, so genuine 404s are separated from bot-blocks (401/403/406)
   and from timeouts, which in CI are usually rate-limiting rather than dead links
4. opens a single **issue** with the report only if something is actually flagged, so
   the list degrades honestly instead of quietly rotting

Run the same thing locally:

```bash
node build.mjs && node dedupe.mjs && node build.mjs \
  && node make-bookmarks.mjs && node seo.mjs
```

## Indexing

The site is set up to be indexed properly:

- [`sitemap.xml`](sitemap.xml) — 264 URLs: the root plus one per category, using the
  page's own `#cat-...` anchors, plus tag-filtered entry points
- [`robots.txt`](robots.txt) — open, and advertises the sitemap and the two
  machine-readable downloads
- **Open Graph + Twitter card** tags for link previews in Slack, Discord and X
- **JSON-LD** `CollectionPage` structured data, including `isAccessibleForFree`,
  the CC0 license, and `DataDownload` pointers to `all.js` and the bookmarks file
- [`_headers`](_headers) — caching rules, `nosniff`, referrer policy, and a
  `Content-Disposition` so the bookmarks file downloads instead of rendering
- [`404.html`](404.html) — a real 404 page instead of GitHub's default

Submit `https://sazardev.github.io/awesome-free-resources/sitemap.xml` to
Google Search Console to get it indexed properly.

## Machine-readable

The whole collection is available as data, so you can use it however you like:

- **[`all.js`](all.js)** — a JSON array of every entry
  (`{ c, t, u, d, g }` = category, title, url, description, tags)
- **[`chromium-bookmarks.html`](chromium-bookmarks.html)** — Netscape bookmark
  export, importable into Chromium/Chrome/Firefox/Safari
- **[`sitemap.xml`](sitemap.xml)** — one URL per category for search engines

```bash
# ten random bookmarks from the "Rust" category
curl -s https://sazardev.github.io/awesome-free-resources/all.js \
  | node -e 'const B=JSON.parse(require("fs").readFileSync(0,"utf8").replace(/^const BOOKMARKS = /,"").replace(/;\n?const[\s\S]*/,"").replace(/;\s*$/,"")); ...'
```

Or if you have the repo checked out:

```bash
node -e 'const B=new Function(require("fs").readFileSync("all.js","utf8")+";return BOOKMARKS;")();
         console.log(B.filter(b=>b.c==="Rust").slice(0,5).map(b=>b.u).join("\n"))'
```


## The browsable page

`index.html` is a self-contained, dependency-free page that loads the data from
`all.js` and runs straight from the filesystem or GitHub Pages.

- **Search** by title, description, topic, tag or domain. Multi-word = AND.
- **Filter by tag** with a `#` prefix: `#must-read`, `#free`, `#books`,
  `#rust #must-do`. Click any tag chip to apply it.
- Tags marked `must-*` are the highest-signal entries in their category.
- **Keyboard:** <kbd>/</kbd> to search, <kbd>Esc</kbd> to clear.
- **Light/dark theme**, remembered in `localStorage`.

## Layout

```
.
├── index.html                 # the browsable page (self-contained)
├── all.js                     # generated: all data + categories + tags
├── chromium-bookmarks.html    # Netscape export — import into any Chromium/Chrome/Firefox
├── data-*.js                  # the source of truth, one file per topic area
├── build.mjs                  # merge + validate + generate all.js
├── dedupe.mjs                 # remove duplicate titles/URLs
├── make-bookmarks.mjs         # generate chromium-bookmarks.html
├── write-bookmarks.mjs        # write directly into a Chromium profile
└── LICENSE                    # CC0 1.0
```

The `data-*.js` files are plain JS arrays, so they stay easy to read and diff:

```js
{ c: "Physics", t: "The Feynman Lectures on Physics",
  u: "https://www.feynmanlectures.caltech.edu/",
  d: "Free, digitized, complete. The best physics textbook ever written.",
  g: ["books", "physics", "free", "must-read"] }
```

`c` category · `t` title · `u` url · `d` description · `g` tags.

## Contributing

Adding links is welcome. Edit the relevant `data-*.js` file, keeping the array sorted
loosely by topic, then run:

```bash
node build.mjs          # merge, validate, regenerate all.js
node dedupe.mjs         # drop any duplicate title/URL
node make-bookmarks.mjs # regenerate the importable bookmarks file
```

`build.mjs` fails loudly on missing fields, malformed URLs and duplicates, so a
malformed entry will not slip through.

## Installing the bookmarks

### As a browser bookmarks bar (recommended)

Download `chromium-bookmarks.html`, then in Chromium/Chrome press
<kbd>Ctrl/⌘ Shift</kbd>+<kbd>O</kbd> → *Import and export* → *Import bookmarks*,
and select the file. You get all 1,996 links in 12 grouped folders.

### As a browsable page

Just open `index.html` — no server, no build step, no dependencies.

### Directly into a live profile

On Linux, with Chromium **closed**:

```bash
node write-bookmarks.mjs ~/.config/chromium/Default/Bookmarks
```

The script merges into the existing profile, preserves your own bookmarks, and is
idempotent — running it again replaces only the generated folders.

## Contributing guidelines for links

Please add resources that are:

1. **Free to read in full** — or at least free at a useful depth. Flag paywalls rather
   than pretending they are open.
2. **Genuinely free or open source**, not a free tier or a trial.
3. **Worth reading** — the list is curated, not exhaustive. Ten great links beat a
   hundred mediocre ones.
4. **Stable** — prefer a canonical URL over a deep link that will rot.

Mark the highest-signal entries with a `must-read` / `must-do` / `must-use` tag.

## Known caveats

- **6 links are `http://`**, not `https://`: Gelman's *Bayesian Data Analysis*,
  *Learn You a Haskell*, Preskill's quantum notes, Subatomic Cafe, Scholarpedia and
  *This Week in Virology*. Their HTTPS endpoints did not respond during verification,
  and a working HTTP link beats a broken HTTPS one. All six support HTTPS in a normal
  browser — they are reachable, just not from the network this list was built on.
- **Some resources are free but not openly licensed** (e.g. the Feynman Lectures are
  Caltech-hosted but not CC-licensed as a whole). Check each project's own terms.
- **The list rots.** `data/*.js` reflects links verified in the last days of
  development. Spot-checking before you rely on a link is still worth it.

## License

Released into the public domain under [CC0 1.0](LICENSE).

The links themselves belong to their respective owners and are **not** covered by this
license — the same way a table of contents does not grant rights to the books it lists.
Some resources are not officially free (e.g. *A Tour of Go* is provided by Google, and
Feynman Lectures are Caltech-hosted but not CC-licensed as a whole). Treat this list as a
starting point and follow each project's own terms.

## Contributions

Contributions are welcome, especially:

- **Repairs.** The list rots. If a link is dead, an issue or PR with the correct URL is
  genuinely valuable.
- **Depth.** Several topics could go further — signal processing, control theory,
  formal methods, number theory, and non-English material are all thin.
- **Freshness.** Papers and blog lists in particular go stale fast.

---

*Built by iterating: write → check every link over HTTP → repair or drop → deduplicate →
re-publish.*
