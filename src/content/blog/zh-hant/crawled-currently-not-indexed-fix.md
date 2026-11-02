---
title: "「已檢索，目前尚未建立索引」怎麼辦：未收錄頁面的診斷決策樹"
description: "Search Console 顯示「已檢索，目前尚未建立索引」不等於被懲罰。本文依 Google 官方說明拆解兩種狀態的差異，給出等待、合併、補強、noindex 四選一的決策樹與五訊號品質分診表。"
target_keyword: 已檢索 目前尚未建立索引
intent: informational
cluster: On-page & 技術 SEO（群集 3）
author: GeoSeoToday
date_published: 2026-11-13
date_updated: 2026-11-13
enhanced: true
translations:
  zh-hans: crawled-currently-not-indexed-fix
  en: crawled-currently-not-indexed-fix
---
# 「已檢索，目前尚未建立索引」怎麼辦：未收錄頁面的診斷決策樹

**「已檢索，目前尚未建立索引」代表 Google 讀過這個頁面、但目前選擇不收錄；它不是手動處分，也不必重複送出網址。** 正確做法是先分辨頁面屬於「還要等」、「該合併」、「值得補強」還是「根本不該收錄」，再各自處理，而不是盲目點擊「要求建立索引」。

## 先分清楚兩個長得很像的狀態

