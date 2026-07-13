---
title: "JavaScript SEO: Why AI Engines Can't Read Your SPA (And How to Fix It)"
description: React and Vue single-page apps often get delayed Google indexing and zero visibility in AI answer engines. This guide compares CSR, SSR, SSG, and Dynamic Rendering, plus a 3-minute checklist to confirm whether your pages are actually crawlable.
target_keyword: javascript seo
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-08-27
date_updated: 2026-08-27
translations:
  zh-hant: javascript-seo-rendering
  zh-hans: javascript-seo-rendering
---
# JavaScript SEO: Why AI Engines Can't Read Your SPA (And How to Fix It)

**Most AI crawlers — GPTBot, PerplexityBot, ClaudeBot — don't execute JavaScript; they only read the initial HTML response. If your React or Vue app only renders body content client-side, AI engines are getting a blank page.** The fix is to move rendering back to the server or the build step: SSR or build-time prerendering, so "view source" shows the full text. That's the line between a dynamic site that gets indexed and cited, and one that doesn't.

## Why client-side rendering is especially costly for AI visibility

Googlebot has had two-phase rendering (crawl the HTML first, queue JS execution for later) for years, but that render queue can lag by days or weeks and isn't guaranteed to process every page. AI crawlers are worse off: based on current public documentation, GPTBot, OAI-SearchBot, PerplexityBot, and ClaudeBot **do not execute JavaScript** at all. Whatever HTML your server returns on the first request is what they see. If that response is just `<div id="root"></div>` plus a pile of `<script>` tags, the visible body text is zero words — not a ranking penalty, a complete absence from indexing and citation.

## Four rendering strategies compared

| Strategy | Body text in initial HTML | Google indexing | Readable by AI crawlers | Dev complexity | Best for |
|---|---|---|---|---|---|
| **CSR** (client-side only) | No | Delayed, not guaranteed | Effectively unreadable | Low | Dashboards, logged-in apps with no SEO need |
| **SSR** (server-side rendering — Next.js, Nuxt) | Yes | Immediate | Readable | Medium-high | Blogs and e-commerce pages with frequently changing content |
| **SSG** (static generation at build time — Astro, Gatsby) | Yes | Immediate | Readable | Medium | Marketing pages, articles that change infrequently (what this site uses) |
| **Dynamic Rendering** (serve different output by user-agent) | Yes (crawlers only) | Immediate | Readable | High, ongoing maintenance | Short-term patch for legacy SPAs, not a long-term fix |

Google officially classified Dynamic Rendering as a "transitional solution" back in 2023, not a recommended long-term approach — you end up maintaining two rendering paths, and there's cloaking risk if the two versions diverge. The durable fix is SSR or SSG, so every visitor — human or AI crawler — gets the same complete HTML.

## A 3-minute self-check

1. **Right-click "View Page Source"** (not the DevTools Elements panel) — this is what a crawler actually sees. If your headline and body text aren't in the raw source, you're running pure CSR.
2. **Fetch the page as a bot directly**: `curl -A "GPTBot" https://yourdomain.com | less`. No browser rendering involved — this is the closest simulation of what an AI crawler receives.
3. **Google Search Console's URL Inspection tool** — compare the "Crawled page" screenshot against "View Crawled Page" HTML. If the body text doesn't match, rendering is delayed or incomplete.
4. **Check the HTML payload size right after Time to First Byte** — if the initial response is under 5KB for a page that should hold a 1,000-word article, the body almost certainly loads after JS execution.
5. **Spot-check 3–5 core pages with JavaScript disabled in an incognito window** — if the body text disappears entirely, it's also invisible to any crawler that doesn't execute JS.

## Fix priority by site type

- **Content sites (blogs, knowledge bases)**: Migrate to SSG first (Astro, Next.js static export, Gatsby). Content changes infrequently, everything compiles to static HTML at build time, and AI crawlers get zero-latency access without you having to maintain server rendering infrastructure.
- **E-commerce or frequently updated content**: SSR (Next.js App Router, Nuxt 3) fits better — inventory and pricing stay live, while the first response still ships complete HTML.
- **Large legacy SPAs that can't be rewritten immediately**: Partial prerendering or a service like Prerender.io can serve as a stopgap, but treat it as technical debt on a migration roadmap, not a permanent solution.
- **Whichever fix you choose, prioritize listing pages and article/product detail pages first** — these carry the most citable, specific information and matter more than the homepage.

**The core test is one question: with JavaScript turned off, is your body content still in the initial HTML?** That single answer determines whether Google indexes you reliably and whether AI engines can cite you at all.

## FAQ

**Q1: My site is a React SPA — do I have to rewrite the whole thing in Next.js to fix this?**
Not necessarily. If your framework supports incremental migration (Next.js lets you adopt SSR/SSG page by page, and Vite + vite-plugin-ssr supports gradual rollout too), start with the pages that carry the most traffic or citation value — articles, product pages — and leave backend/logged-in pages on CSR since they don't need SEO.

**Q2: Google says it renders JavaScript, so does CSR even matter for Google?**
It matters less for pure Google ranking, but there's still discovery latency risk from the render queue. For AI engines — ChatGPT, Perplexity, Claude — it's close to fatal, since their retrieval crawlers generally don't execute JS at all. If GEO visibility matters to you, CSR is not an acceptable long-term state.

**Q3: Will Dynamic Rendering get me penalized for cloaking?**
As long as crawlers and users see the same underlying information rendered differently — not extra keywords or hidden content stuffed in for bots — Google's own guidance says this isn't cloaking. The real risk is operational: maintaining two rendering paths tends to drift out of sync over time, which is why it's best treated as a stopgap rather than an endpoint.

**Q4: How do I confirm my SSR/SSG setup actually works everywhere, not just on a few pages I happened to test?**
Use the "view source" and "curl as a bot" checks above across at least 10 different page types — homepage, listing pages, detail pages, tag pages — and confirm the body text appears in the initial HTML for each one, rather than testing one or two pages and assuming the whole site is fine.

---

JavaScript rendering is just one piece of the technical foundation — for the full picture on which AI crawlers to allow and how, see [AI Crawler List and Management](/en/blog/ai-crawler-management/). For a complete walkthrough of GEO fundamentals, check the [Complete GEO Guide](/en/blog/geo-complete-guide/), or start directly at [/en/geo/](/en/geo/).
