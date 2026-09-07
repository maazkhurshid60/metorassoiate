# Award organisation logos

Drop a logo file in this folder, add one line to `app/lib/awards.ts`, done:

```ts
{
  name: "Technology Awards",
  org: "ASHRAE",
  abbr: "ASHRAE",
  logo: "/awards/ashrae.svg",   // <- this line
  ...
}
```

`AwardMark` shows the file when `logo` is set and falls back to a
typographic tile built from `abbr` when it isn't. Nothing else changes.

**File format:** SVG preferred, otherwise a transparent PNG at least 200px
tall. These render on a white card, so a logo with a baked-in white
background is fine; one with a baked-in dark background is not.

## Before adding a file — read this

Every mark here is a registered trademark belonging to someone else, and the
programs differ in what they allow:

- **Winner badges** (ENR "Best Projects", ACEC EEA winner marks) are licensed
  to the firms that actually won, in the year they won. Metro is a recruiter
  and cannot win an engineering award, so Metro may never display one of
  these on its own behalf. ENR directs winners to a licensing partner.
- **Organisation logos** (the plain ASHRAE, ACEC, IES mark) are usually
  restricted to members, chapters and licensees. Some press kits permit
  editorial use when referring to the organisation itself. Check the specific
  organisation's brand or media page and keep a copy of what it says.
- **A client's own win** is different again: if a Metro client won ACEC
  Florida EEA 2025 and gives written permission to say so, that belongs on
  the site as a fact with a year and a project name — worth far more than a
  logo, and unambiguous about whose award it is.

If permission for a given mark can't be evidenced, leave `logo` unset. The
typographic tile is Metro's own artwork: no licence, no implied endorsement,
and the wall still reads as a wall.
