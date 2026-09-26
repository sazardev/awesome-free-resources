# Awesome Free Resources

A curated, **link-verified** collection of **1,864 free and open-source resources** for
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
- The result: **1,864 links across 55 categories, from 1,223 distinct domains.**

That work is reproducible — see [Regenerating](#regenerating).

## What's inside

| Folder | Categories | Links | Highlights |
|---|---|---|---|
| **Software & Dev** | 22 | 746 | SWE, architecture, AI/ML, compilers, Go, Rust, Flutter, Android, Kotlin, DevOps, testing, security |
| **Linux, Unix & Omarchy** | 6 | 303 | Kernel docs, Arch Wiki, Beej's guides, POSIX, systemd; a full **Omarchy** manual index |
| **Electronics & Devices** | 8 | 200 | All About Circuits, MIT 6.002, KiCad, Zephyr, RISC-V, Tiny Tapeout, iFixit, GPU Gems |
| **Papers, Books & Blogs** | 3 | 166 | 74 papers/preprints + AI readers, 46 free textbooks, 46 topic blogs |
| **Science** | 3 | 85 | OpenStax, LibreTexts, Scholarpedia, EurekAlert, Zenodo, OpenAlex |
| **Physics & Chemistry** | 2 | 69 | Feynman Lectures, Srednicki's QFT, David Tong, PubChem, NIST WebBook |
| **Atomic & Particles** | 2 | 50 | INSPIRE-HEP, CERN Open Data, GWOSC, PDG, Preskill, Nobel Prize |
| **Astronomy & Biology** | 2 | 49 | NASA, ESA/Webb, Ned Wright, UniProt, PDB, Human Protein Atlas, iBiology |
| **Medicine** | 1 | 49 | StatPearls, PMC, Cochrane, LITFL, Geeky Medics, PLOS Medicine, ClinicalTrials |
| **Nutrition & Health** | 2 | 49 | FoodData Central, Open Food Facts, MyPlate, NCCIH, NIH ODS |
| **Anatomy & Physiotherapy** | 2 | 44 | Z-Anatomy 3D atlas, TeachMeAnatomy, Physiopedia, JOSPT guidelines, PEDro |
| **Fun & News** | 2 | 54 | Quanta, 3Blue1Brown, Numberphile, Lobsters, Computerphile |

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
and select the file. You get all 1,864 links in 12 grouped folders.

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
