// The single source of truth for how categories roll up into top-level groups.
//
// This used to be duplicated as a hand-maintained array in three files
// (index.html, make-bookmarks.mjs, write-bookmarks.mjs). That is exactly how
// 132 links ended up invisible on the site: the copies drifted apart, and
// anything not in the map was silently skipped rather than reported.
//
// Adding a category here is now enough — build.mjs emits it into all.js, the
// site reads it, and the Chromium export reads it, and check-data.mjs fails CI
// if a category exists in the data but not in this map.
//
// Key order is the display order. Category names must match the `c` field in
// the data files exactly.
export const GROUPS = [
  ['Software & Dev', [
    'Software Engineering', 'Architecture', 'CS fundamentals', 'Compilers',
    'Formal Methods', 'Mathematics', 'Computer Science',
    'AI / ML', 'Databases', 'Data Engineering',
    'DevOps / Infra', 'Testing', 'Security', 'Performance', 'Web Performance',
    'Tools & productivity',
    'Go', 'Go frameworks', 'Go blogs',
    'Rust', 'Rust ecosystem',
    'Flutter', 'Android', 'Kotlin',
    'Big tech blogs', 'Dev blogs',
  ]],
  ['Science', [
    'Science', 'Science news', 'Research data',
  ]],
  ['Physics & Chemistry', [
    'Physics', 'Chemistry',
  ]],
  ['Atomic & Particles', [
    'Quantum & Atomic', 'Particle physics',
  ]],
  ['Astronomy & Biology', [
    'Astronomy', 'Biology',
  ]],
  ['Medicine', [
    'Medicine',
  ]],
  ['Anatomy & Physiotherapy', [
    'Anatomy', 'Physiotherapy',
  ]],
  ['Nutrition & Health', [
    'Nutrition', 'Health',
  ]],
  ['Papers, Books & Blogs', [
    'Papers & preprints', 'Free textbooks', 'Topic blogs',
  ]],
  ['Electronics, Robotics & Devices', [
    'Electronics', 'Circuits & Signals', 'Electricity & Power',
    'Semiconductors & Chips', 'Embedded & Devices', 'Hardware & Making',
    'Device Repair', 'Computer Architecture', 'Robotics & Control',
  ]],
  ['Linux, Unix & Omarchy', [
    'Omarchy', 'Linux & Unix', 'Language docs', 'Framework docs',
    'Technical writing', 'Influential tech',
  ]],
  ['Learning & Pioneers', [
    'Self-taught learning', 'Tech pioneers',
  ]],
  ['Fun & News', [
    'Fun facts', 'News & aggregators',
  ]],
];
