---
title: "Schema Structured Data: A Beginner's Hands-On Tutorial"
description: "Schema markup uses JSON-LD to tell search engines and AI what a page is, who wrote it, and what it covers. This tutorial takes you from zero: pick a type, write your first Article + FAQPage markup, validate, and deploy — with copy-and-adapt code."
target_keyword: schema tutorial
intent: informational
cluster: On-page SEO
author: GeoSeoToday
date_published: 2026-07-15
date_updated: 2026-07-15
translations:
  zh-hant: schema-tutorial
  zh-hans: schema-tutorial
---
# Schema Structured Data: A Beginner's Hands-On Tutorial

**Schema structured data is a block of JSON-LD placed in a page's `<head>` that uses schema.org's standard vocabulary to tell search engines and AI engines: what type of thing this page is, who wrote it, when it was published, and which questions it answers.** As a beginner, once you can handle three types — Article, FAQPage, and BreadcrumbList — you cover 90% of what a blog needs.

## What can schema do for you? Set expectations first

1. **Rich results**: Eligible markup can add star ratings, an FAQ accordion, or a breadcrumb trail to your search listing, lifting click-through rate.
2. **Disambiguation**: It tells machines explicitly that this "Apple" is the company, not the fruit, strengthening entity understanding.
3. **Friendly to AI engines**: Structured author, date, and organization info makes it easier for an LLM to judge how trustworthy and current your content is when it retrieves you.

Be just as clear about what it **cannot** do: schema is not a ranking boost in itself — Google's official position is that structured data helps *understanding*, and does not directly improve rankings. If the content is bad, no amount of perfect markup will save it.

Also reckon with the 2026 reality: over the past few years Google has **cut back** the display of several rich results (the FAQ rich result has been reserved for well-known government and health sites since August 2023). So the main value of FAQPage markup has shifted toward machine understanding and AI citation, not the search layout.

## Three formats — only learn JSON-LD

Structured data can be written three ways: JSON-LD, Microdata, and RDFa. **Google officially recommends JSON-LD**: it's a self-contained `<script>` block, requires no changes to your HTML structure, and is the easiest to maintain. This tutorial teaches only this one.

## Hands-on: Article markup for a blog post

Drop the block below into your article page's `<head>` (the `<body>` also works — Google reads both):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Schema Structured Data: A Beginner's Hands-On Tutorial",
  "description": "Learn JSON-LD markup from zero",
  "datePublished": "2026-07-15",
  "dateModified": "2026-07-15",
  "author": {
    "@type": "Organization",
    "name": "GeoSeoToday",
    "url": "https://example.com/en/about/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GeoSeoToday"
  }
}
</script>
```

Key fields:

- `headline`: Match the page's H1.
- `datePublished` / `dateModified`: Use ISO 8601 format; when you update the content, remember to update `dateModified` too.
- `author`: Use `Person` for an individual (add `sameAs` linking to social profiles to corroborate identity), or `Organization` for a team. This directly supports E-E-A-T signals.

## Hands-on: FAQPage markup

When your article has an FAQ section, add the matching markup — **the marked-up content must be identical to the text actually shown on the page**. That is a hard Google requirement:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Does schema directly improve rankings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Not directly. It helps search engines understand the content and may trigger rich results."
    }
  }]
}
</script>
```

`mainEntity` is an array — add one Question object per question you have.

## Validate and deploy: a four-step flow

1. **Write**: Adapt the templates above. On static sites (Astro, Next, etc.), it's best to build them as a template component that pulls fields from frontmatter automatically, so nothing drifts out of sync by hand.
2. **Validate**: Paste it into Google's **Rich Results Test** (search.google.com/test/rich-results) to check for errors and warnings; then run the **Schema.org validator** (validator.schema.org) to check the syntax.
3. **Monitor after deploy**: In Google Search Console, the **Experience & Enhancements** section will show matching reports (e.g. "FAQ", "Breadcrumbs"), listing valid and invalid pages.
4. **Maintain**: When you revise content, update the markup in step — "markup does not match page content" is the most common violation and can trigger a manual action.

## Priority order for beginners

| Priority | Type | Where to use it |
|---|---|---|
| 1 | Article / BlogPosting | Every article |
| 2 | BreadcrumbList | Site-wide, alongside breadcrumb navigation |
| 3 | FAQPage | Articles with an FAQ section |
| 4 | Organization / Person | Home page and author pages, to build the entity |
| 5 | HowTo, Product, etc. | Only when you have the matching content type |

## Frequently asked questions (FAQ)

**Q1: No engineer on hand — can I do schema without writing code?**
Yes. On WordPress, plugins like Rank Math and Yoast generate it automatically; on other CMSs, use an online JSON-LD generator (such as Merkle's Schema Markup Generator) and paste the output into your page template.

**Q2: Can one page carry multiple schema types?**
Yes, and it's common — an article page running Article + FAQPage + BreadcrumbList together is fully compliant. You can put them in one `@graph` or split them into separate `<script>` blocks.

**Q3: How long after adding schema will I see a rich result?**
Only after Google re-crawls and processes the page, usually days to weeks; and being eligible does not guarantee display — Google decides based on the query context. Confirm in the GSC enhancement report that the markup is "valid," then leave the rest to time.

**Q4: Does schema really help GEO / AI citation?**
It helps, but it's not magic. Structured author, organization, and date info makes it easier for AI retrieval systems to assess a source's trustworthiness; but AI citation ultimately turns on whether the content itself is specific and extractable enough. Do both together.

---

Every article on GeoSeoToday automatically carries Article + FAQPage markup — it's part of our GEO-readiness standard, and you can paste an article into the [GEO Readiness Check](/en/geo/) to see whether its structure signals are in place. For how schema fits into the broader GEO picture, see [Schema Markup for GEO](/en/blog/schema-for-geo/).
