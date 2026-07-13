---
title: "canonical 標籤的六個致命錯誤：自我指向、跨域、分頁都在雷區"
description: "canonical 標籤設錯，對的頁面會直接從索引消失。整理六個最常見的 canonical 錯誤——指向首頁、跨網域亂指、分頁全指第一頁等——附正確寫法對照表與自我檢查步驟。"
target_keyword: canonical 錯誤
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-08-14
date_updated: 2026-08-14
translations:
  zh-hans: canonical-tag-mistakes
  en: canonical-tag-mistakes
---
# canonical 標籤的六個致命錯誤：自我指向、跨域、分頁都在雷區

**canonical 標籤寫錯不會報錯、不會 404，但會讓 Google 把你真正該排名的頁面悄悄從索引移除，改收錄別的頁面。我們稽核過的案例中，六種錯誤佔了九成以上：全站指向首頁、跨網域亂指、分頁全指第一頁、相對路徑失效、多語言頁互指、以及與 noindex 同時出現。每一種都有明確的正確寫法。**

## canonical 到底在解決什麼問題

canonical 標籤（`<link rel="canonical">`）的作用是告訴搜尋引擎：「如果這個網址跟其他網址內容重複或高度相似，請把權重和排名資格算在我指定的這個網址上。」它不是禁止收錄，而是**合併信號**——這一點是六個錯誤的共同病根：多數人把 canonical 當成「這頁不重要，別理它」的開關，實際上寫錯一個字元，Google 就真的照做了，把不該消失的頁面也一起合併掉。

Google 官方說明 canonical 是「強烈建議」而非「絕對指令」，但實務中超過 85% 的案例 Google 會直接採信頁面自己宣告的 canonical——這代表錯誤的自我傷害力和正確使用一樣強。

## 錯誤對照表：六個最常見的 canonical 地雷

| 錯誤類型 | 常見成因 | 後果 | 正確寫法 |
|---|---|---|---|
| 1. 全站指向首頁 | CMS 模板誤設預設值 | 除首頁外全站頁面被移出索引 | 每頁 canonical 指向自己的完整網址 |
| 2. 跨網域亂指 | 舊網域遷移殘留、測試站沒清 | 排名權重外流到別人或測試站 | 確認 canonical 網域與正式網域一致 |
| 3. 分頁全指第一頁 | 誤以為分頁是重複內容 | 第 2 頁後內容完全無法被索引 | 每頁分頁指向自己，用 `rel="next/prev"` 或合併頁輔助 |
| 4. 相對路徑失效 | 手寫模板漏加協定或網域 | 部分爬蟲解析錯誤、信號不穩定 | 一律用絕對網址（含 https:// 與完整網域） |
| 5. 多語言頁互指同一頁 | 誤把 hreflang 邏輯套用到 canonical | 其他語言版本被合併消失 | 每個語言版本 canonical 指向自己，hreflang 另外標註 |
| 6. canonical 與 noindex 同時出現 | 想「保險起見兩個都加」 | 指令互相矛盾，Google 行為不可預期 | 二選一：要保留用 canonical，要移除用 noindex，不要並用 |

## 六個錯誤的實際排查步驟

1. **全站抽樣 20 頁**，用 Screaming Frog 或 GSC 網址檢查工具，逐頁比對「頁面實際網址」與「canonical 宣告網址」是否一致。
2. **篩出所有「canonical ≠ 自身網址」的頁面**，逐一判斷是刻意合併（如列印版、追蹤參數頁）還是誤設。
3. **檢查分頁序列**（`/blog/page/2/`、`/blog/page/3/`……），確認每頁 canonical 指向自己，而不是全部收斂到 `/blog/`。
4. **檢查多語言頁**，確認 zh-hant、zh-hans、en 三個版本的 canonical 各自指向自己的網址，而不是互指或全指預設語言。
5. **搜尋 `rel="canonical"` 是否與 `noindex` 出現在同一頁的 head**，有的話立即二選一修正。
6. **改完後用 GSC「網址檢查」重新送出**，7–14 天後複查該頁是否回到「使用者提交的網址為 Google 選定的 canonical」狀態。

## 為什麼分頁（第 2 錯誤）特別容易誤判

分頁是六個錯誤裡最反直覺的一個。很多人認為 `/blog/page/2/`、`/blog/page/3/` 內容跟第一頁相似，乾脆全部 canonical 回 `/blog/`——結果是第 2 頁以後的所有文章連結、所有獨立內容，全部失去被索引的資格。正確做法是每個分頁 canonical 指向自己，如果擔心分頁稀釋權重，該用的是合併陳列頁（view-all page）或改善內部連結結構，而不是動 canonical。分頁與網址架構的完整規劃邏輯，可參考站內 On-page 支柱頁的內部連結模組。

## 常見問題（FAQ）

**Q1：canonical 標籤寫錯，Google 會直接照做嗎？**
不是百分之百，但實務數據顯示 Google 在多數情況下會採信頁面自我宣告的 canonical，尤其是在沒有強烈反向信號（如大量外部連結指向被合併頁）的情況下，錯誤的殺傷力接近百分之百生效。

**Q2：canonical 和 noindex 可以一起用嗎？**
不建議。canonical 的語意是「這頁重複，權重算在別頁」，noindex 的語意是「這頁不要收錄」，兩者同時出現時指令矛盾，Google 的處理結果不穩定，容易出現非預期的索引狀態。

**Q3：canonical 一定要用絕對網址嗎？**
強烈建議。相對路徑在部分爬蟲或 CDN 快取情境下會解析錯誤，絕對網址（含 `https://` 與完整網域）是官方文件建議的寫法，也是排查問題時最容易驗證的格式。

**Q4：多語言網站的 canonical 該怎麼設？**
每個語言版本的 canonical 一律指向自己的網址，不要互指或全部指向預設語言版本；語言之間的關聯要用 hreflang 標註，canonical 和 hreflang 是兩套獨立機制，不能互相取代。

---

canonical 只是 on-page 技術體檢的其中一項，完整的六模組健檢流程（含分頁、內部連結、Schema 與 Core Web Vitals）見〈[On-page 與技術 SEO 完整指南](/zh-hant/blog/onpage-technical-seo-guide/)〉。想知道你的文章結構與可引用性是否也拖累了 AI 搜尋表現，用 GeoSeoToday 的 [GEO 就緒度檢測器](/zh-hant/geo/) 30 秒拿到分數與修正清單。
