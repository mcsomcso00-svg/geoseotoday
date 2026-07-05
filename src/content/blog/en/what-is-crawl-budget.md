---
title: "What Is Crawl Budget? Should Small Sites Even Care?"
description: "Crawl budget is the crawling resource Googlebot is willing to spend on your site, set by crawl capacity limit and crawl demand together. Here's how it works, Google's official thresholds, and what small sites should actually worry about."
target_keyword: crawl budget
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-15
date_updated: 2026-07-15
translations:
  zh-hant: what-is-crawl-budget
  zh-hans: what-is-crawl-budget
---
# What Is Crawl Budget? Should Small Sites Even Care?

**Crawl budget is the total crawling resource Googlebot allocates to your site, determined jointly by your crawl capacity limit (how much load your server can take) and crawl demand (how worthwhile Google thinks your content is to crawl).** Google says it plainly: sites with a few thousand pages or fewer, whose content gets indexed the same day, mostly do *not* need to worry about crawl budget — but the logic that "low-value pages waste crawl resources" holds true at any scale.

## How the Two Variables Work

Google Search Central's official documentation breaks crawl budget into two parts:

1. **Crawl capacity limit**: Googlebot doesn't want to overload your server. Fast responses and few errors → the limit rises; a flood of 5xx errors or slowing responses → Googlebot backs off automatically and crawls less.
2. **Crawl demand**: Google's interest in your content. The more popular a page is (backlinks, clicks), the more frequently it changes, and the higher your overall site quality → the higher the demand. Conversely, a pile of duplicate pages nobody reads drags demand down.

**The intersection of the two** is your actual crawl budget. The key point: budget isn't a fixed ration — it's Google's real-time assessment of your site, floating up and down with your quality and server performance.

## Google's Official Thresholds

According to the official docs, the sites that genuinely need to manage crawl budget are:

- **Large sites** (1M+ pages) with content updated weekly;
- **Medium sites** (10K+ pages) with content changing heavily every day;
- Or sites where GSC shows **a large number of "Discovered - currently not indexed"** — meaning Google knows the pages exist but won't spend resources crawling them.

A few-hundred-page blog isn't on the list. But note that last item: **small sites can still show "can't-get-crawled" symptoms because of quality problems** — and then the issue isn't too little budget, it's too little demand.

## What Small Sites Should Actually Care About: Don't Waste the Quota Google Gives You

A small site's crawl quota is more than enough — as long as you don't squander it yourself. Common sources of waste:

| Source of waste | Example | Fix |
|---|---|---|
| Content debt | Empty shell pages with 0 clicks in 90 days eat crawl cycles | Merge / remove / flesh out (this is what content debt means) |
| Infinite URL space | Filter parameters, calendar pages, and on-site search result pages get crawled | Block parameter paths in robots.txt |
| Duplicate content | One page on many URLs (parameters, casing, trailing slash) | canonical + consistent internal linking |
| Redirect chains | A→B→C daisy-chained 301s | Collapse all of them into a single direct hop |
| Soft 404 | Empty page returns 200 | If there's genuinely no content, return 404/410 |

## How to Watch Your Own Crawl Situation: Two Places in GSC

1. **Settings → Crawl stats**: Look at daily crawl requests, average response time, and the breakdown by response and file type. A healthy site: stable response time (aim for < 600ms), a 5xx ratio near zero, and crawl volume with no unexplained collapse.
2. **Indexing → Pages**: A steadily rising **"Discovered - currently not indexed"** count is the most direct warning sign of insufficient crawl demand; a high **"Crawled - currently not indexed"** means it got crawled but didn't pass the quality bar. Both states are worth reading carefully to trace back to the content problem behind them.

## Five Things to Improve Crawl Efficiency (Ranked by Payoff)

1. **Clear content debt**: Make most pages on your site pages someone actually wants — this directly raises crawl demand.
2. **Point internal links where they matter**: Important pages should be reachable from high-authority pages, within three clicks.
3. **Put only indexable URLs in your sitemap**: A sitemap is a declaration of "what you want Google to crawl" — don't stuff noindex pages or redirect pages in, and keep `lastmod` honest.
4. **Fast server responses**: This is the foundation of both Core Web Vitals and crawl capacity.
5. **Use robots.txt correctly**: Block parameter traps and infinite spaces. Remember that robots.txt means "don't crawl," not "don't index" — to remove something from the index, use noindex or delete the page.

## 2026 Bonus: AI Crawlers Are Spending Your Bandwidth Too

Traffic from AI crawlers like GPTBot (OpenAI), PerplexityBot, and Google-Extended has grown noticeably in recent years. They don't affect Google's crawl budget (each system is independent), but they share your server resources. If you want to be cited by AI, don't block them; when your server is strained, reach for caching and a CDN first rather than blocking. For the full picture, see [Managing AI Crawlers](/en/blog/ai-crawler-management/).

## Frequently Asked Questions (FAQ)

**Q1: My blog only has 200 pages — can I ignore crawl budget entirely?**
Mechanically, yes — you'll never exhaust your quota. But "don't let low-quality pages dilute your site-wide rating" has nothing to do with scale; if 120 of those 200 pages are empty shells, what suffers is the quality assessment, and the symptom is the same: slower indexing.

**Q2: How do I get new articles indexed faster?**
After publishing, add internal links from your homepage or high-traffic older posts, add the URL to your sitemap and update lastmod, and use the "Request indexing" option in GSC's URL Inspection tool. Do all three together and most healthy sites get indexed within 24–72 hours.

**Q3: What's going on when crawl frequency suddenly collapses?**
Check the server first: is there a burst of 5xx errors, a spike in response time, or a firewall/CDN mistakenly blocking Googlebot? If the tech is fine, then check whether you recently added a large batch of low-quality pages that dragged crawl demand down.

**Q4: Is crawl budget directly related to ranking?**
No direct relationship — crawling more doesn't mean ranking better. What it affects is how fast content gets discovered and updated; ranking still comes down to content quality and relevance.

---

GeoSeoToday's order for handling crawl problems is always: clear content debt first, fix internal links next, and only then tune technical parameters — because demand-side problems account for eighty percent of it. To see whether your content is good enough that Google and AI are willing to spend resources on it, run the [GEO Readiness Check](/en/geo/) yourself, or read [What Is GEO](/en/blog/what-is-geo/) for the full method.
