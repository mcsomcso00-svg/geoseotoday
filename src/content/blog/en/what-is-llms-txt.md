---
title: "What Is llms.txt? Should You Add It to Your Site? (With Example)"
description: llms.txt is a proposed standard introduced in 2024 by Jeremy Howard / Answer.AI — a Markdown file placed at your site root to help AI crawlers grasp what your site is about. This guide covers what it does, where adoption stands today (not yet officially used by the major engines), and gives you a copy-paste example.
target_keyword: what is llms.txt
intent: informational
cluster: AIO
author: GeoSeoToday
date_published: 2026-07-05
date_updated: 2026-07-05
translations:
  zh-hant: what-is-llms-txt
  zh-hans: what-is-llms-txt
---
# What Is llms.txt? Should You Add It to Your Site? (With Example)

**llms.txt is a plain-text file placed at your site root (`/llms.txt`) that uses Markdown to list your most important pages, with a short note on each, so large language models (LLMs) can understand your site faster. It was proposed by Jeremy Howard / Answer.AI in 2024, it is a community proposal, and no major AI engine has officially adopted it yet.** In short: it's a low-cost, forward-looking move — worth adding, but don't expect it to move your visibility today.

## What problem is llms.txt trying to solve?

A normal web page isn't friendly to AI crawlers: nav bars, ads, JavaScript, and heavy HTML markup all dilute the content that actually matters. The idea behind llms.txt is to **hand the LLM a clean, distilled, Markdown-formatted "guide to the site"** that tells it directly what the site is about and which pages are most worth reading — sparing it the cost of parsing through the noise.

Markdown is a deliberate choice: for an LLM it's about the easiest structured plain-text format to parse — headings, lists, and links are all immediately legible.

## How is llms.txt different from robots.txt and sitemap.xml?

All three live at the root, but they serve completely different purposes — don't confuse them:

| File | Who it's for | Purpose |
|---|---|---|
| **robots.txt** | Every crawler | Governs *whether* it can crawl (Allow/Disallow) |
| **sitemap.xml** | Search engines | Lists *which URLs* exist, for indexing |
| **llms.txt** | LLMs | Explains *what the site is about*, for understanding |

One line: robots.txt manages permission, sitemap manages the list, llms.txt manages understanding. It doesn't replace the first two — it's an extra layer on top.

## llms.txt example (ready to adapt)

A basic llms.txt looks roughly like this, placed at `https://yourdomain/llms.txt`:

```
# GeoSeoToday

> An SEO/GEO/AIO tutorial blog that teaches you to optimize content so AI engines cite it.

## Core guides
- [The Complete AIO Guide](/en/blog/aio-complete-guide/): AI search optimization, end to end
- [What Is GEO](/en/blog/what-is-geo/): the definition of Generative Engine Optimization
- [What Is Google AI Overview](/en/blog/what-is-ai-overview/): how the AI summary works

## Tools
- [GEO Readiness Checker](/en/geo/): scores how citable an article is

## Notes
This site is written answer-first, with citable paragraphs.
```

The guiding principle: **list only the most important pages, add one line of description each, and use relative or full links.** llms.txt isn't about cramming your whole site in — it's a curated reading list you assemble for the LLM.

## Should you add it? An honest recommendation

Yes, add it — with the reasons and the caveats stated plainly:

1. **The cost is trivial.** One plain-text file, a few dozen lines, near-zero maintenance.
2. **It's forward positioning.** If an engine adopts it down the road, you're already ready; if none ever does, there's no downside.
3. **But don't overrate the short-term payoff.** As of 2026, the major engines — OpenAI, Google, Perplexity — have **not publicly announced that they read llms.txt**, so right now it won't directly lift your AI visibility.
4. **It's no substitute for the fundamentals.** What actually decides whether you get cited is still whether your content is citable and whether AI crawlers can reach your pages. Rather than only adding llms.txt, first make sure crawler access is working properly (see AI crawler list and management).

Bottom line: treat it as a free bonus point, not a workhorse that delivers results.

## FAQ

**Q1: If I add llms.txt, will AI cite me?**
Not directly. It isn't officially adopted by the major engines yet, and what actually decides citation is content quality and crawler accessibility. llms.txt is forward positioning, not a lever that produces results.

**Q2: Is llms.txt an official standard?**
No. It's a community proposal put forward in 2024 by Jeremy Howard / Answer.AI. It hasn't become a W3C standard or the official standard of any engine — whether to adopt it is each site's own call.

**Q3: What's the difference between llms.txt and llms-full.txt?**
The proposal also describes `llms-full.txt`, which puts the full content (not just links) in the file so an LLM can read it all in one pass. Most sites should start with the basic llms.txt; consider the full version later, when you have a large volume of content.

**Q4: Will adding it affect my SEO?**
No negative impact. It's an extra file meant for LLMs; it doesn't interfere with Google's ordinary indexing and ranking — robots.txt and sitemap.xml remain the leads for SEO.

---

llms.txt is a bonus point, not a workhorse; the real foundation is "content that can be cited" and "crawlers that can reach you." GeoSeoToday gathers those checks into one place — for the full playbook see [The Complete AIO Guide](/en/blog/aio-complete-guide/), and for the tool entry point see [/en/aio/](/en/aio/). Further reading: [What Is AIO?](/en/blog/what-is-aio/)