[Google 的網頁索引報表說明](https://support.google.com/webmasters/answer/7440203)對兩者的定義不同，處理方式也完全不同：

| 狀態 | Google 的說法（摘要） | 較可能的原因 | 第一步 |
|---|---|---|---|
| **Crawled - currently not indexed**（已檢索，目前尚未建立索引） | 已被 Google 檢索但未編入索引，未來可能收錄也可能不收錄，無需重新送出網址 | 內容與既有頁面重疊、價值不足，或站內訊號太弱（這是依官方定義做的推論，Google 並未逐頁說明原因） | 進入本文的決策樹 |
| **Discovered - currently not indexed**（已找到，目前尚未建立索引） | Google 已知道這個網址、但還沒檢索；通常是為了避免站台負載過高而延後 | 爬取排程、網站規模、內部連結太少 | 先確認有放進 sitemap 與內部連結，再等待 |

Google 同一份文件提到，網址被發現之後，可能要「數週」才會被檢索；新內容通常幾天到一週左右開始被處理；驗證修正則「通常最多約兩週，有時更久」。這些是官方給的時間尺度，不是保證。

## 第一手觀察：我們自己的網站也在處理同一件事

撰寫本文時（2026 年 11 月初），GeoSeoToday 自己的 Search Console 顯示：**42 頁「已檢索，目前尚未建立索引」、108 頁「已找到，目前尚未建立索引」、341 頁已編入索引**。也就是說，這兩種未收錄狀態加起來有 150 頁，並不是小數目。我們正依下面的決策樹逐頁處理，處理成效要等 Google 重新檢索後才看得出來，本文不會預先宣稱結果。

## 診斷決策樹：等待、合併、補強、noindex

依序回答下列問題，遇到第一個「是」就停下：

1. **這頁本來就不該出現在搜尋結果嗎？**（篩選頁、站內搜尋結果、標籤彙整、感謝頁）→ 加 `noindex` 或直接移除，這類頁面的未收錄是正確狀態。
2. **頁面剛發布或剛改版，且狀態是 Discovered？** → 等待。依官方時間尺度，先給它約 2–4 週（這個等待上限是本站的經驗規則，不是 Google 規定），期間確認已在 sitemap 並有內部連結。
3. **站內已有一頁在回答同一個搜尋意圖？** → 合併：把兩頁最好的內容併成一頁，舊網址 301 到保留頁。
4. **主題獨立，但五訊號（見下表）有兩項以上不及格？** → 補強：加入第一手資料、實例、表格，並補上內部連結，之後再以網址檢查工具要求重新檢索。
5. **以上都不是，且頁面對讀者沒有額外價值？** → 刪除，或 noindex 後保留給站內導覽使用。

| 處置 | 觸發條件 | 動作 | 何時回頭檢查 |
|---|---|---|---|
| 等待 | Discovered、頁齡不到約 4 週 | 確認 sitemap 與內部連結 | 2–4 週後 |
| 合併 | 與既有頁面意圖重疊 | 併入較強的頁面並 301 | 重新檢索後 2 週內 |
| 補強 | 主題獨立但內容單薄 | 加入原創資料、實例、內部連結 | 補完後 4 週 |
| noindex／刪除 | 不該被收錄或無讀者價值 | 加 `noindex` 或移除 | 下一季稽核 |

## 五訊號品質分診表

下表是我們的分診經驗法則，用來判斷「補強」值不值得做；Google 並沒有公布這五項的門檻。

| 訊號 | 檢查方式 | 不及格時 |
|---|---|---|
| 獨特意圖 | 搜尋目標關鍵字，看自己是否只是前十名的改寫版 | 合併或改寫角度 |
| 第一手資訊 | 頁面是否含只有你能提供的數據、測試或案例 | 補真實材料 |
| 內容深度 | 是否回答了子問題，而不只是定義與條列 | 擴寫或合併 |
| 站內連結 | 有幾個相關頁面連到它、距離首頁幾層 | 補內部連結，見〈[內部連結策略](/zh-hant/blog/internal-linking-strategy/)〉 |
| 技術一致性 | canonical、重複網址、sitemap 是否互相矛盾 | 見〈[canonical 標籤常見錯誤](/zh-hant/blog/canonical-tag-mistakes/)〉 |

## 為什麼「大量灌頁」是最該避開的方向

Google 的[生成式 AI 內容指引](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)指出，不加入價值、大量產生頁面，可能違反其垃圾內容政策。[垃圾內容政策](https://developers.google.com/search/docs/essentials/spam-policies)把「規模化內容濫用」定義為：為了操縱排名、而非幫助使用者，而大量產生頁面，並明確舉出用生成式 AI 大量產頁、拼湊他人內容等例子。這不代表你的未收錄頁面就是違規，但如果未收錄頁有一大半長得像同一個模板，補強之前請先反問自己：這一頁讀者為什麼要看。

## 限制與取捨

- Google 不會告訴你單一頁面為何不收錄，決策樹是依官方定義與經驗做的診斷，不是保證。
- 收錄不等於排名；補強後被收錄，仍可能排在很後面。
- 有些頁面即使處理得當也會長期維持未收錄，這時合併或 noindex 往往比硬撐更划算。
- 大量 noindex 並不會回收站內連結權重，也解決不了品質問題。

## 參考資料

- [Page indexing report — Search Console Help](https://support.google.com/webmasters/answer/7440203)
- [Google Search's guidance on using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Spam policies for Google web search（scaled content abuse）](https://developers.google.com/search/docs/essentials/spam-policies)

## 常見問題（FAQ）

**Q1：「已檢索，目前尚未建立索引」要多久才會自己收錄？**
Google 沒有給單一天數。官方只說新內容通常幾天到一週開始處理、網址被發現後可能要數週才被檢索，驗證修正約兩週。超過 4 週仍不動，就不該再被動等待。

**Q2：一直按「要求建立索引」有用嗎？**
Google 對 Crawled 狀態的說明是無需重新送出網址。送出只能要求重新檢索，不會改變 Google 對內容價值的判斷；真正有用的是先改內容或合併。

**Q3：「已檢索」和「已找到」哪個比較嚴重？**
兩者問題不同。前者是 Google 看過但沒收錄，多半要動內容；後者是 Google 還沒去看，多半是爬取排程與內部連結問題。前者通常更需要逐頁處理。

**Q4：合併頁面後舊網址怎麼處理？**
把被合併的舊網址做 301 重新導向到保留頁，並更新 sitemap 與站內連結，避免留下指向舊網址的內部連結。完整流程見〈[稀薄內容修剪](/zh-hant/blog/thin-content-pruning/)〉。

---

GeoSeoToday 的方法是先用 [GSC 三個報表揪出內容負債](/zh-hant/blog/gsc-content-debt/)，再用本文的決策樹逐頁處置；盤點完要留下的頁面，可以到 [GEO 就緒度檢測器](/zh-hant/geo/) 檢查是否夠格被 AI 引用，並參考〈[0 點擊頁面該合併、刪除還是補料？](/zh-hant/blog/zero-click-pages/)〉。
