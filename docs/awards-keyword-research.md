# Keyword research — the /engineering-awards cluster

Done 8 September 2026, before building the 14 programme detail pages.
Method: live SERP inspection, US results. **Search-volume figures are not in
here** — the Semrush account is out of API units, so nothing below is a
volume claim. Everything below is an observation about who currently occupies
a result page, which is the part that decides whether a page is worth
building at all.

## The finding that shaped the build

**Every award's head term is owned outright by the body that runs it.**

| Query | Who holds page one |
|---|---|
| ACEC Engineering Excellence Awards | acec.org, convention.acec.org, engineeringinc.acec.org — then ACEC Georgia, Colorado, Washington, Oregon |
| ASHRAE Technology Awards | ashrae.org's own application PDFs, then Illinois / Iowa / Nashville / NY / BC chapters |
| ENR Best Projects | enr.com/bestprojects, its FAQ, its blog, its Best of the Best article |
| APWA Public Works Project of the Year | apwa.org award pages and criteria PDFs, then Northern California and Arizona chapters |
| MEP Giants | csemag.com and its year-by-year articles |
| AISC Prize Bridge Awards | aisc.org, plus its own shorthand microsite for winners |

A recruiting firm does not outrank the organisation for the name of that
organisation's own award. Fourteen pages built to chase those terms would be
fourteen pages of nothing, which is exactly the failure mode we already have
on the shallow city pages.

## The second tier is occupied by winners

The only non-owner results that rank are **firms announcing their own wins** —
Henderson Engineers on MEP Giants, CMTA on the MEP & Cx Giants lists, Barton
Associates, university engineering departments on AISC student awards.

This matters more than it first looks: that slot is structurally closed to
Metro. A recruiting firm is not eligible for an engineering award, so we can
never publish the "we won" page that ranks there. Any plan that depends on
occupying that tier is not executable, and should not be sold as one.

## What is actually open

Nobody owns the *hiring* reading of these awards. A search combining award
language with recruiting returns Glassdoor, ZipRecruiter, SimplyHired and
generic "award-winning firm" job listings — no informational page explaining
what an ASHRAE Technology Award or an ENR Best Project tells a hiring manager
about the person who worked on it.

So the pages target three things, in this order:

1. **AI-answer citation.** This is the real goal, and it is what the client's
   own message was about — an assistant ranking recruiting firms cited
   "multiple recognizable recruiting awards" as a reason. A page that sets out
   the entry route, the categories and the hiring read in one place is
   citable in a way that a link to acec.org is not. Citation does not require
   ranking first, which is why this survives finding #1.
2. **Long-tail process queries** — "how to enter", "categories", "criteria",
   "who can enter". These have owner pages, but the owner pages are often
   PDFs and chapter sites with poor structure.
3. **Internal linking.** Fourteen pages cross-linked to each other and to the
   six discipline hubs give the hubs something to point at other than more
   city pages.

## What this cluster is NOT for

Head-term traffic. If the measure of success is ranking for "ACEC Engineering
Excellence Awards", this will fail, and it was predictable in advance. The
measure is Search Console impressions on long-tail award queries, and
citations in AI answers about engineering recruiting.

## The honest weakness

At roughly 520 words of visible body text, these pages are **shorter than the
deepened city pages** (~1,570) and only a little longer than a shallow one
(~1,030). Measured with the same 6-word shingle test:

| Page set | Words | Phrases shared with a sibling |
|---|---|---|
| Award detail pages (8 sampled) | 445–566 | 50.9–59.5%, mean 53.2% |
| Deepened city pages (NY, Chicago, Houston, Atlanta) | 1,504–1,698 | 53.7–62.7% |
| Shallow city pages (Hartford, Buffalo) | 1,024–1,032 | 76.3–80.1% |

So they are **less duplicated than any city page**, which is the thing that
was going wrong before. But length is the exposed flank. The fix, if Search
Console shows them stuck in "Crawled – currently not indexed", is to add real
per-programme depth — named past winning projects and the firms behind them —
not to add more programmes.

## Sources

- https://www.acec.org/awards/engineering-excellence-awards/
- https://convention.acec.org/eea-gala/2026-eea-awards/
- https://www.ashrae.org/file%20library/membership/honors%20and%20awards/tech-award-application_fillable.pdf
- https://www.enr.com/bestprojects
- https://www.enr.com/Best-Projects-FAQ
- https://www.apwa.org/award/public-works-project-of-the-year-award/
- https://www.csemag.com/events-and-awards/mep-giants/
- https://www.aisc.org/bridges/awards/prize-bridge-awards/
