---
title: Why Publishing Only Gemini-Written Content Gets Ignored by Google
description: A field test across 20+ new sites found that content written entirely by Gemini 3.0 barely got indexed by Google. Switching to "Gemini for analysis, another model for writing" restored indexing and rankings. Here's the test, the likely SynthID cause, and how to fix your pipeline.
target_keyword: gemini content indexing
intent: informational
cluster: AI Content
author: GeoSeoToday
date_published: 2026-07-09
date_updated: 2026-07-09
translations:
  zh-hant: gemini-content-indexing
  zh-hans: gemini-content-indexing
---
# Why Publishing Only Gemini-Written Content Gets Ignored by Google

**A cross-site field test found that when a new site's articles are generated entirely by Gemini and published as-is, Google tends to barely index them. The likely reason: Gemini's output carries a SynthID text watermark that lets Google identify pure AI-native content directly.** The fix is not to abandon AI, but to keep Gemini in the analysis and outlining stage and let a different model write the final draft.

## What the test actually showed

In early 2026, an SEO practitioner published a batch of cross-site experiments. The sample and results:

- **Sample size**: 20+ new websites, with every article generated directly by Gemini 3.0 and published.
- **Result on Google**: barely indexed; the few pages that did get indexed earned no rankings.
- **The change**: switched to a split workflow — "Gemini analyzes the structure → Kimi 2.5 or Claude writes the final article."
- **After the change**: indexing and rankings **recovered immediately**. The topics and the sites themselves were unchanged; the only variable was *who wrote the final text*.
- **The control group**: the same Gemini-written articles actually did **well on Bing** — some sites broke past 30,000 monthly organic visits.

One variable changed (the writing model), the result flipped, and it came with a control group pointing the opposite way. That is why this test is worth taking seriously.

## The likely mechanism: the SynthID text watermark

Gemini's output carries Google DeepMind's SynthID text watermark: during generation it subtly adjusts the token probability distribution, embedding a pattern invisible to the human eye but statistically detectable by anyone holding the key. That leads to two inferences:

1. **Google is the only search engine on earth that can confirm "this was written by Gemini" with 100% certainty** — because it holds the key.
2. **Rewriting is no guarantee you can wash it out** — the pattern is unknown, so a rewrite may only dilute it, not remove it.

To be clear: Google's official position is that SynthID does not directly affect rankings, and that content is judged on quality, not on how it was produced. When field observations and the official line disagree, the reasonable reading is "Google may be especially conservative about the specific combination of 'a new site plus a large volume of pure AI-native content,'" not "AI content is banned across the board." For the mechanism in detail, see What Is SynthID?

## Not just the watermark: two more weaknesses of pure Gemini output

Even if the watermark factor did not exist, generating everything with a single model and publishing it raw still has structural problems:

- **A single stylistic fingerprint**: hundreds of articles across the whole site share one sentence rhythm and one set of word preferences — highly conspicuous to any system doing statistical analysis.
- **Content homogenization**: articles with no human final review to inject first-hand experience and real data easily become "empty shells that look like articles." No matter who writes that kind of content, Google's helpful content system suppresses it.

So the correct attribution is: **cold-shouldering = identifiable pure AI-native output × the (possible) watermark signal × the absence of injected human value.** The complete fix addresses all three at once.

## How to adjust your pipeline

| Your situation | Recommendation |
|---|---|
| Haven't launched yet | Adopt the split workflow from day one: Gemini (or another analysis model) does the outline, a different model writes, a human does the final review |
| Already published lots of raw Gemini articles with poor indexing | Pick your core pages and regenerate them from the outline with a different model (not by asking Gemini to rewrite its own text); track GSC indexing after publishing |
| Focused on Bing or other markets | Raw Gemini output currently has the edge on Bing, so you can keep it — but still add a human final review |
| Indexing is fine | No need to panic, but gradually phase in the split workflow for new content to spread the risk |

The way to verify is simple: **publish 3–5 articles per model combination first, watch GSC indexing and rankings for 2–4 weeks, and keep the combinations that get indexed.** Replace faith with small, cheap experiments.

## FAQ

**Q1: Does this mean Gemini can't be used for SEO?**
No. Gemini's long-context analysis is still top-tier, and it's great for competitor analysis, intent reading, and outline design. The test teaches exactly one lesson: for a Google-first site, don't let the final published text be Gemini's native output.

**Q2: Will older sites get the same cold treatment?**
The test sample was new sites. Established sites with a history of trust likely have more margin for error, but no public data guarantees it, so the safe move is still the split workflow.

**Q3: Does feeding a Gemini article back to Gemini for a rewrite help?**
Risky. The watermark is embedded in the token probability pattern, and a rewrite by the same model most likely still carries the same pattern. If you're going to switch, switch to a model from a different vendor and rewrite from the outline.

**Q4: How do I know if my site has been cold-shouldered?**
Check GSC: if 2–4 weeks after publishing the indexed share is clearly low (say, under half) and indexed pages get almost zero impressions, it's worth suspecting. Rule out technical issues first (robots, noindex, sitemap), then review your content pipeline.

---

GeoSeoToday's pipeline design grew straight out of this field test: analysis and writing kept separate, with a human on final review. To check the structural quality of a single article, drop it into the [GEO Readiness Checker](/en/geo/); for the full methodology see the AI content pipeline guide, and for the operational flow see the split-model workflow write-up on why analysis and writing should use different models.
