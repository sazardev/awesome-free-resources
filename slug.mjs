// The one implementation of the category-anchor slug.
//
// This exists because the same function was written twice — once in seo.mjs for
// the sitemap and feed, once inline in index.html for the rendered anchors — and
// two copies of a naming rule is the same mistake as the three hand-maintained
// copies of the group map, which silently hid 132 links. The two currently
// happen to agree on all 94 categories, which is exactly why the duplication is
// dangerous: it looks fine until someone adds a category name with punctuation
// at the edge.
//
// The rule: lowercase, every run of non-alphanumeric characters collapses to a
// single hyphen, no leading or trailing hyphen.
export const slug = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const catAnchor = (category) => `cat-${slug(category)}`;

export const groupAnchor = (group) => `grp-${slug(group)}`;
