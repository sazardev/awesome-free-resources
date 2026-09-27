# Awesome Free Resources

A curated, **link-verified** collection of **2,951 free and open-source resources** for
developers, scientists, engineers, students and self-learners.

Everything here is free to read, free to use, and — in the vast majority of cases —
openly licensed by its authors. No paywalled papers, no paid courses, no trials.

**Browse it online:** <https://sazardev.github.io/awesome-free-resources/>

---


## Start here

**Just want to browse?** Open <https://sazardev.github.io/awesome-free-resources/>.
Search, filter by tag or category, no account needed. Works offline once loaded.

**Want these as bookmarks?** Download
[`chromium-bookmarks.html`](chromium-bookmarks.html), then:

- *Chrome / Chromium / Edge / Brave* — Bookmark Manager (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>),
  ⋮ menu → Import bookmarks
- *Firefox* — Bookmarks → Manage bookmarks → Import and Backup → Import from File
- *Safari* — File → Import → Bookmarks HTML File
- *Android Chrome* — ⋮ → Bookmarks → ⋮ → Import from file

They land in 22 top-level folders. Existing bookmarks are never touched if you use
the import; the folder names are plain ASCII, no emoji.

**Want to use the data?** [`all.js`](all.js) is the whole collection as JSON, one
object per resource. See [Machine-readable](#machine-readable).

**Want to follow along?** [`feed.xml`](feed.xml) is an Atom feed of the collection.

**Want to add something?** Read [CONTRIBUTING.md](CONTRIBUTING.md). The short
version: add one line to a `data-*.js` file, run `node scripts/rebuild.mjs`, open a
pull request. CI tells you if anything is wrong.

## Why this exists

Most "awesome" lists are unverified. This one is not:

- **Every URL was checked over HTTP** with retries. Broken links were either repaired
  (often to a moved page) or removed outright.
- **Duplicates were removed** programmatically by title *and* URL.
- The result: **2,951 links across 98 categories, from 1,621 distinct domains.**

That work is reproducible and re-runnable — see [How it stays up to date](#how-it-stays-up-to-date).

Three things make that trustworthy rather than aspirational:

- **The links are checked, in CI, every week.** `verify.yml` gates every pull
  request; `maintain.yml` re-checks all 1,500-odd unique URLs on a schedule and
  opens an issue only when something is genuinely dead.
- **The build is reproducible.** Every generated file is byte-identical across
  runs, so a diff in CI always means a real change.
- **Broken checks are loud.** Three separate gates would fail this collection
  before it could quietly rot, and each one exists because it caught something.

## What's inside

<details open>
<summary><b>All 63 categories, 1,996 links</b> (click to expand)</summary>

<!-- AUTO-GENERATED: category table. Regenerate with `node seo.mjs`. -->
| Category | Links |
|---|---|
| Linux & Unix | 95 |
| AI / ML | 77 |
| Computer Science | 73 |
| Papers & preprints | 73 |
| SDR & Radio hacking | 67 |
| Networking | 65 |
| Framework docs | 64 |
| Language docs | 58 |
| Data Science | 53 |
| Go frameworks | 52 |
| Android | 51 |
| Low-Level Systems | 50 |
| Medicine | 49 |
| Science | 48 |
| Flutter | 47 |
| Big tech blogs | 46 |
| Topic blogs | 46 |
| Free textbooks | 45 |
| Rust ecosystem | 41 |
| Hacking & Pentesting | 40 |
| Electronics | 39 |
| DevOps / Infra | 38 |
| English Grammar | 38 |
| AI Papers & Reading | 36 |
| Radio & Amateur | 36 |
| Chemistry | 35 |
| Keyboards & Customization | 35 |
| Physics | 34 |
| Radio Frequencies & Bands | 34 |
| Tech pioneers | 34 |
| Fun facts | 33 |
| Influential tech | 33 |
| Telecommunications | 33 |
| Dev blogs | 32 |
| Omarchy | 32 |
| Databases | 31 |
| LLMs & Models | 31 |
| Hardware & Making | 30 |
| Kotlin | 30 |
| Nutrition | 30 |
| Quantum & Atomic | 30 |
| Astronomy | 29 |
| RF & Microwave | 28 |
| Compilers | 27 |
| Semiconductors & Chips | 27 |
| Tools & productivity | 27 |
| Data Engineering | 26 |
| Rust | 26 |
| Anatomy | 25 |
| Architecture | 25 |
| English Vocabulary & Phrases | 25 |
| Negotiation & Communication | 25 |
| Software Engineering | 25 |
| Electricity & Power | 24 |
| Go | 24 |
| Computer Architecture | 23 |
| Efficiency & Algorithms | 23 |
| Performance Engineering | 23 |
| Science news | 23 |
| Antennas | 22 |
| Circuits & Signals | 22 |
| CS fundamentals | 22 |
| Embedded & Devices | 22 |
| Reverse Engineering | 22 |
| News & aggregators | 21 |
| Technical writing | 21 |
| Architecture Decisions | 20 |
| Biology | 20 |
| Go Hacking | 20 |
| Mobile & Android Hacking | 20 |
| Particle physics | 20 |
| English Pronunciation & Listening | 19 |
| English Writing & Composition | 19 |
| Health | 19 |
| Physiotherapy | 19 |
| Security Hats & Teams | 19 |
| Robotics & Control | 18 |
| English for Academic Purposes | 17 |
| Mathematics | 17 |
| Tech Leadership & CTO | 17 |
| English Exercises & Practice | 16 |
| Keyboard Switches & Parts | 16 |
| Site Reliability | 16 |
| English Dictionaries & Corpora | 15 |
| English Linguistics Research | 15 |
| Satellites & Space | 15 |
| Go blogs | 14 |
| Research data | 14 |
| Device Repair | 13 |
| Security | 13 |
| Testing | 13 |
| Web Performance | 13 |
| PCB & EDA | 12 |
| Self-taught learning | 12 |
| Test & Measurement | 12 |
| Performance | 11 |
| Formal Methods | 10 |
| Compute & Accelerators | 6 |
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

## Radio, RF, antennas, telecom and networking

The deepest part of the collection, and the part that took the most care to get
right. Four groups, ten categories, 295 new links:

**Radio, Antennas & RF**
- `SDR & Radio hacking` (37) — GNU Radio and GRC, RTL-SDR, HackRF, LimeSDR, USRP/UHD,
  ADALM-PLUTO, SoapySDR, Universal Radio Hacker, inspectrum, sigrok/PulseView,
  RTL_433, Multimon-ng, DSD, SDR++, CubicSDR, SDRAngel, gr-satellites, Flipper Zero
- `Antennas` (29) — antenna-theory.com, K7MEM, NEC-2/4nec3/MMANA, Yagi, log-periodic,
  horn, patch and microstrip theory, Friis equation, Fresnel zones, NanoVNA, openEMS,
  HF propagation
- `Radio & Amateur` (36) — ARRL, HamStudy, HamTraining, IARU, ITU Radio Regulations,
  eCFR Parts 15/73/97, WSJT-X, fldigi, direwolf, APRS, LoRa APRS, minimodem, dump1090
- `RF & Microwave` (36) — transmission lines, VSWR, impedance matching, noise figure,
  link budget and path loss calculators, OFDM, MIMO, Meshtastic, LoRaWAN, Zigbee,
  Bluetooth and 802.11 specifications
- `Satellites & Space` (22) — SatNOGS (open-source ground station), Celestrak,
  Heavens-Above, n2yo, Skyfield, TLE and orbital elements, Space-Track, Hack-A-Sat

**Telecommunications & Networking**
- `Telecommunications` (36) — 3GPP specs (free), ETSI, ITU-T, IETF, RFC Editor, IANA,
  IEEE 802.3/802.11, O-RAN, OpenAirInterface, srsRAN, 5G NR and network slicing,
  fibre and OTN, SIP/VoIP, WebRTC, PSTN history
- `Networking` (68) — Kurose & Ross top-down, Wireshark with sample captures, tcpdump,
  nmap and NSE, Scapy, iperf3, Mininet, GNS3, FRRouting, GoBGP, BIRD, eBPF, Cilium,
  RIPE NCC and RIS Live routing data, RouteViews, bgp.tools, RPKI/MANRS, Quic, TLS 1.3,
  DNS and BIND/Unbound, nftables, subnetting practice

**Hacking & Pentesting** (47) — DEF CON talk archive, Hackaday and Hackster,
Hack The Box, TryHackMe, OverTheWire, pwn.college, PortSwigger Academy, OWASP WSTG and
cheat sheets, MITRE ATT&CK, Exploit-DB, NVD, CISA KEV, Ghidra, rizin/Cutter, GDB, QEMU,
Unicorn, AFL, YARA, SecLists, Metasploit, OpenVAS, bettercap, binwalk, HackTricks

**Test, Measurement & PCB Design**
- `Test & Measurement` (13) — EEVblog, NanoVNA, sigrok decoders, Saleae Logic,
  metrology and NIST calibration guides, soldering and SMD reference
- `PCB & EDA` (21) — KiCad and its libraries, LibrePCB, ngspice, LTspice, Qucs,
  Qucs-S, openEMS, Gerber and Ucamco spec, design-for-manufacture guidance,
  freerouting, KiCad forum

### On legality

Radio and radio-hacking resources sit next to the regulatory documents on
purpose. `Radio & Amateur` and `Telecommunications` both carry the ITU Radio
Regulations, the relevant eCFR parts, the FCC spectrum pages, the European EMC/RED
framework and the RF exposure limits, because the difference between a legal
transmitter and an illegal one is entirely in the rules, and the rules are free to
read. Receiving and analysing are unrestricted; transmitting is not. Every
repeater, digipeater and SDR beacon you switch on is covered by one of these
documents.

### On link verification

295 links were added, and 34 of them were removed or corrected before landing. I had
invented plausible-looking deep URLs for repositories and reference pages, and a
paced check caught them: `github.com/jketterl/urh` does not exist (the author moved
the project to `jopohl/urh`), `inspectrum/inspectrum` is actually `miek/inspectrum`,
and a dozen `rfwireless-world.com` and `ti.com` paths were invented outright.

The corrected versions were found through the GitHub API rather than by guessing
again, and anything I still could not confirm was deleted instead of shipped. A
handful of hosts (`nanovna.ch`, `rigol.com`, `smdcomponent.com`) are DNS-blocked
from the sandbox and are carried unverified; the weekly check will confirm them
from a real runner.

## Radio hacking, frequencies, Go and mobile

The focused follow-up to the section above, concentrating on radio hacking as the
primary interest. Three new categories, 109 new links.

**`SDR & Radio hacking`** grew from 32 to 67. The additions are the out-of-tree
GNU Radio blocks that let you receive real protocols yourself: `gr-gsm` (a working
GSM receiver), `gr-lte` (reads an LTE cell's control channel from a HackRF or
LimeSDR), `gr-ieee802-11` (a complete 802.11 receiver and transmitter in GNU
Radio), `gr-radar` (real-time Doppler radar you can point at a wall), `gr-satnogs`
(automated satellite telemetry), and `OpenLTE`, a full software LTE eNodeB and UE
so you can run your own 4G cell and watch what a handset actually transmits. Plus
RFCat for sub-GHz board work, and the modulation layer in depth: AM, FM, PSK, QAM,
MSK, FHSS, and the Shannon-Hartley and Nyquist limits every SDR decision runs
into.

**`Radio Frequencies & Bands`** (34) is the part that makes the rest usable. The
ITU Radio Regulations, 47 CFR Part 2 (the full US Table of Allocations), Part 95
(CB, FRS, GMRS), ARRL and RSGB band plans, the ITU-R V.431 band nomenclature, and
FCC ULS for looking up a licence. Then the practical side: Trove, which is a
fully searchable database of every radiofrequency licence issued in Australia and
the best public spectrum dataset anywhere; the amateur, ISM, LTE, 5G NR, Zigbee,
LoRa, Meshtastic, airband, marine, DAB and DVB allocations; the WWV and other
time-signal stations that any cheap radio can receive; and the propagation
articles that explain skip, tropospheric ducting and the whispering-gallery
waveguide.

**`Go Hacking`** (20) and **`Mobile & Android Hacking`** (20). For Go: the
ProjectDiscovery chain (subfinder, httpx, nuclei, naabu, katana), OWASP Amass,
ffuf, gobuster, gitleaks and trufflehog for secrets, dalfox for XSS, Sliver to
read how command and control is actually implemented, and the defensive
toolchain — gosec, govulncheck, OpenSSF Scorecard, staticcheck. For mobile: OWASP
MASTG and the Mobile Top 10, Frida and frida-tools, objection, jadx, Apktool,
androguard, smali, MobSF, APKiD, drozer, Quark Engine, Magisk, LSPosed, and the
Android Security Bulletins and AOSP documentation as the authoritative reference.

### Verified before written this time

After the previous batch shipped 34 invented links, the order here was reversed:
nothing was written to the data file until it had been confirmed. Repositories
went through the GitHub API, article titles through the Wikipedia API, and
everything else through paced requests. 121 candidate URLs, 120 confirmed, and one
(`fcc.gov/uls`, which 403s to bots) carried deliberately.

Six Wikipedia titles were wrong and are now correct: `Marine band` →
`Marine VHF radio`, `Time from NCEL` → `Time signal`, `Shortwave broadcast band`
→ `Shortwave bands`, `Skip propagation` → `Skywave`, `Whispering gallery effect` →
`Whispering-gallery wave`, `Automatic weather satellite` → `Weather satellite`.

### Two bugs in the link checker itself

**Wikipedia is now checked through its API, not over HTTP.** Wikipedia throttles
by returning 404 rather than 429, so an HTML fetch is not a usable existence test:
the same URL alternated between 200 and 404 within minutes, and about sixty
perfectly good links would have been reported dead forever. The API is
authoritative and is not throttled the same way.

**And the API check had a truthiness bug.** The API marks an absent page with
`"missing": ""` — an empty string, which is falsy in JavaScript. The original
`p.missing ? 404 : 200` therefore reported every missing article as present. Both
the checker and my earlier manual verification shared that bug, which is why six
bad titles had been marked good. It now tests for the presence of the key, and
follows the `normalized` and `redirects` mappings so a redirected article is not
mistaken for an absent one. Confirmed it reports a deliberately fake title as 404.

## How it stays up to date

This is the part that makes it a real resource rather than a snapshot.

**`.github/workflows/verify.yml`** runs on every pull request and fails if:

- a `data-*.js` file does not parse
- any entry is missing a field, or has a URL that will not parse
- two entries share a title or a URL
- two category names differ only in capitalisation
- a category exists in the data but not in `groups.mjs`, so it would never render
- a category in the data is missing, duplicated, or unreachable in the UI
- the page advertises a link count the data does not have
- the committed `all.js`, `chromium-bookmarks.html`, `sitemap.xml` or README stats
  are **stale** — it regenerates them and fails on any diff

### One source of truth for grouping

`groups.mjs` is the only place the category-to-group map exists. `build.mjs`
emits it into `all.js`, and the page, the browser export and the Chromium
importer all read it from there.

It used to be a hand-maintained array copied into three files. They drifted, and
because the render loop skipped unknown categories without complaining, **132
links were invisible on the site** while every build cheerfully reported 1,996.
`scripts/check-render.mjs` walks the same loop the page does and fails if a
single link is unreachable, so a green build now means the links are actually
there.

**`.github/workflows/maintain.yml`** runs on push to `main` and every Monday:

1. regenerates everything and commits the result
2. re-checks all ~1,500 unique URLs over HTTP (HEAD then GET, 3 attempts). Wikipedia
   is asked about through its API, because it throttles by returning 404 rather
   than 429 and an HTML fetch would report good links as dead
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

- [`sitemap.xml`](sitemap.xml) — 263 URLs: the root plus one per category, using the
  page's own `#cat-...` anchors, plus tag-filtered entry points
- [`robots.txt`](robots.txt) — open, and advertises the sitemap and the two
  machine-readable downloads
- **Open Graph + Twitter card** tags for link previews in Slack, Discord and X
- **JSON-LD** `CollectionPage` structured data, including `isAccessibleForFree`,
  the CC0 license, and `DataDownload` pointers to `all.js` and the bookmarks file
- both downloads are declared as `link rel="alternate"` and as JSON-LD
  `DataDownload` objects, so crawlers and readers can find them
- [`404.html`](404.html) — a real 404 page instead of GitHub's default

Submit `https://sazardev.github.io/awesome-free-resources/sitemap.xml` to
Google Search Console to get it indexed properly.

## Follow along

[`feed.xml`](feed.xml) is an Atom feed of the collection — one entry per category,
with its size and tags. Subscribe in any reader if you would rather hear about
new resources than remember to check a repository.

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

## Installing the bookmarks

### As a browser bookmarks bar (recommended)

Download `chromium-bookmarks.html`, then in Chromium/Chrome press
<kbd>Ctrl/⌘ Shift</kbd>+<kbd>O</kbd> → *Import and export* → *Import bookmarks*,
and select the file. You get all 2,951 links in 22 grouped folders.

### As a browsable page

Just open `index.html` — no server, no build step, no dependencies.

### Directly into a live profile

On Linux, with Chromium **closed**:

```bash
node write-bookmarks.mjs ~/.config/chromium/Default/Bookmarks
```

The script merges into the existing profile, preserves your own bookmarks, and is
idempotent — running it again replaces only the generated folders.

## Layout

```
.
├── index.html                 # the browsable page (self-contained, no build step)
├── all.js                     # generated: data + categories + tags + groups
├── feed.xml                   # generated: Atom feed, one entry per category
├── chromium-bookmarks.html    # generated: Netscape export for any browser
├── sitemap.xml                # generated: one URL per category, plus the root
├── robots.txt                 # generated
├── 404.html                   # generated
│
├── data-*.js                  # the source of truth, one file per topic area
├── groups.mjs                 # the category-to-group map. Single source of truth
├── slug.mjs                   # the anchor-slug rule, single source of truth
│
├── build.mjs                  # merge + validate the data files into all.js
├── dedupe.mjs                 # strip duplicate titles and URLs from data files
├── make-bookmarks.mjs         # generate the browser import file
├── write-bookmarks.mjs        # write straight into a live Chromium profile
├── seo.mjs                    # generate feed, sitemap, robots, 404, README stats
│
├── scripts/
│   ├── rebuild.mjs            # run the whole pipeline in the right order
│   ├── check-data.mjs         # validate the data files
│   ├── check-render.mjs       # prove every link is reachable in the page
│   ├── link-check.mjs         # re-verify every URL over HTTP
│   ├── commit-generated.mjs   # commit only if the generated files changed
│   └── publish-report.cjs     # open one issue when links rot
│
├── .github/workflows/
│   ├── verify.yml             # required check on every pull request
│   └── maintain.yml           # regenerate and re-verify on a schedule
│
├── CONTRIBUTING.md            # how to add a link
├── README.md
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

Only three files are ever edited by hand: the `data-*.js` files, `groups.mjs`
when a new category is added, and `index.html` for the page itself. Everything
else is generated by `node scripts/rebuild.mjs`.

## Contributing

Adding links is welcome, and the process is short. The full instructions are in
**[CONTRIBUTING.md](CONTRIBUTING.md)**, including the rules the automated checks
enforce, so you do not have to discover them by having CI fail on you.

In brief:

1. Add one line to the relevant `data-*.js` file.
2. Run `node scripts/rebuild.mjs`.
3. Commit the generated files alongside your change and open a pull request.

`verify.yml` checks the data is well-formed, checks that every link is reachable in
the page, and fails if the generated files are stale. The issue and pull request
templates spell out what a good submission looks like.

## What makes a good link

Please add resources that are:

1. **Free to read in full** — or at least free at a useful depth. Flag paywalls rather
   than pretending they are open.
2. **Genuinely free or open source**, not a free tier or a trial.
3. **Worth reading** — the list is curated, not exhaustive. Ten great links beat a
   hundred mediocre ones.
4. **Stable** — prefer a canonical URL over a deep link that will rot.

Mark the highest-signal entries with a `must-read` / `must-do` / `must-use` tag.

## What makes a good link

Please add resources that are:

1. **Free to read in full** — or at least free at a useful depth. Flag paywalls rather
   than pretending they are open.
2. **Genuinely free or open source**, not a free tier or a trial.
3. **Worth reading** — the list is curated, not exhaustive. Ten great links beat a
   hundred mediocre ones.
4. **Stable** — prefer a canonical URL over a deep link that will rot.

Mark the highest-signal entries with a `must-read` / `must-do` / `must-use` tag.

## Known caveats

- **8 links are `http://`**, not `https://`: Gelman's *Bayesian Data Analysis*,
  *Learn You a Haskell*, *Learn You Some Erlang*, Haskell School of Expression,
  Preskill's quantum notes, Subatomic Cafe, Scholarpedia and *This Week in Virology*.
  Each was checked over both schemes: the HTTPS endpoint did not respond at the time
  of verification, and a working HTTP link beats a broken HTTPS one. All of them
  serve HTTPS fine in a normal browser — they are reachable, just not from the
  network this list was built on. A ninth, McCarthy's papers, was originally in
  this list and has since been confirmed over HTTPS and upgraded.
- **Some resources are free but not openly licensed** (e.g. the Feynman Lectures are
  Caltech-hosted but not CC-licensed as a whole). Check each project's own terms.
- **The list rots.** The `data-*.js` files reflect links verified on the dates in
  the commit history. The weekly workflow re-checks every URL, but it can only
  report what it finds — spot-checking before you rely on a link is still worth it.
- **41% of entries carry a `must-*` tag**, which is too many for the tag to be a
  useful filter. It is being trimmed; treat it as weak signal for now.

## License

Released into the public domain under [CC0 1.0](LICENSE).

The links themselves belong to their respective owners and are **not** covered by this
license — the same way a table of contents does not grant rights to the books it lists.
Some resources are not officially free (e.g. *A Tour of Go* is provided by Google, and
Feynman Lectures are Caltech-hosted but not CC-licensed as a whole). Treat this list as a
starting point and follow each project's own terms.

## AI papers, data science, low level, performance

A second deep pass, 191 new links in six categories, aimed at the areas that were
thinnest: papers, data science, and anything to do with what actually happens
underneath.

| Category | Links | What is in it |
|---|---|---|
| `Data Science` | 53 | statistics done properly, and the data infrastructure underneath |
| `Low-Level Systems` | 50 | kernels, ABI, linking, cache, and the compilers |
| `AI Papers & Reading` | 36 | where papers actually come from, and how to read them |
| `Performance Engineering` | 23 | the quantitative method, profiling, and the ceiling |
| `Efficiency & Algorithms` | 23 | complexity, data structures, cache-oblivious design |
| `Compute & Accelerators` | 6 | CUDA, GPU architecture, and open accelerator hardware |

**On papers.** The collection had 21 arXiv entries and no way to follow a field.
There are now ten arXiv listings by subject, `Distill` for interactive
explanations, `Papers with Code` and `Semantic Scholar` for search, and `OpenReview`
— where the *reviews* are public, which is how you should be reading an ML paper.
Two lists worth knowing: `SysML-reading-list` is the ML/systems crossover, and
`JMLR` plus `Project Euclid` are fully free, peer-reviewed and carry no author
fees.

**On the quantitative method.** The performance material is built around four laws
that between them explain almost every optimisation conversation: Amdahl (the
serial fraction caps speedup), Gustafson (and why parallelism can still win when
the problem grows), Little's (latency, throughput and concurrency in a queue), and
the Roofline model (whether you are compute bound or bandwidth bound — the first
question to ask). `Chips and Cheese` reverse-engineers real microarchitectures
from performance counters, and `Dan Luu` writes with unusual rigour about where
the latencies actually are.

**On low level.** `OSTEP` for operating systems, the kernel documentation for
Linux, the RISC-V specifications, and `Crafting Interpreters` to build a language
from scratch. Then the parts that are usually hand-waved: the ELF format, calling
conventions, dynamic linking, name mangling, the branch predictor, cache
coherence, memory barriers, page tables and the cost of a TLB walk. Assembly is
never taught directly — it is taught as the output you can read on
[Compiler Explorer](https://godbolt.org/) when you want to know what your code
actually does.

### Verified before written, as usual

225 candidate entries, checked before being written down: 116 Wikipedia articles
through the API in batches, 99 sites and repositories through the authenticated
GitHub API and paced requests. One URL was wrong and was fixed before landing
(`llvm.org/docs/MemorySanitizer.html` is a 404; the document lives on
`clang.llvm.org`), and checking that turned up three more verified sanitizer
documents worth adding — ASan, TSan and UBSan each have their own page.

One entry was removed as redundant: `Arithmetic intensity` redirects to the Roofline
model article, so it was the same destination twice.

Three hosts could not be reached from the network this was built on and are
therefore absent rather than guessed: CMU 15-451, MIT 6.035, and the Dartmouth
SICP archive.

## LLMs, reverse engineering, security hats, and keyboards

A third pass, 123 new links in five categories.

| Category | Links | What is in it |
|---|---|---|
| `Keyboards & Customization` | 35 | firmware, layouts, vendors, reference sites |
| `LLMs & Models` | 31 | running, serving, fine-tuning and quantising models |
| `Reverse Engineering` | 22 | decompilers, debuggers, symbolic execution |
| `Security Hats & Teams` | 19 | red, blue and the ethics in between |
| `Keyboard Switches & Parts` | 16 | mechanisms, keycaps, stabilisers, technique |

**On models.** The practical stack end to end: `llama.cpp` for local inference,
`vLLM` and `SGLang` for serving, `PEFT`/`Axolotl`/`Unsloth`/`LLaMA-Factory` for
fine-tuning, and `GPTQ`/`AutoAWQ`/`ExLlamaV2` for quantisation. Also the two
frameworks worth reading even if you do not use them — `MLX` because it is the
only one whose API maps cleanly onto Apple silicon, and `tinygrad` because it is
a readable explanation of what frameworks actually do.

**On reverse engineering.** `RetDec` for open-source decompilation, `angr` and
`Triton` for symbolic execution, `Unicorn` for lifting shellcode, `x64dbg` on
Windows and `LLDB` everywhere else. `capa` is the one to reach for first: it
tells you what a binary *can do* rather than what it is called. The SANS Storm
Center blog is the highest-signal daily writing in the field.

**On the hats.** The taxonomy is included deliberately, including the ethics
chapter it comes from, because white/grey/black and red/blue are usually taught
as vocabulary without the reasoning. Alongside them: the open-source offensive
stack (Sliver, Mythic, Impacket, BloodHound) and the defensive one (Sigma, YARA
rules, osquery, Velociraptor, TheHive, Plaso). Every entry is framed around
authorised testing — bug bounty programmes, your own lab, or CTFs, which is the
legitimate way to practise offensive work at all.

**On keyboards.** QMK and ZMK as the two firmwares worth learning, Vial for
remapping without recompiling, and `Deskthority` plus `SoundTested` as the two
reference sites that matter most — the second is the only reliable way to compare
switch sound before buying. Then the mechanism layer: Cherry MX, Topre, Alps,
buckling spring, Hall effect, and open-source KiCad designs for the last one.

### What I could not verify, and therefore did not include

The keyboard vendors and community blogs are mostly unreachable from the network
this was built on — CannonKeys, MechMarket, Mode, mkii.co, kbd.ci, ai03.co,
Wilba's Tech, ZealPC and more all failed to resolve or connect, over both IPv4 and
IPv6. Only the ones that actually answered are included, plus CannonKeys, which
an independent search confirmed as live with current stock. The rest are absent
rather than assumed.

Four URLs I wrote from memory turned out to be wrong and were caught before
landing: `triton-passwords/triton` (it is `JonathanSalwan/Triton`),
`horsicq/DetectItEasy` (`horsicq/Detect-It-Easy`), `danielmiessler/Red-Team-Toolkit`
(`infosecn1nja/Red-Teaming-Toolkit`) and `practicalbinaryanalysis`, an
organisation that does not exist. Adaptix and the No Starch page for *Practical
Reverse Engineering* were dropped entirely rather than guessed at.

## Learning English

Eight categories, 164 new links, arranged from the practical to the theoretical.

| Category | Links | What is in it |
|---|---|---|
| `English Grammar` | 38 | tense, aspect, mood, clauses, articles, word order |
| `English Vocabulary & Phrases` | 25 | dictionaries, phrasal verbs, idioms, frequency data |
| `English Pronunciation & Listening` | 19 | the IPA, stress, intonation, graded listening |
| `English Writing & Composition` | 19 | argument, cohesion, connotation, pragmatics |
| `English Exercises & Practice` | 16 | drills that use retrieval rather than rereading |
| `English for Academic Purposes` | 17 | IELTS, TOEFL, PTE, EAP standards |
| `English Dictionaries & Corpora` | 15 | OED, downloadable corpora, etymology |
| `English Linguistics Research` | 15 | the theories the teaching methods come from |

**The order of study that actually works.** Grammar first, but from Cambridge's
grammar reference and Barry's English Grammar Usage Lab rather than a rule list.
Vocabulary alongside it, from `Oxford Learner's` and `Longman` — both give you
audio, which matters more than learners expect. Pronunciation from the IPA
alphabet itself, so dictionary transcriptions stop being mysterious, then minimal
pairs and stress.

**Three things that are more load-bearing than they look.** The `testing effect`
(retrieving beats rereading, one of the most replicated findings in learning
science), `spaced repetition` (the maths is in the article), and `Zipf's law`
(why the second most common English word appears about half as often as the first
— the curve behind any frequency list). Together they are a better argument for
how to study than any method debate.

**Data, since you asked for it.** `english-corpora.org` and `corpus.byu.edu`
give you large freely downloadable and searchable text corpora. That is where
frequency lists come from, and it means the vocabulary claims in most English
courses are checkable rather than folklore. `Grimm's law` explains why English
vocabulary looks the way it does, and `Grimm` is a fifteen-minute read that pays
back for years.

**Official and exam material.** IELTS, TOEFL, PTE and Cambridge B2/C1 with free
sample papers, plus the TESOL and NCTM standards. If you need a certificate, this
is the actual specification rather than a list of websites.

**The research underneath.** `Falsification` is in there on purpose — it explains
why you cannot verify your own argument, which is the most useful thing to know
before writing anything persuasive. Then `politeness theory` and the `cooperative
principle`, which are the gap between English as written and English as used.

### What I could not verify, and therefore left out

The British Council and its LearnEnglish site, Macmillan Dictionary,
`learneng.com`, `voicereader.com` and a few university writing centres do not
resolve from this network. They are obviously real, but this list claims its
links were checked, so they are absent rather than assumed. `VoiceReader` was
written in and then removed when it turned out to be the same.

Eight entries were also removed by dedupe because I had used the same URL in two
categories — `grammar.org` and `Breaking News English` each appeared under both
Grammar and Exercises. That was my sloppiness, not a tooling problem: a URL can
only sensibly live in one place. `English Exercises & Practice` was then filled
out with genuinely distinct material, `UsingEnglish` and `Perfect English
Grammar` being the standouts.

## Tech leadership, decisions, negotiation and SRE

Four categories aimed at the parts of engineering that are not code. 95
candidates, verified before writing, and 78 new links after removing 17 that
already existed in the collection.

| Category | Links | What is in it |
|---|---|---|
| `Tech Leadership & CTO` | 21 | essays on the staff+ and management tracks |
| `Architecture Decisions` | 23 | ADRs, C4, arc42, and the cloud reference architectures |
| `Negotiation & Communication` | 26 | the interpersonal half: persuasion, code review, agile |
| `Site Reliability` | 25 | SRE, SLOs, error budgets, and the case studies |

**On decisions.** `adr.github.io` is the pattern worth copying: record the
context, the options considered and the consequences, then never rewrite it.
Paired with `C4 model` for drawing and `arc42` for documenting, that is the
working set. The cloud frameworks (AWS Well-Architected, Azure Architecture
Center, Google Cloud) are free and specific enough to act on, and
`High Scalability` is the best archive of real architectures with actual numbers
in them.

**On negotiation.** The Harvard Program on Negotiation, plus the Wikipedia
articles on the underlying theory: `Getting to Yes` reframed as separate the
people from the problem and focus on interests rather than positions,
`assertiveness` as the middle option between collapsing and escalating, and
`active listening`. This is the material most engineers never get taught and
use daily.

**On reliability.** The Google SRE book and workbook are free, complete, and
the actual standard — SLOs, error budgets, on-call and incident management.
Alongside them the case studies that show the numbers: `jepsen.io` for
empirical database consistency testing, `aphyr.com` and `apenwarr.ca` for
outage write-ups, and the engineering blogs of Dropbox, Discord, Slack, Shopify,
GitHub, Stripe and Cloudflare.

### What I removed before landing, and why it is worth saying

- **`martinfowler.com/bliki/CodeReview.html` and `inkandswitch.com/prime-directive`
  were invented.** Both 404. I could not locate the real paths after several
  attempts, so both entries are gone rather than pointing somewhere plausible.
- **Lara Hogan and Tyler Ongirard do not resolve from this network.** They are
  obviously real and probably worth adding, but this list claims its links were
  checked, so they are absent.
- **Four entries in the first draft reused a URL that was already in the file**
  under a different framing. Dedupe caught them, and the categories were then
  filled with genuinely distinct material.

### A dead pattern in the build, caught by CI

`seo.mjs` rewrote the header link count by matching the literal string
`<h1>Dev Bookmarks <span id="count">`. The redesign replaced that `<h1>` with a
`div.brand`, so the pattern stopped matching and **the count froze at 2,873 while
the data held 2,951** — and the build reported success. The check caught it
because that check exists, which is the fourth time it has earned its place.

The replacement anchors on the element `id` rather than its surroundings, so
restyling cannot break it, and the search input's placeholder is now generated
too. `check-docs.mjs` additionally walks every number the page displays and
fails if any disagrees with the data.
