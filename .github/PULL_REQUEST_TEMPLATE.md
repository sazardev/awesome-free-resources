## What this changes

<!-- One or two sentences. -->

## Type

- [ ] New resources in `data-*.js`
- [ ] Fix to an existing entry (dead URL, wrong title, wrong category)
- [ ] Change to a script, the build, or CI
- [ ] Change to the site or the documentation

## Checklist

The checks below are the ones CI enforces. Running them locally is faster than
letting CI tell you.

- [ ] `node scripts/rebuild.mjs` run, and the regenerated files are **committed**
- [ ] `node scripts/check-data.mjs` passes
- [ ] `node scripts/check-render.mjs` passes
- [ ] Every new URL was checked to return 200 before I wrote it down
- [ ] Every new category name exists in `groups.mjs`
- [ ] No duplicate title or URL against the other 20 data files
- [ ] The build is reproducible: running `node scripts/rebuild.mjs` twice produces
      no second diff

## Why these links

<!--
For a link submission: which category was thin, and what does this fill?
If you are unsure, say so — that is a useful signal.
-->

## Notes for the reviewer

<!--
Anything you were unsure about, any URL you could not fully confirm, and anything
you deliberately left out.

Saying "I could not verify X" is much more useful than leaving it silent, and it
will not count against the change. A previous batch shipped with three such links
noted, and the weekly check resolved them; a batch where the uncertainty was hidden
had to be partially reverted.
-->

## Radio and telecommunications

<!-- Only if this touches anything that transmits. -->

- [ ] Receiving or analysis only, or the material is openly published for study
- [ ] I included the relevant regulatory reference where one applies
- [ ] Nothing here is intended for interfering with services that are not yours
