---
title: 每种语言各一份 sitemap 怎么设
description: 多语言网站建议每种语言各建一份 XML sitemap，再用 sitemap index 统整提交。本文提供繁中／简中／英文的实际文件范例、含 hreflang 标注的 sitemap 写法，以及在 GSC 分开监控收录的方法。
target_keyword: 多语言 sitemap
intent: informational
cluster: 多语言 / 国际 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-07-25
date_updated: 2026-07-25
translations:
  zh-hant: multilingual-sitemap
  en: multilingual-sitemap
---
# 每种语言各一份 sitemap 怎么设

**多语言网站的最佳实践是「每种语言各一份 XML sitemap，再用一个 sitemap index 统整」：例如 `sitemap-zh-hant.xml`、`sitemap-zh-hans.xml`、`sitemap-en.xml`。** 这样做能在 GSC 分别监控每个语言的收录状况，一眼看出「是全站问题，还是某个语言版本出问题」。

## 为什么要按语言拆 sitemap？

sitemap 本身不影响排名，它的价值在**收录与诊断**。把三个语言混在同一份 sitemap 里，GSC 只会告诉你「已提交 3,000 页、已收录 2,100 页」——你不知道缺的 900 页集中在哪个语言。按语言拆开后：

1. **收录率分语言可见**：简中版收录率若明显低于繁中版，可能是内容太接近繁中（机器直转）或 hreflang／canonical 设定出错，能立刻锁定方向。
2. **提交与排错独立**：新增一批英文文章后，只需重新提交英文 sitemap。
3. **与子目录架构天然对齐**：`/zh-hant/` 目录对应 `sitemap-zh-hant.xml`，追踪逻辑一致。

## 文件结构范例

三语网站的标准配置是「1 个 index＋3 份语言 sitemap」：

```
https://example.com/sitemap-index.xml   ← 只提交这一个
├── https://example.com/sitemap-zh-hant.xml
├── https://example.com/sitemap-zh-hans.xml
└── https://example.com/sitemap-en.xml
```

sitemap index 的内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://example.com/sitemap-zh-hant.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-zh-hans.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-en.xml</loc></sitemap>
</sitemapindex>
```

## 进阶：在 sitemap 里标 hreflang

hreflang 除了放 HTML `<head>`，也可以放在 sitemap 里（两种方式**择一**，不要重复又不一致）。写法是在每个 `<url>` 里用 `xhtml:link` 列出全部语言版本＋x-default：

```xml
<url>
  <loc>https://example.com/zh-hant/geo-guide/</loc>
  <xhtml:link rel="alternate" hreflang="zh-Hant" href="https://example.com/zh-hant/geo-guide/" />
  <xhtml:link rel="alternate" hreflang="zh-Hans" href="https://example.com/zh-hans/geo-guide/" />
  <xhtml:link rel="alternate" hreflang="en" href="https://example.com/en/geo-guide/" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://example.com/en/geo-guide/" />
</url>
```

规则和 HTML 版完全相同：**每个 URL 都要列全部语言＋自我引用＋x-default，且双向一致**。页面数量大的网站用 sitemap 标注，可以把 hreflang 的维护集中在生成 sitemap 的那段代码里，比逐页模板更不容易漏。

## 设定时的 5 个注意事项

1. **只放可收录的最终 URL**：带 noindex、跳转中、404 的页面不要进 sitemap，收录率报表才有诊断价值。
2. **URL 用绝对路径**，且与 canonical 一致（含结尾斜线与 https）。
3. **单一 sitemap 上限 50,000 个 URL、未压缩 50 MB**（sitemaps.org 协议规范），超过就再拆。
4. **lastmod 要真实**：只在内容实际更新时改动，全站每天自动更新 lastmod 会让这个字段失去参考价值。
5. **在 robots.txt 声明 sitemap index**：`Sitemap: https://example.com/sitemap-index.xml`，让 Bing 等其他引擎也能发现。

## GSC 的操作步骤

1. 进入 GSC →「Sitemap」→ 提交 `sitemap-index.xml`，Google 会自动展开三份子 sitemap。
2. 之后每份语言 sitemap 都会有独立的一列，各自显示「已找到的网页数」与可筛选的收录状态。
3. 每月检查一次：任一语言的收录比率明显落后其他语言，就往内容重复度、hreflang、内部链接三个方向排查。

## 常见问题（FAQ）

**Q1：一定要按语言拆吗？全站一份不行？**
技术上一份也能收录，但你会失去分语言诊断的能力。拆分几乎零成本（多数框架与 SEO 插件都支持），换来的诊断精度非常划算。

**Q2：Astro、Next.js 这类框架怎么生成多语言 sitemap？**
主流做法是用官方或社区的 sitemap 集成（如 @astrojs/sitemap）依路由前缀分组，或自写一支在 build 时按 `/zh-hant/`、`/zh-hans/`、`/en/` 分文件输出的脚本，顺便注入 xhtml:link 标注。

**Q3：hreflang 放 HTML 还是放 sitemap 好？**
页数少、模板可控 → HTML head 直观好查；页数多、由系统生成 → sitemap 集中维护。关键是择一，两处都放又不同步是常见事故来源。

**Q4：sitemap 提交后多久会收录？**
提交只是「通知」，不保证收录与时程。新站通常数天到数周；若特定语言长期收录率低，问题多半在内容质量或重复度，而不是 sitemap 本身。

---

sitemap 拆好之后，别忘了每个 URL 的 hreflang 配对——GeoSeoToday 的 [hreflang 生成器与 GEO 检测工具](/zh-hans/geo/) 可以直接产出 HTML 与 sitemap 两种格式的标签。下一步是把 GSC 的追踪也按语言切开；整体架构可回到多语言 / 国际 SEO 的完整指南。
