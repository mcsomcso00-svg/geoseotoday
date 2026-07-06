---
title: "GEO Share of Voice: How to Measure Your Brand's Appearance Rate in AI Answers"
description: "GEO Share of Voice (Prompt Share of Voice) is the north-star metric of GEO — across a fixed set of target prompts, the share of AI answers that mention or cite your brand. Here's the formula, the weighting method, benchmarks, and a step-by-step way to calculate it."
target_keyword: geo share of voice
intent: commercial
cluster: GEO
author: GeoSeoToday
date_published: 2026-08-04
date_updated: 2026-08-04
translations:
  zh-hant: geo-share-of-voice
  zh-hans: geo-share-of-voice
---
# GEO Share of Voice: How to Measure Your Brand's Appearance Rate in AI Answers

**GEO Share of Voice (Prompt Share of Voice, or SoV) is this: across a fixed set of target prompts, the number of times your brand is mentioned or cited in AI answers, as a percentage of the total mentions across all brands. It's the one metric that qualifies as GEO's north star — because it answers two questions at once: "does the AI know me?" and "by how much am I beating my rivals?"** Knowing you were cited ten times this month is meaningless unless you know how often your competitors were cited. SoV converts absolute exposure into a relative standing — and that's the number that actually drives decisions.

## Why is SoV the north-star metric of GEO?

Because GEO is fundamentally about claiming a seat in an answer that only has a few. Traditional SEO ranking is continuous — you're at position 8 and still on page one. But an AI answer usually names just 3 to 5 sources: a winner-take-most, near-zero-sum game. In that game, an absolute metric like "citation rate" lies to you. Your citation rate climbing from 20% to 30% looks like progress — but if your rivals went from 40% to 60% over the same period, you're actually losing.

SoV is valuable precisely because it's **relative** and **has a denominator**. It treats "total exposure of all brands across this batch of prompts" as 100% and measures the slice you take. That lets it answer three decision questions: where do I stand right now, how far behind the leader am I, and did this quarter's work actually expand my share. That's exactly what a north-star metric should do — one number that aligns the whole team.

## The SoV formula

Basic SoV comes in two layers, and it's worth computing both:

- **Mention SoV** = (answers that mention your brand) ÷ (total brand mentions across that batch of prompts) × 100%
- **Citation SoV** = (answers that list you as a source / attach a link) ÷ (total times any brand is listed as a source) × 100%

The gap between the two is itself intelligence. **High mention, low citation** means the AI knows your name but doesn't trust your page as a source — usually a content-structure or E-E-A-T-signal shortfall. **High citation, low mention** means you're used as a data source but haven't built brand recognition. Most new sites are the former: fix the citable structure first, then worry about brand.

## Advanced: weighted SoV, because not every position is worth the same

Raw SoV counts "listed as the sole primary source" and "buried as the fifth source" the same — which overstates your real influence. To get closer to reality, weight each appearance:

| Appearance type | Suggested weight | Rationale |
|---|---|---|
| Listed as primary / lead source | 3.0 | Most likely clicked, most likely paraphrased by the AI |
| One of several secondary sources | 1.5 | Exposure, but diluted |
| Text mention only, no link | 1.0 | Brand exposure, no traffic entry point |
| Mentioned in a negative context | -1.0 | Reverse share of voice — deduct |

Weighted SoV = (weighted sum of all your appearances) ÷ (weighted sum across all brands) × 100%. You don't need this level of detail at the start; once mention and citation SoV have been tracked steadily for three months and you're reporting results upward, adding the weighted version makes the case more convincing.

## Step by step: calculate your first SoV

No paid tool required — a single spreadsheet does it. Follow these to get a baseline:

1. **Pick 20 to 30 target prompts**: use the full, natural-language questions readers actually ask (for example, "what's the best GEO tool in 2026"), covering the scenarios you want to be recommended in. Lock this batch down and ask the exact same set every time from here on.
2. **Define the competitive set**: run one pass first, then list the 5 to 8 brands that recur in the answers as your competitive set. That set is your SoV denominator — don't leave out a major rival.
3. **Test across engines**: feed each prompt to ChatGPT (search on), Gemini / AI Overview, Perplexity, and Copilot, logging for every brand: was it mentioned, was it cited, and at what source position.
4. **Apply the formula**: compute mention SoV and citation SoV separately. Do one per engine, plus a combined table — the cross-engine gap is often more actionable than the total.
5. **Re-test monthly, same method**: AI answers have randomness, so never trust a single number — watch the direction SoV moves from month to month. The slope across three consecutive months is your evidence of whether your GEO work is landing.

Twenty prompts across four engines takes about 1.5 to 2 hours per pass, at zero cost. This is exactly what paid monitoring platforms do under the hood — they just automate and scale it.

## What's a good SoV? Reasonable benchmarks

There's no absolute pass mark, but there are usable relative anchors:

- **Niche prompts (your area of expertise)**: aim to push weighted SoV above 25%, meaning you reliably land in the top three sources.
- **Broad prompts (many competitors)**: 10% to 15% is already healthy — it means you're still regularly seen in a crowded field.
- **Brand prompts (questions containing your brand name)**: here you should be near 100%; if SoV is low even on your own brand prompts, your entity data or schema has a hole — fix that first.

Rather than chasing an absolute number, watch the **gap to the leader** and your own **month-over-month slope**. SoV climbing steadily from 12% to 20% matters more for long-term GEO than a one-off spike to 30% that falls back.

## FAQ

**Q1: How is SoV different from "citation rate"?**
Citation rate is an absolute value (how many times you were cited) with no denominator; SoV is relative — it puts your competitors' exposure into the denominator too, telling you what share of the whole competitive set you took. In the zero-sum game of AI answers, relative SoV reflects the real standing far better than absolute citation rate.

**Q2: Do I need to buy a tool to track SoV?**
No. Under 30 prompts, a spreadsheet plus 1.5 to 2 hours of manual testing a month yields a reliable SoV, on the same underlying logic as the paid platforms. Only consider a paid monitoring platform once your prompt count passes a hundred, you're tracking across multilingual markets, or you need regular reports.

**Q3: AI answers change every time — is the SoV number trustworthy?**
A single reading isn't; the trend is. Fixed prompts, fixed engines, fixed cadence — you read the direction and slope of SoV from month to month, not any one absolute value. Three consecutive months of trend effectively cancels out single-run randomness.

**Q4: Mention SoV or citation SoV — which should I prioritize?**
It depends on your stage. New sites or low-recognition brands should chase citation SoV first — get the page into the AI's source pool. Once citation SoV is stable, use mention SoV to gauge how far brand recognition is spreading. The gap between the two is itself the best diagnostic signal.

**Q5: How often should I compute SoV?**
Monthly is the practical sweet spot. Too frequent (weekly) and the randomness of AI answers drowns out the signal; too rare (quarterly) and you miss competitors' moves. A fixed monthly re-test of the same prompt batch on the same engine set is the most stable.

---

Treat SoV as your north star and your GEO finally has a single number to align the team and report upward. To go from tracking one metric to tracking your whole AI visibility, see [How to Track AI Search Visibility: Tools and Methods](/en/blog/track-ai-visibility/); to dodge the common traps in measurement and optimization, see [Common GEO Mistakes](/en/blog/geo-common-mistakes/). The full methodology and tools entrance is at [/en/geo/](/en/geo/).
