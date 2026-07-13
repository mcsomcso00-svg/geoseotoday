---
title: "JavaScript SEO：SPA 內容爬不到、AI 讀不到怎麼修"
description: 用 React、Vue 打造的 SPA 常遇到 Google 收錄延遲、AI 引擎完全讀不到正文的問題。本文比較 CSR、SSR、SSG、Dynamic Rendering 四種渲染策略的優劣，並給出一個三分鐘驗證你的頁面是否「爬蟲可讀」的檢查清單。
target_keyword: javascript seo
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-27
date_updated: 2026-08-27
translations:
  zh-hans: javascript-seo-rendering
  en: javascript-seo-rendering
---
# JavaScript SEO：SPA 內容爬不到、AI 讀不到怎麼修

**多數 AI 爬蟲（GPTBot、PerplexityBot、ClaudeBot）不執行 JavaScript，只讀初始 HTML；你的 React／Vue 頁面若靠 client-side render 才生出正文，等於對 AI 引擎交白卷。** 解法是把渲染責任從瀏覽器搬回伺服器——用 SSR 或建置時 SSG 預渲染，確保「檢視原始碼」就能看到完整文字，這是動態網站能被搜尋與 AI 收錄的分水嶺。

## 為什麼 CSR 網站對 AI 引擎特別吃虧

傳統 Googlebot 這幾年已具備二階段渲染能力（先抓 HTML，排入佇列後再執行 JS），但這個渲染佇列可能延遲數天到數週，且不保證所有頁面都排到。AI 爬蟲的處境更差：GPTBot、OAI-SearchBot、PerplexityBot、ClaudeBot 目前公開資訊顯示皆**不執行 JavaScript**，它們讀到的就是伺服器回應的第一份 HTML。如果那份 HTML 裡只有 `<div id="root"></div>` 加一堆 `<script>` 標籤，AI 引擎看到的正文字數是零——不是排名差，是完全沒有被索引與引用的機會。

## 四種渲染策略比較

| 策略 | 初始 HTML 含正文 | Google 收錄 | AI 爬蟲可讀 | 開發複雜度 | 適用場景 |
|---|---|---|---|---|---|
| **CSR**（純客戶端渲染） | 否 | 延遲、不保證 | 幾乎不可讀 | 低 | 後台、儀表板等不需 SEO 的頁面 |
| **SSR**（伺服器端渲染，如 Next.js / Nuxt） | 是 | 即時 | 可讀 | 中高 | 內容常變動的部落格、電商商品頁 |
| **SSG**（建置時預渲染，如 Astro / Gatsby） | 是 | 即時 | 可讀 | 中 | 內容變動不頻繁的行銷頁、文章頁（本站採此法） |
| **Dynamic Rendering**（依 user-agent 分流） | 是（僅對爬蟲） | 即時 | 可讀 | 高，且維運成本持續 | 舊有大型 SPA 短期補救，非長期解 |

Google 官方已在 2023 年將 Dynamic Rendering 列為「過渡方案」而非建議做法，因為要維護兩套渲染邏輯、且有被判定 cloaking（對人和對爬蟲給不同內容）的風險。長期解法應該是 SSR 或 SSG，讓所有人（含 AI 爬蟲）拿到同一份完整 HTML。

## 三分鐘自我檢查清單

1. **右鍵「檢視網頁原始碼」（非開發者工具的 Elements 面板）**——這才是爬蟲真正看到的內容。若標題、內文在原始碼裡找不到，就是純 CSR。
2. **用 `curl -A "GPTBot" https://你的網址 | less` 直接看伺服器回應**——不透過瀏覽器渲染，這最接近 AI 爬蟲的視角。
3. **Google Search Console 的「網址檢查」工具**——比對「已抓取的網頁」畫面與「檢視已抓取網頁」的 HTML，兩者若正文不一致，代表渲染有延遲或缺漏。
4. **檢查 Time to First Byte 之後的 HTML 大小**——若初始回應小於 5KB 卻是一篇千字文章的頁面，八成正文要等 JS 執行才會出現。
5. **抽查 3–5 個核心頁面用無痕視窗關閉 JavaScript 開啟**——若正文完全消失，代表對不執行 JS 的爬蟲也一樣消失。

## 修復優先順序

- **內容型網站（部落格、知識庫）**：優先遷移到 SSG（如 Astro、Next.js 的 Static Export、Gatsby）。內容變動頻率低，建置時全部轉成靜態 HTML，AI 爬蟲讀取零延遲，也不必維護伺服器渲染基礎設施。
- **電商、常變動內容**：SSR（Next.js App Router、Nuxt 3）較適合，商品庫存、價格能即時反映，同時仍在首次回應就吐出完整 HTML。
- **既有大型 SPA 短期內無法重構**：可用 SSR 框架的「部分預渲染」或 Prerender.io 之類服務作為過渡，但這是技術債，應排入遷移路線圖，而非長期方案。
- **無論哪種修法，優先處理清單頁與文章詳情頁**——這兩類頁面承載最多可被引用的具體資訊，比首頁更該優先驗證。

**核心判準只有一句話：關掉 JavaScript，你的正文還在不在初始 HTML 裡。** 在不在，決定了 Google 能不能穩定收錄、AI 引擎能不能直接引用你的內容。

## 常見問題（FAQ）

**Q1：我的網站是 React SPA，一定要整個重寫成 Next.js 才能解決嗎？**
不一定。如果框架支援漸進式遷移（如 Next.js 可逐頁採用 SSR/SSG，Vite + vite-plugin-ssr 也支援漸進導入），可以先從流量與被引用價值最高的頁面（文章、產品頁）開始轉換，後台等不需 SEO 的頁面維持 CSR 即可。

**Q2：Google 說會執行 JavaScript 渲染，是不是代表 CSR 對 Google 沒差？**
對純 Google 排名而言影響較小但仍有延遲風險——渲染佇列可能拖慢新內容被發現的速度。但對 AI 引擎（ChatGPT、Perplexity、Claude）幾乎是致命傷，因為它們的檢索爬蟲普遍不執行 JS。若你同時在意 GEO，CSR 不是可接受的長期狀態。

**Q3：Dynamic Rendering 真的會被判定作弊嗎？**
只要對爬蟲和使用者呈現的是「相同資訊、不同渲染方式」（而非塞入額外關鍵字或隱藏內容），Google 官方說明不算 cloaking。但風險在於維運：兩套邏輯容易日久失修、內容不同步，實務上仍建議視為過渡方案而非終點。

**Q4：怎麼確認我的 SSR/SSG 設定真的生效了，而不是只有部分頁面轉換成功？**
用前述「檢視原始碼」加「curl 模擬爬蟲」兩個方法，抽查至少 10 個不同類型頁面（首頁、列表頁、詳情頁、標籤頁），逐一確認正文都在初始 HTML 裡，而不是只測了一兩頁就假設全站都沒問題。

---

JavaScript 渲染只是技術地基之一，完整的 AI 爬蟲放行與檢索策略，可參考〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉；若想系統性補齊 GEO 各面向，總整理見 [GEO 完整指南](/zh-hant/blog/geo-complete-guide/)，工具入口在 [/zh-hant/geo/](/zh-hant/geo/)。
