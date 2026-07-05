---
title: "The 301 Redirect Checklist for Migrating a Site Without Losing Rankings"
description: To migrate a site (new domain, new URL structure, or redesign) without losing rankings, everything hinges on a one-to-one 301 redirect map and 90 days of post-move monitoring. This is a 20-point checklist across three stages — before, during, and after the move.
target_keyword: 301 redirect seo
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-17
date_updated: 2026-07-17
translations:
  zh-hant: 301-redirect-checklist
  zh-hans: 301-redirect-checklist
---
# The 301 Redirect Checklist for Migrating a Site Without Losing Rankings

**Keeping your rankings through a site migration comes down to one rule: every old URL must 301-redirect to the content-matching new URL — one-to-one, single-hop, and permanent.** Everything else is just preparation and verification around that rule. Work through the 20 items across the three stages below, and the traffic swing a migration causes can usually be recovered within a few weeks.

## First, figure out which kind of "migration" you're doing

The 301 checklist applies to four scenarios, from lowest to highest risk:

1. **HTTP to HTTPS**: lowest risk, simple rules.
2. **Changing the URL structure** (for example, stripping the date out of URLs): medium risk — this is where the redirect map is easiest to get wrong.
3. **Changing domains**: high risk, involves the GSC Change of Address tool.
4. **Changing domain + redesign + restructure all at once**: highest risk — **split it up if you possibly can.** Change one variable at a time so that when something breaks, you know exactly what caused it. As of 2026, this remains the number-one lesson from migration disasters.

Even when everything is done right, a 5–15% traffic swing in the first one to three months after a move is normal — Google needs time to reprocess the whole batch of signals.

## Before the move: the map is everything (8 items)

1. Export a full list of every URL on the site: crawl the whole site, pull the GSC Performance report, and add your sitemap — the union of all three sources.
2. Build a **one-to-one map**: old URL → new URL, one row per pair, saved as a spreadsheet.
3. Identify old URLs with no matching page on the new site: redirect them to the most relevant parent page. **Do not dump them all on the homepage** — mass homepage redirects get treated as soft 404s.
4. Validate the map in staging first: sample 50 rows and confirm the response code is really a 301 (not a 302, not a 200).
5. Confirm **single hops**: old A → new B in one step. No A→B→C redirect chains.
6. Record your baseline: the 30 days before the move — impressions, clicks, and your top 50 keywords. Without a baseline you can't tell whether anything actually dropped.
7. Plan the internal-link rewrite: point on-site links straight at the new URLs. Don't lean on the 301s to carry them.
8. Schedule the move for a low-traffic window and month, away from your commercial peak.

## Move day (5 items)

- Deploy the 301 rules and spot-check across the site (homepage, high-traffic pages, and parameterized URLs included).
- Update the sitemap to the new URLs and resubmit it in GSC.
- If you're changing domains: use the Change of Address tool in GSC to notify Google.
- Check that robots.txt isn't accidentally blocking the new site (a forgotten staging-site `Disallow` is the classic accident).
- Update every URL inside canonicals, hreflang, and Schema to point to the new address.

## The 90 days after: monitoring and cleanup (7 items)

| Timeframe | What to check |
|---|---|
| Days 1–7 | Watch for a spike in 404s in GSC Coverage; confirm from server logs that crawlers are hitting the new URLs |
| Weeks 2–4 | Old-URL indexing should fall while new-URL indexing rises; patch any 301s you missed |
| Months 1–3 | Compare against your baseline; contact high-value backlink sources and ask them to point at the new address |

Keep the 301 rules for at least a year — Google officially recommends keeping them as long as you can, because external links and users' bookmarks won't update themselves.

## Frequently asked questions (FAQ)

**Q1: Do 301s leak link equity?**
Google has stated publicly, more than once, that 301s no longer discount PageRank. In practice, ranking swings are caused by mapping errors and content changes, not by the 301 itself.

**Q2: What's the difference between a 302 and a 301? Can I use a 302 for a migration?**
A 302 is a temporary redirect; it consolidates signals more slowly and less definitively than a 301. For a permanent move, always use a 301.

**Q3: How long should I keep renewing the old domain?**
As long as any backlinks still point to the old domain, keep renewing it and keep the 301s live. The general advice is at least a year; for sites with lots of backlinks, keep it permanently.

**Q4: My rankings dropped after the move — how do I tell whether the 301s are the problem?**
Diagnose in three steps: sample the old URLs of the pages that dropped and check the response code is a 301 and a single hop; check GSC to see whether the new URLs are getting indexed; compare the old and new page content for major changes. Nine times out of ten the problem is a gap in the map or a change in content.

---

A migration is one of the few technical-SEO operations where getting it wrong once means half a year of recovery, so it's worth ticking off item by item. Migrations often happen alongside URL planning, so it pairs well with planning your URL structure and site architecture and understanding what crawl budget is. Before you publish any of the new pages after the move, run them through GeoSeoToday's free [GEO readiness check](/en/geo/) for a quick health check.
