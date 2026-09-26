// Part 17: re-added entries from the docs/linux batch whose URLs were corrected.
// Every URL here was confirmed to return HTTP 200 during verification.
const BOOKMARKS_17 = [
  { c: "Framework docs", t: "Echo documentation (free)", u: "https://echo.labstack.com/", d: "The free Echo framework docs. Good structure and examples.", g: ["go", "web", "docs", "free"] },
  { c: "Framework docs", t: "sqlc — generate Go from SQL (free)", u: "https://github.com/sqlc-dev/sqlc", d: "Write SQL, get type-safe Go. Excellent docs in the repo.", g: ["go", "sql", "codegen", "free", "must-use"] },
  { c: "Framework docs", t: "webpack guides (free)", u: "https://webpack.js.org/guides/", d: "The free official webpack guides. The classic bundler reference.", g: ["web", "docs", "free"] },
  { c: "Influential tech", t: "Basecamp — about", u: "https://basecamp.com/about", d: "Free essays on software, teams and work from DHH's company.", g: ["process", "blog", "must-read"] },
  { c: "Influential tech", t: "The GNU project", u: "https://www.gnu.org/gnu/", d: "The free GNU project portal. Stallman's philosophy in his own words.", g: ["gnu", "history", "must-read"] },
  { c: "Influential tech", t: "The Hacker's Manifesto", u: "https://www.garykessler.net/", d: "Free home of the original 1984 manifesto. A foundational document. Read it.", g: ["history", "free", "must-read"] },
  { c: "Influential tech", t: "Internet Archive — classic computing texts", u: "https://archive.org/details/texts", d: "Free scans of the classic computing books: K&R, Kernighan, Ritchie and more.", g: ["history", "archive", "free", "must-read"] },
  { c: "Language docs", t: "Elixir — Introduction (HexDocs)", u: "https://hexdocs.pm/elixir/introduction.html", d: "The free HexDocs introduction to Elixir. Best doc set in the BEAM world.", g: ["elixir", "docs", "free", "must-read"] },
  { c: "Language docs", t: "Elixir official site", u: "https://elixir-lang.org/", d: "The free official Elixir site: docs, guides and downloads.", g: ["elixir", "docs", "free"] },
  { c: "Language docs", t: "GNU Emacs Lisp manual (free)", u: "https://www.gnu.org/software/emacs/manual/html_node/elisp/", d: "The free complete Emacs Lisp manual. Essential for Emacs config.", g: ["elisp", "reference", "free", "must-use"] },
  { c: "Language docs", t: "IANA registries", u: "https://www.iana.org/", d: "Free authoritative registries for ports, protocols, media types and more.", g: ["reference", "free", "must-use"] },
  { c: "Language docs", t: "Kotlin standard library API (free)", u: "https://kotlinlang.org/api/kotlin-stdlib/", d: "Free API docs for the Kotlin standard library.", g: ["kotlin", "reference", "free"] },
  { c: "Language docs", t: "OWASP API Security Top 10 (free)", u: "https://owasp.org/API-Security/", d: "The free OWASP API Security Top 10. Essential for backend work.", g: ["security", "api", "free", "must-read"] },
  { c: "Language docs", t: "R project (free)", u: "https://www.r-project.org/", d: "Free official R documentation, manuals and downloads.", g: ["r", "docs", "free"] },
  { c: "Linux & Unix", t: "Arch Linux man pages", u: "https://man.archlinux.org/", d: "Free curated man pages for Linux. Clean, consistent and reliable.", g: ["linux", "man-pages", "must-use"] },
  { c: "Linux & Unix", t: "Debian documentation", u: "https://www.debian.org/doc/", d: "Free official Debian docs, including the Administrator's Handbook.", g: ["linux", "docs", "free", "must-use"] },
  { c: "Linux & Unix", t: "Awesome Linux (list)", u: "https://github.com/ledbettj/awesome-linux", d: "A curated list of excellent Linux resources, apps and tools. Free.", g: ["linux", "list", "must-use"] },
  { c: "Linux & Unix", t: "GNU Autoconf manual (free)", u: "https://www.gnu.org/software/autoconf/manual/autoconf.html", d: "The free Autoconf manual. Essential for C projects.", g: ["linux", "build", "reference", "free"] },
  { c: "Linux & Unix", t: "Brendan Gregg — books", u: "https://www.brendangregg.com/books.html", d: "Free companion sites for Systems Performance and BPF Performance Tools.", g: ["linux", "performance", "books", "free", "must-read"] },
  { c: "Omarchy", t: "Omarchy — development tools", u: "https://omarchy.org/manual/development-tools/", d: "How languages and toolchains are installed. Mise handles versions.", g: ["omarchy", "docs", "dev"] },
];
