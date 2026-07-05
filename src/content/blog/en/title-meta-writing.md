---
title: "How to Write Title Tags and Meta Descriptions"
description: "The title tag is a ranking signal; the meta description is a click-through weapon. They do different jobs and are written differently. Here are the length limits, keyword placement, formulas, and what to do when Google rewrites your title."
target_keyword: title tag meta description
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-16
date_updated: 2026-07-16
translations:
  zh-hant: title-meta-writing
  zh-hans: title-meta-writing
---
# How to Write Title Tags and Meta Descriptions

**The title tag is a ranking signal, so write it keyword-first and make the page's topic unmistakable — keep it under about 60 characters. The meta description is not a ranking factor; its only job is to lift click-through, so use 140–160 characters to spell out what problem this page solves.** Together they are the only ad copy you control on the search results page.

## Two jobs: one for the algorithm, one for the human

| Aspect | Title tag | Meta description |
|---|---|---|
| A ranking factor? | Yes (a lightweight signal Google confirms) | No (Google has confirmed repeatedly it doesn't affect ranking) |
| Main job | Tell Google what the page is about | Convince searchers to click you, not a rival |
| Display length | ~600px on desktop (about 60 characters) | About 2 lines (roughly 155 characters shown in full) |
| Odds Google rewrites it | High (Google says it rewrites per query) | Higher (it often pulls a snippet straight from the body) |

## Rules for writing the title tag

1. **Put the core keyword first.** The earlier a word appears, the more weight it carries as a signal — and the more likely a scanning reader is to notice it. "What Is Content Debt? Your Zero-Click Pages Are Dragging You Down" beats "Your Site Is Being Dragged Down by Something Called Content Debt."
2. **Keep it under about 60 characters.** Google truncates by pixel width (~600px on desktop). Go over and the tail becomes "…". Truncation isn't a penalty, but the important information has to land in the front.
3. **One primary keyword per page.** Try to stuff three keywords into one title and you'll usually rank for none of them — that's a topic-cluster planning problem, not a title-writing problem.
4. **Add a differentiator.** A number ("30 Things to Check"), a year (2026), a concrete promise ("With Steps," "With Examples"). On the results page you sit shoulder to shoulder with nine rivals; an identical title gives no one a reason to click.
5. **Brand name goes last and is optional.** "Article Title | Brand" is the standard format; drop the brand on long-tail articles when space runs short.
6. **Unique on every page.** Site-wide duplicate titles are the most common form of technical debt — catch them all at once with a crawler (the free version of Screaming Frog).

Three formulas you can lift straight away:

- Definition: `What is [keyword]? [one-line value proposition]`
- How-to: `How to [keyword]? [number] steps (with [examples/checklist/template])`
- Listicle: `[number] [keyword] [mistakes/tools/tricks], [pain point or promise]`

## Rules for writing the meta description

1. **140–160 characters, with the point made in the first 140.** Mobile shows less, so front-load the key message.
2. **Write "what this page solves for you," not "what this page contains."** "Three steps to find the zero-click pages sinking your rankings in GSC, with the exact report names and click paths" beats "This article introduces how to use GSC."
3. **Include the keyword.** Not for ranking, but because Google **bolds** the query term in the snippet — and bold text raises the odds of being seen.
4. **Add concrete elements.** Numbers, method names, deliverables (checklists, templates, flowcharts).
5. **Unique per page and matching the body.** Promise a "price comparison table" the body doesn't have and all you earn is a bounce.

## What to do when Google rewrites your title

Since the 2021 title-rewrite update, Google swaps the displayed title based on query context; its own data puts the share where it ignores your original title at about **13%**. Common triggers and fixes:

- **Title too long, gets truncated** → shorten and front-load the point.
- **Keyword stuffing** → rewrite it into one natural sentence.
- **Title inconsistent with the H1 and body** → keep the title tightly aligned with the H1 (they can differ, but the topic must match).
- **Templated site-wide titles** → hand-write a differentiator on every page.

Rewrites can't be avoided entirely, but those four points push the odds to a minimum.

## Use GSC to find the pages that need a new title

This is the most underrated free optimization:

1. Open GSC "Performance → Search results," set the date range to 90 days, and enable "Impressions" and "CTR."
2. Switch to the "Pages" tab and find pages with **high impressions but a clearly low CTR** (say, impressions > 1,000, CTR < 1%).
3. Click into the page and read its "Queries" tab — what words did people actually use to find you, and does the title answer that intent?
4. Rewrite the title and description, log the date, and come back in 4 weeks to compare CTR.

This trick is especially effective on lightly-in-debt pages that get impressions but zero clicks.

## FAQ

**Q1: Can the title and H1 be different?**
Yes — Google confirms they can split the work. The title serves the results page (short, with a hook); the H1 serves the reader who has landed (it can be fuller). But the topic must match; drift too far and you raise the odds of a rewrite.

**Q2: The meta description doesn't affect ranking, so can I skip it?**
You can skip it and Google will pull from the body automatically — but you've given up control. Always hand-write it for important pages (pillar pages, service pages, high-impression articles); for long-tail filler it's acceptable to let the answer-first opening paragraph stand in.

**Q3: How many times should the keyword appear in the title?**
Once is enough. Twice or more reads as stuffing and actually triggers a rewrite.

**Q4: How long until a changed title takes effect?**
The display updates once Google re-crawls, usually a few days to two weeks. Use GSC's URL Inspection tool to request re-indexing and speed it up.

---

The GeoSeoToday approach treats the title as the "ranking entry point" and the description as "click-conversion copy," while the answer-first opening paragraph of the article feeds search snippets and AI engines at the same time — whether these three stay in sync is something you can check in one pass with the [GEO readiness checker](/en/geo/). For a full breakdown of the other on-page elements, see the complete On-page & technical SEO guide.
