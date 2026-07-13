---
title: "Broken Link Audit: How to Systematically Find and Fix Dead Links"
description: Broken links do not just hurt user experience — they leak link equity and slow crawl efficiency. This guide covers a 3-track audit for internal 404s, dead outbound citations, and broken inbound backlinks.
target_keyword: broken link audit
intent: informational
cluster: Off-page SEO
author: GeoSeoToday
date_published: 2026-08-31
date_updated: 2026-08-31
translations:
  zh-hant: broken-link-audit
  zh-hans: broken-link-audit
---
# Broken Link Audit: How to Systematically Find and Fix Dead Links

**A broken link audit needs three tracks run together: fix internal 404s by repointing links or adding redirects, replace dead outbound citations with live sources, and reclaim broken inbound backlinks by requesting fixes from the linking site — running only one track (most sites only clean internal 404s) leaves the other two leaking equity.** Doing all three is what actually stops the bleeding, both in link equity and user experience.

## Why broken links deserve a systematic audit, not occasional spot-checks

Broken links fall into three categories, each with a different cause and fix:

1. **Internal dead links**: your own site links to a page you deleted or moved, and visitors land on a 404.
2. **Outbound dead links**: an article you published cites an external source that has since gone offline or moved.
3. **Broken inbound backlinks**: another site links to you, but the URL they're pointing at no longer exists — meaning you're silently losing the link equity that referral was worth.

The third category is the most overlooked, yet the most costly to ignore. Someone choosing to link to you is a scarce resource — if you change a URL without a 301, that equity simply evaporates. For mid-to-large sites (500+ articles) that have never run a broken link audit, internal 404 rates typically sit at 2–5%; sites that have migrated or undergone a major redesign can see that climb to 8–10%.

## Track 1: Internal 404s — full-site crawl plus internal link repair

**Steps:**

1. Crawl the entire site with a tool like Screaming Frog, Sitebulb, or a hosted option such as Ahrefs Site Audit, and filter for every URL returning a 404 status.
2. Cross-check against the "Not Found (404)" list in Google Search Console's Coverage report to catch old URLs Google has recorded that your crawler missed.
3. For each 404 URL, run an "inbound internal links" query to find every page on your own site still linking to it.
4. Decide the fix:
   - If the content moved rather than disappeared, repoint the internal link directly to the new URL (preferred), or add a 301 redirect.
   - If there's no equivalent page anymore, redirect to the most relevant parent category or pillar page — **do not mass-redirect everything to the homepage**, which Google can treat as a soft 404.
5. Re-crawl 1–2 weeks after fixes ship to confirm the list has cleared to zero.

## Track 2: Outbound dead links — refreshing your citations

External sources cited in your articles fail at a rate of roughly 5–10% every 12–18 months (pages get taken down, domains expire, sites get redesigned). To handle this:

- Run an "external links" report via a crawler or a browser extension like Check My Links, and check the status code of each one.
- For dead sources, first look for an updated URL from the same publisher (most link rot is a path change, not the whole domain disappearing); if you can't find one, swap in a source of comparable authority and recency.
- If the original data is still archived on the Wayback Machine, you can keep the citation text but label it "(page removed, archived version)" — while still aiming to replace it with a live source when a suitable one exists.

## Track 3: Broken inbound backlinks — requesting fixes one by one

This is the most overlooked track, yet the most worthwhile, because every fix **recovers link equity you'd otherwise lose entirely**:

1. Run a "Broken Backlinks" report in Ahrefs or Semrush to surface every external link pointing at your site where the target URL now returns a 404.
2. Sort by the linking domain's authority (DR/DA) and prioritize the highest-authority sources first.
3. Pick one of two fixes:
   - Add a 301 redirect on your end from the old URL to the most relevant live page — this needs no cooperation from the other site and is the fastest option.
   - If the old URL truly has no equivalent content, email the site owner, note that the link is broken, and suggest the most relevant current URL on your site — reply rates typically run only 10–20%, but the effort per email is low, making it worth batching.

## Three-track comparison

| Track | Root cause | Primary tools | Preferred fix |
|---|---|---|---|
| Internal 404s | Deleted/moved pages without redirects | Screaming Frog + GSC Coverage | Repoint internal links / 301 to relevant page |
| Outbound dead links | Cited source taken down or moved | Check My Links, manual spot-check | Swap in a live, comparably authoritative source |
| Broken inbound backlinks | External link targets a URL that no longer exists | Ahrefs/Semrush Broken Backlinks | Self-serve 301 first, outreach email as backup |

## FAQ

**Q1: How often should a broken link audit run?**
For mid-to-large content sites, quarterly is a reasonable cadence. In the 90 days after a migration or major redesign, run it monthly, then step back down to quarterly.

**Q2: If I fix internal links directly, do I still need a 301 redirect?**
Do both. Repointing internal links gets users and crawlers onto the right path immediately, but external bookmarks and existing backlinks will still hit the old URL — so keep the 301 in place too, typically for at least a year.

**Q3: Does outreach for broken inbound backlinks actually work?**
Reply rates are modest (10–20%), but the effort per email is low, and you don't need to wait for a reply — you can self-serve a 301 redirect in the meantime. Treat outreach as a bonus track, not your only fix.

**Q4: Do broken links directly hurt rankings?**
A handful of 404s rarely causes a direct penalty, but a large volume slows crawl efficiency and dilutes user-experience signals, and broken inbound backlinks mean you're silently forfeiting equity that would otherwise flow to your site — over time that becomes a real, if hidden, ranking cost.

---

A broken link audit is really about tying together three separate threads of "link health" — skip any one track and the audit stays incomplete. If your internal linking architecture is already messy, an audit will just keep surfacing new dead links; it's worth first reading [Internal Linking Strategy: How to Structure Links for Maximum SEO Impact](/en/blog/internal-linking-strategy/) to fix the foundation. Once your audit is done, run your updated articles through GeoSeoToday's free [GEO Readiness Checker](/en/geo/) to confirm they're still structured for AI citation.
