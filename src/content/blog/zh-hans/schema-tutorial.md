---
title: Schema 结构化数据新手实操教程
description: Schema 结构化数据是用 JSON-LD 告诉搜索引擎与 AI「这页是什么、谁写的、讲什么」。本文从零教你挑类型、写第一段 Article + FAQPage 标记、验证与部署，附可直接改用的代码。
target_keyword: schema 教程
intent: informational
cluster: On-page & 技术 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-07-15
date_updated: 2026-07-15
translations:
  zh-hant: schema-tutorial
  en: schema-tutorial
---
# Schema 结构化数据新手实操教程

**Schema 结构化数据是一段放在网页 `<head>` 里的 JSON-LD 代码，用 schema.org 的标准词汇告诉搜索引擎和 AI 引擎：这页是什么类型、谁写的、何时发布、回答了哪些问题。** 新手只要学会 Article、FAQPage、BreadcrumbList 三种类型，就涵盖了博客 90% 的需求。

## Schema 能带来什么？先讲清楚期望值

1. **富媒体搜索结果（rich results）**：符合条件的标记可能让搜索结果多出评分星星、FAQ 折叠、面包屑路径，提升点击率。
2. **消歧义**：明确告诉机器「这个『Apple』是公司不是水果」，强化实体理解。
3. **对 AI 引擎友好**：结构化的作者、日期、组织信息，让 LLM 检索时更容易判定内容可信度与时效。

也要讲清楚它**不能**做什么：Schema 本身不是排名加分项——Google 官方立场是结构化数据帮助「理解」，不直接提升排名。内容差，标记再完整也没用。

另外注意 2026 年的现实：Google 这几年**缩减**了部分 rich result 的展示（FAQ rich result 自 2023 年 8 月起只保留给知名政府与健康网站）。所以做 FAQPage 标记的主要价值已转向机器理解与 AI 引用，不是搜索版面。

## 三种格式，只学 JSON-LD

结构化数据有三种写法：JSON-LD、Microdata、RDFa。**Google 官方推荐 JSON-LD**，它是一段独立的 `<script>`，不用改动 HTML 结构，最好维护。本文只教这一种。

## 实操：博客文章的 Article 标记

把下面这段放进文章页的 `<head>`（或 `<body>` 也可，Google 都读）：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Schema 结构化数据新手实操教程",
  "description": "从零学会 JSON-LD 标记",
  "datePublished": "2026-07-15",
  "dateModified": "2026-07-15",
  "author": {
    "@type": "Organization",
    "name": "GeoSeoToday",
    "url": "https://example.com/zh-hans/about/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GeoSeoToday"
  }
}
</script>
```

字段重点：

- `headline`：和页面 H1 一致。
- `datePublished` / `dateModified`：用 ISO 8601 格式；内容更新时记得同步改 `dateModified`。
- `author`：个人用 `Person`（可加 `sameAs` 链接到社交主页佐证身份），团队挂 `Organization`。这直接支撑 E-E-A-T 信号。

## 实操：FAQPage 标记

文章有 FAQ 段落时，加上对应标记——**标记内容必须和页面上实际显示的文字一致**，这是 Google 的硬性规范：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Schema 会直接提升排名吗？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "不会直接提升。它帮助搜索引擎理解内容，并可能触发富媒体搜索结果。"
    }
  }]
}
</script>
```

`mainEntity` 是数组，有几题就放几个 Question 对象。

## 验证与部署：四步流程

1. **写**：用上面的模板改内容。静态网站（Astro、Next 等）建议写成模板组件，从 frontmatter 自动带入字段，避免手动维护不同步。
2. **验**：贴进 Google 的 **富媒体搜索结果测试**（Rich Results Test，search.google.com/test/rich-results）看有没有错误与警告；再用 **Schema.org validator**（validator.schema.org）检查语法。
3. **部署后监控**：GSC 左侧「**体验与增强**」区会出现对应报表（例如「常见问题」「导航标记」），列出有效与错误的页面。
4. **维护**：内容改版时同步更新标记——「标记与页面内容不符」是最常见的违规，可能导致人工处罚。

## 新手优先顺序

| 优先度 | 类型 | 用在哪 |
|---|---|---|
| 1 | Article / BlogPosting | 每篇文章 |
| 2 | BreadcrumbList | 全站，配合面包屑导航 |
| 3 | FAQPage | 有 FAQ 段的文章 |
| 4 | Organization / Person | 首页与作者页，建立实体 |
| 5 | HowTo、Product 等 | 有对应内容类型才加 |

## 常见问题（FAQ）

**Q1：没有工程师，可以不写代码做 Schema 吗？**
可以。WordPress 用 Rank Math、Yoast 等插件自动生成；其他 CMS 可用在线 JSON-LD 生成器（如 Merkle 的 Schema Markup Generator）产出后贴进页面模板。

**Q2：一页可以放多个 Schema 类型吗？**
可以，而且很常见——文章页同时放 Article + FAQPage + BreadcrumbList 完全合规。可以放在同一个 `@graph` 里，或分成多个 `<script>` 区块。

**Q3：加了 Schema 多久会看到 rich result？**
Google 重新爬取并处理后才可能出现，通常数天到数周；而且符合资格不保证显示，Google 依查询情境决定。用 GSC 的增强报表确认标记「有效」即可，剩下交给时间。

**Q4：Schema 对 GEO／AI 引用真的有帮助吗？**
有帮助但非魔法。结构化的作者、组织、日期让 AI 检索系统更容易评估来源可信度；但 AI 引用最终看的是内容本身够不够具体、可摘录。两者要一起做。

---

GeoSeoToday 的每一篇文章都自动挂 Article + FAQPage 标记——这是我们 GEO 就绪标准的一部分，你可以把文章贴进 [GEO 就绪度检测器](/zh-hans/geo/) 看看结构信号是否到位。Schema 在整个 GEO 版图中的位置，见〈[面向 GEO 的 Schema 标记](/zh-hans/blog/schema-for-geo/)〉。
