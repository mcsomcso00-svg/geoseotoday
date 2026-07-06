---
title: How to Get Cited by Claude as a Source
description: Getting cited by Claude isn't about keyword density — it's about fact density plus a clear author entity. Here's Anthropic's sourcing preference, which crawlers to allow, and the exact way to write content that makes it into Claude's citation pool.
target_keyword: get cited by claude
intent: informational
cluster: GEO
author: GeoSeoToday
date_published: 2026-07-28
date_updated: 2026-07-28
translations:
  zh-hant: cited-by-claude
  zh-hans: cited-by-claude
---
# How to Get Cited by Claude as a Source

**To get cited by Claude, you don't win with keyword stuffing — you win with *fact density* and a *clear author entity*. Claude favors sources that are well-structured, verifiable claim by claim, and free of hype; when it retrieves the live web, it picks passages it can lift verbatim from a source whose provenance is obvious.** Write like an ad, or make claims with no data behind them, and you won't make it into its citation pool.

Claude is the AI assistant built by Anthropic. It cites external sites mainly when web browsing is in play — for example, when Claude.ai has web access enabled, or when an app uses the `web_search` and `web_fetch` server-side tools through Anthropic's API. In that mode Claude retrieves and fetches pages in real time, picks the sources that best answer the question, and attaches citations. To be picked, your page has to clear three gates: reachable, verifiable, and worth citing. Here's each one.

## Step 1: make sure Anthropic's crawlers can reach you

Anthropic's crawlers fall into two purposes. Conflating them is a common mistake — configure them separately:

| User-agent | Purpose | What blocking it costs you |
|---|---|---|
| `ClaudeBot` | Collects model training data | Future model versions don't "know" you |
| `anthropic-ai` | Older training-fetch agent | Same — a training-purpose crawler |
| `Claude-User` / `Claude-SearchBot` | Live retrieval for browsing answers | Claude's browsing answers can never cite you |

**The key trade-off here: decide on the training crawler and the retrieval crawler separately.** If you don't want your content used for training, you can block only `ClaudeBot` — but the moment you block the live-retrieval `Claude-User`, you've given up any chance of being cited in Claude's browsing answers. Many sites use a "block all AI crawlers" plugin or CDN setting (like Cloudflare's AI-bot blocking) that takes out both at once, without realizing it.

Checklist:

1. Open `robots.txt` and confirm none of the user-agents above are under a `Disallow`.
2. Confirm your CDN/firewall isn't returning 403 to these bots (allowed in robots.txt but blocked at the CDN is the most hidden failure).
3. Don't make key content appear only after JavaScript renders — retrieval crawlers handle JS poorly, so the main text must be readable in the raw HTML.
4. Use server logs to confirm these user-agents actually visit.

> User-agent strings change over time, and Anthropic adds or renames crawlers. The durable practice is to check the official docs periodically and match your logs on `Claude` and `anthropic` as keywords, rather than trusting one static list.

## Step 2: write every claim so it's verifiable

This is where Claude's sourcing preference differs most from other engines. Anthropic's own developer documentation repeatedly stresses **clear, verifiable, well-structured** content over vague marketing language — and that same preference shows up in how Claude picks citation sources.

Claude's retrieval tool (Anthropic's newer `web_search` variant) does **dynamic filtering**: it writes and runs code to filter the search results before they ever reach the model. That means vague, data-free, PR-toned passages get culled at this stage — not because you lack content, but because you lack credibility signals. To survive it:

| Trait | Wrong | Right |
|---|---|---|
| Has data | "Works really well" | "The GEO paper measured up to a 40% visibility lift" |
| Traceable | "The industry generally agrees" | "Google's own docs (Search Central) state" |
| No hype | "Guaranteed #1" | "Improves the odds in most cases, with no official guarantee" |
| Structured | One wall of text | Definition sentences, comparison tables, numbered steps |
| Admits limits | Only ever lists upsides | "This doesn't apply in case X" |

That last trait — admitting limits and trade-offs — matters most: Anthropic trains Claude to value honesty and calibration, so a piece that owns its boundaries reads as a more trustworthy source than one that only praises itself. It's why this article keeps flagging "no official guarantee" and "strings change" — that's exactly the tone Claude favors.

## Step 3: build a clear author entity

When Claude chooses among several sources, it leans toward pages with obvious provenance. Leave machine-readable entity signals:

1. **Clear author and brand**: a named author and brand on the page, consistent site-wide. Anonymous, generic content is the hardest to trust.
2. **Schema markup**: at minimum Article and FAQPage schema, so the model knows exactly who, when, and what. Add Person schema on the author page with `sameAs` links to social profiles.
3. **Explicit dates**: mark publish and update dates. For 2026 queries, models clearly prefer recently updated sources — where the update is a real revision, not just a changed date.
4. **Topic cluster**: a lone article rarely earns authority; 10+ interlinked pieces on one topic are what let entity authority form.

Fact density plus a clear author entity — put together, that's what "verifiable" concretely looks like, and it's the ticket into Claude's citation pool.

## A six-point checklist for getting cited by Claude

Run through it before publishing:

1. `robots.txt` doesn't block `Claude-User` / `Claude-SearchBot`.
2. Your CDN/firewall doesn't return 403 to these bots.
3. The main text is readable in the raw HTML, not dependent on JS rendering.
4. The first paragraph gives a 40–80 word self-contained answer that can be lifted.
5. Every key claim has data or a clickable source, in a tone that doesn't overstate and admits limits.
6. There's a clear author, brand, publish/update date, and Article + FAQPage schema.

## FAQ

**Q1: Does Claude cite in real time the way ChatGPT Search does?**
Yes, but only when a browsing / web-search tool is enabled does it retrieve and cite external pages live. Answering purely from internal knowledge attaches no live source. Being covered by training data (`ClaudeBot` crawl) and being cited from live retrieval (`Claude-User` crawl) are two different paths.

**Q2: Can I block ClaudeBot but allow Claude-User?**
Yes, and it's a common compromise: keep your content out of the training set while staying eligible for live citation in Claude's browsing answers. Blocking both at once is the most common — and most avoidable — mistake.

**Q3: Does keyword density help me get cited by Claude?**
Barely, and it can backfire. Claude's retrieval filtering favors fact density and credibility signals, not repeated keywords. Spending effort on data, sources, and clear entities beats keyword stuffing by a wide margin.

**Q4: Is content easier to get cited if I write it in English?**
For English queries, yes; but for Traditional Chinese queries, Claude tends to cite native Chinese sources. If you serve the Taiwan market, write solid Traditional Chinese in local vocabulary — that's actually a lower-competition opportunity.

**Q5: Is a citation worth anything if it brings no click-through?**
Yes. A brand appearing repeatedly in AI answers accrues brand-search volume and trust — itself a powerful authority signal that feeds back into your overall SEO and your odds with other engines.

---

Want to know whether your article is good enough to be cited by Claude? GeoSeoToday turned the checklist above into a free [GEO Readiness Checker](/en/geo/) — paste an article and get a 0–100 score in 30 seconds. The "verifiable, clearly authored" content Claude rewards is really the machine-readable version of E-E-A-T; to go deeper, read [What Is E-E-A-T? And How to Actually Do It in 2026](/en/blog/what-is-eeat/). If your target engine is ChatGPT instead, see [How to Get ChatGPT to Cite Your Website](/en/blog/cited-by-chatgpt/).
