---
title: "Multilingual Site Architecture: Subdirectory vs. Subdomain vs. ccTLD"
description: A multilingual site can be built three ways — subdirectory (/en/), subdomain (tw.example.com), or ccTLD (example.tw). This comparison breaks down how they differ on authority sharing, upkeep, and geo-signals, and why most sites should pick subdirectories.
target_keyword: multilingual site architecture
intent: informational
cluster: Multilingual SEO
author: GeoSeoToday
date_published: 2026-07-24
date_updated: 2026-07-24
translations:
  zh-hant: multilingual-site-structure
  zh-hans: multilingual-site-structure
---
# Multilingual Site Architecture: Subdirectory vs. Subdomain vs. ccTLD

**Of the three ways to structure a multilingual site, subdirectories (`example.com/en/`) let every language share one domain's authority at the lowest upkeep — the right default for most sites. Subdomains and ccTLDs only earn their keep under specific business or regulatory needs.** Architecture is the first decision in multilingual SEO, and moving house after you pick wrong is brutally expensive.

## What are the three architectures?

Take a three-language site — Traditional Chinese, Simplified Chinese, and English. Here's how each option looks:

- **Subdirectory:** `example.com/zh-hant/`, `example.com/zh-hans/`, `example.com/en/`
- **Subdomain:** `tw.example.com`, `cn.example.com`, `www.example.com`
- **ccTLD (country-code top-level domain):** `example.tw`, `example.cn`, `example.com`

## The full comparison

| Criterion | Subdirectory | Subdomain | ccTLD |
|---|---|---|---|
| Authority sharing | ✅ All languages share the main domain's authority | ⚠️ Google tends to treat each as its own site; authority mostly splits | ❌ Every domain builds from zero |
| Upkeep | Low (one domain, one host and certificate) | Medium (several DNS and deployment setups) | High (multiple domains, renewals, separate GSC and backlinks) |
| Geo-signal strength | Weak (leans on hreflang) | Weak–medium | Strong (.tw maps naturally to Taiwan) |
| Backlink payoff | A link to any language lifts the whole site | Mostly stays on that subdomain | Stays on that country's domain only |
| Best for | The vast majority of content sites, SaaS, B2B | Each language run by a separate team | Local domain required by law, or separate brands per country |

## Why is subdirectory the default recommendation?

1. **Authority is the scarcest resource.** What a new or small-to-mid site lacks most is domain authority. With subdirectories, every backlink your English pages earn simultaneously props up the Traditional and Simplified versions. Switch to ccTLDs and you're raising three sites from zero at once — same content output, but growth can come in several times slower.
2. **There's only one thing to maintain.** One domain means one certificate, one deployment, one GSC property (filter by folder to track languages separately), and one backlink profile to manage. If you want the site to last, running cost beats theoretical upside.
3. **Let hreflang handle language routing.** The one weakness of subdirectories is the lack of a natural geo-signal — but that's exactly hreflang's job. Tag every page with `zh-Hant` / `zh-Hans` / `en` plus x-default and the routing covers the overwhelming majority of cases.

## When should you *not* choose subdirectory?

- **Going into mainland China:** the mainland market runs on Baidu (Google has been unavailable there since 2010), and ICP filing usually requires in-country hosting and a `.cn` or already-filed domain. That's a standalone decision — don't fold it into the same architecture as your other languages.
- **Each country run by a fully separate team and brand:** if country subsidiaries have their own product lines and marketing budgets, the independence of a ccTLD becomes an advantage rather than a cost.
- **An existing subdomain already holds a lot of equity:** migrations carry risk. If what you have works well, don't move house chasing the "theoretical best."

## Three follow-through moves after you pick an architecture

1. **Implement complete hreflang on every page** (all languages + self-reference + x-default) — this is the lifeline of a subdirectory setup.
2. **One sitemap per language**, which makes submission and debugging easier.
3. **Track languages separately in GSC** by folder filter, so each language's impressions, clicks, and indexing can be read on their own — that's how you catch a problem confined to one language.

## FAQ

**Q1: I'm already on subdomains — should I move to subdirectories?**
If the subdomains have underperformed on SEO for a long time and the site is still early in its growth, migrating is usually worth it — just build a thorough site-wide 301 map first. If you already have stable traffic and rankings, the migration risk may outweigh the gain; max out hreflang and content quality first, then reassess.

**Q2: Should the subdirectory be /en/ or /us/?**
Use language-based folders like `/zh-hant/` and `/zh-hans/` rather than region-based ones. Traditional Chinese readers aren't only in Taiwan (Hong Kong and the diaspora count too), and English readers span far more than the US. A region-based name like `/us/` paints you into a corner the day you want to serve another market in that language.

**Q3: Can I mix architectures?**
Technically yes (e.g. subdirectories for the main site, a standalone `.cn` for mainland China), but never let the same language appear under two architectures — that just cannibalizes itself. The only sound reason to mix is exactly this one: handle mainland China separately, keep every other language on the main domain.

**Q4: Does architecture affect getting cited by AI (GEO)?**
Yes, indirectly. AI engines prefer to cite high-authority sources, and concentrating authority via subdirectories puts every language version on the same higher trust footing — a real edge for a site that needs all three languages cited.

---

GeoSeoToday itself runs on exactly this "subdirectory + hreflang" architecture (/zh-hant/, /zh-hans/, /en/). Once the architecture is settled, the first job is getting your hreflang pairing right — use our [hreflang generator and GEO readiness checker](/en/geo/) to produce the tags in one click. For the language-by-language citation playbook, read [Multilingual GEO](/en/blog/multilingual-geo/), and to nail the body of each page, the [GEO content structure template](/en/blog/geo-content-structure/).
