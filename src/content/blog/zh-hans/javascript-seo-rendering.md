---
title: "JavaScript SEO：SPA 内容爬不到、AI 读不到怎么修"
description: 用 React、Vue 打造的 SPA 常遇到 Google 收录延迟、AI 引擎完全读不到正文的问题。本文比较 CSR、SSR、SSG、Dynamic Rendering 四种渲染策略的优劣，并给出一个三分钟验证你的页面是否"爬虫可读"的检查清单。
target_keyword: javascript seo
intent: informational
cluster: On-page & 技术 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-27
date_updated: 2026-08-27
translations:
  zh-hant: javascript-seo-rendering
  en: javascript-seo-rendering
---
# JavaScript SEO：SPA 内容爬不到、AI 读不到怎么修

**多数 AI 爬虫（GPTBot、PerplexityBot、ClaudeBot）不执行 JavaScript，只读初始 HTML；你的 React／Vue 页面若靠 client-side render 才生出正文，等于对 AI 引擎交白卷。** 解法是把渲染责任从浏览器搬回服务器——用 SSR 或构建时 SSG 预渲染，确保"查看网页源代码"就能看到完整文字，这是动态网站能被搜索与 AI 收录的分水岭。

## 为什么 CSR 网站对 AI 引擎特别吃亏

传统 Googlebot 这几年已具备二阶段渲染能力（先抓 HTML，排入队列后再执行 JS），但这个渲染队列可能延迟数天到数周，且不保证所有页面都排到。AI 爬虫的处境更差：GPTBot、OAI-SearchBot、PerplexityBot、ClaudeBot 目前公开信息显示均**不执行 JavaScript**，它们读到的就是服务器响应的第一份 HTML。如果那份 HTML 里只有 `<div id="root"></div>` 加一堆 `<script>` 标签，AI 引擎看到的正文字数是零——不是排名差，是完全没有被索引与引用的机会。

## 四种渲染策略比较

| 策略 | 初始 HTML 含正文 | Google 收录 | AI 爬虫可读 | 开发复杂度 | 适用场景 |
|---|---|---|---|---|---|
| **CSR**（纯客户端渲染） | 否 | 延迟、不保证 | 几乎不可读 | 低 | 后台、仪表盘等不需 SEO 的页面 |
| **SSR**（服务器端渲染，如 Next.js / Nuxt） | 是 | 即时 | 可读 | 中高 | 内容常变动的博客、电商商品页 |
| **SSG**（构建时预渲染，如 Astro / Gatsby） | 是 | 即时 | 可读 | 中 | 内容变动不频繁的营销页、文章页（本站采此法） |
| **Dynamic Rendering**（依 user-agent 分流） | 是（仅对爬虫） | 即时 | 可读 | 高，且运维成本持续 | 旧有大型 SPA 短期补救，非长期解 |

Google 官方已在 2023 年将 Dynamic Rendering 列为"过渡方案"而非推荐做法，因为要维护两套渲染逻辑、且有被判定 cloaking（对人和对爬虫给不同内容）的风险。长期解法应该是 SSR 或 SSG，让所有人（含 AI 爬虫）拿到同一份完整 HTML。

## 三分钟自查清单

1. **右键"查看网页源代码"（非开发者工具的 Elements 面板）**——这才是爬虫真正看到的内容。若标题、正文在源代码里找不到，就是纯 CSR。
2. **用 `curl -A "GPTBot" https://你的网址 | less` 直接看服务器响应**——不经过浏览器渲染，这最接近 AI 爬虫的视角。
3. **Google Search Console 的"网址检查"工具**——比对"已抓取的网页"画面与"查看已抓取网页"的 HTML，两者若正文不一致，代表渲染有延迟或缺漏。
4. **检查 Time to First Byte 之后的 HTML 大小**——若初始响应小于 5KB 却是一篇千字文章的页面，八成正文要等 JS 执行才会出现。
5. **抽查 3–5 个核心页面用无痕窗口关闭 JavaScript 打开**——若正文完全消失，代表对不执行 JS 的爬虫也一样消失。

## 修复优先顺序

- **内容型网站（博客、知识库）**：优先迁移到 SSG（如 Astro、Next.js 的 Static Export、Gatsby）。内容变动频率低，构建时全部转成静态 HTML，AI 爬虫读取零延迟，也不必维护服务器渲染基础设施。
- **电商、常变动内容**：SSR（Next.js App Router、Nuxt 3）较适合，商品库存、价格能即时反映，同时仍在首次响应就吐出完整 HTML。
- **既有大型 SPA 短期内无法重构**：可用 SSR 框架的"部分预渲染"或 Prerender.io 之类服务作为过渡，但这是技术债，应排入迁移路线图，而非长期方案。
- **无论哪种修法，优先处理列表页与文章详情页**——这两类页面承载最多可被引用的具体信息，比首页更该优先验证。

**核心判准只有一句话：关掉 JavaScript，你的正文还在不在初始 HTML 里。** 在不在，决定了 Google 能不能稳定收录、AI 引擎能不能直接引用你的内容。

## 常见问题（FAQ）

**Q1：我的网站是 React SPA，一定要整个重写成 Next.js 才能解决吗？**
不一定。如果框架支持渐进式迁移（如 Next.js 可逐页采用 SSR/SSG，Vite + vite-plugin-ssr 也支持渐进导入），可以先从流量与被引用价值最高的页面（文章、产品页）开始转换，后台等不需 SEO 的页面维持 CSR 即可。

**Q2：Google 说会执行 JavaScript 渲染，是不是代表 CSR 对 Google 没差？**
对纯 Google 排名而言影响较小但仍有延迟风险——渲染队列可能拖慢新内容被发现的速度。但对 AI 引擎（ChatGPT、Perplexity、Claude）几乎是致命伤，因为它们的检索爬虫普遍不执行 JS。若你同时在意 GEO，CSR 不是可接受的长期状态。

**Q3：Dynamic Rendering 真的会被判定作弊吗？**
只要对爬虫和用户呈现的是"相同信息、不同渲染方式"（而非塞入额外关键词或隐藏内容），Google 官方说明不算 cloaking。但风险在于运维：两套逻辑容易日久失修、内容不同步，实务上仍建议视为过渡方案而非终点。

**Q4：怎么确认我的 SSR/SSG 设置真的生效了，而不是只有部分页面转换成功？**
用前述"查看源代码"加"curl 模拟爬虫"两个方法，抽查至少 10 个不同类型页面（首页、列表页、详情页、标签页），逐一确认正文都在初始 HTML 里，而不是只测了一两页就假设全站都没问题。

---

JavaScript 渲染只是技术地基之一，完整的 AI 爬虫放行与检索策略，可参考〈[AI 爬虫清单与管理](/zh-hans/blog/ai-crawler-management/)〉；若想系统性补齐 GEO 各面向，总整理见 [GEO 完整指南](/zh-hans/blog/geo-complete-guide/)，工具入口在 [/zh-hans/geo/](/zh-hans/geo/)。
