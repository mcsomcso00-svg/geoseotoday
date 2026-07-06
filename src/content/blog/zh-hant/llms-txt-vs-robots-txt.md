---
title: llms.txt 與 robots.txt 分工：一張表看懂各自管什麼
description: robots.txt 管「能不能爬」，llms.txt 管「該讀哪些重點」——兩者管的是不同層，不是替代關係。本文用一張分工對照表、一個「誰負責什麼」情境矩陣，與正確的設定順序，教你何時該動哪一個檔，避免用 llms.txt 去修根本是 robots.txt 的問題。
target_keyword: llms.txt robots.txt
intent: informational
cluster: AIO / AI 搜尋優化（群集 6）
author: GeoSeoToday
date_published: 2026-08-05
date_updated: 2026-08-05
translations:
  zh-hans: llms-txt-vs-robots-txt
  en: llms-txt-vs-robots-txt
---
# llms.txt 與 robots.txt 分工：一張表看懂各自管什麼

**robots.txt 管「爬蟲能不能存取你的頁面」，llms.txt 管「AI 讀你的網站時該優先看哪些重點」——兩者管的是完全不同的層，是互補而非替代。** 一句話記法：robots.txt 是門禁（准不准進），llms.txt 是導覽圖（進來後先看哪裡）。搞混這條分工，最常見的下場就是花力氣寫了漂亮的 llms.txt，卻沒發現真正的問題是 robots.txt 早就把 AI 爬蟲擋在門外——導覽圖再精美，門沒開也沒人讀得到。

## 一句話定位：門禁 vs. 導覽圖

先把兩個檔各自的職責釘死，後面所有取捨都從這裡推導：

- **robots.txt** 是 1994 年就存在的爬蟲協定，放在根目錄，用 `User-agent` 加 `Allow`／`Disallow` 規範「哪隻爬蟲能不能存取哪些路徑」。它管的是**存取權限**，主流合規爬蟲（含 GPTBot、OAI-SearchBot、PerplexityBot、Google-Extended、ClaudeBot）會遵守。
- **llms.txt** 是 2024 年由 Jeremy Howard／Answer.AI 提出的社群提案，同樣放根目錄，但用 Markdown 列出「這個網站最重要的頁面與說明」，目的是讓大型語言模型**更快抓到重點**。它管的是**理解與取材引導**，且截至 2026 年**尚未被任何主流引擎正式採用**。

關鍵差異一句話：**robots.txt 決定「讀不讀得到」，llms.txt 建議「先讀哪些」。** 前者是硬性的存取閘門，後者是軟性的閱讀建議。

## 分工對照表：六個維度一次看懂

把兩個檔放在同一張表上比，差異就一目了然。（順帶把常被一起討論的 sitemap.xml 也放進來，避免三者混淆。）

| 維度 | robots.txt | llms.txt | sitemap.xml |
|---|---|---|---|
| **管什麼** | 能不能爬（存取權限） | 該優先讀哪些重點（取材引導） | 有哪些網址（索引清單） |
| **給誰看** | 所有爬蟲 | 大型語言模型（LLM） | 搜尋引擎 |
| **格式** | 純文字指令（User-agent／Allow／Disallow） | Markdown（標題、清單、連結） | XML |
| **是否強制** | 約定，合規爬蟲會遵守 | 純建議，且尚未被主流引擎採用 | 建議，引擎參考但不保證 |
| **採用現況（2026）** | 全面通用、事實標準 | 提案階段，主流引擎未正式讀取 | 全面通用、事實標準 |
| **設錯的代價** | 極高：一行 Disallow 就能讓整站對 AI 隱形 | 極低：頂多是沒效果，不會有壞處 | 中：漏網址影響索引，但爬蟲仍能自行發現 |

這張表帶出一個最重要的實務結論：**robots.txt 是「不能設錯」的檔，llms.txt 是「設了加分、不設也不扣分」的檔。** 兩者的風險量級差好幾個數量級，投入的謹慎程度也該不同。

## 「誰負責什麼」情境矩陣：這個問題該動哪個檔？

實務上大家的困惑幾乎都是「我這個狀況該改哪個檔」。用下表直接對號入座：

| 你想做的事 | 該動的檔 | 怎麼做 |
|---|---|---|
| 讓 ChatGPT 搜尋／Perplexity 讀得到我 | **robots.txt** | 放行 OAI-SearchBot、PerplexityBot（`Allow: /`） |
| 不想內容被拿去訓練模型 | **robots.txt** | 封鎖訓練型爬蟲 GPTBot、ClaudeBot（`Disallow: /`） |
| 擋掉某個 AI 爬蟲、保留一般 Google 排名 | **robots.txt** | 只 Disallow Google-Extended，不動 Googlebot |
| 告訴 LLM「我站上最重要的三篇是哪三篇」 | **llms.txt** | 在 llms.txt 用 Markdown 列出核心頁加一句說明 |
| 幫 LLM 省下解析導覽列／廣告的成本 | **llms.txt** | 提供精煉的 Markdown 網站導覽 |
| 「我加了 llms.txt 但 AI 還是引用不到我」 | **先查 robots.txt** | 九成是爬蟲被擋或內容需 JS 才渲染，不是 llms.txt 的問題 |

最後一列是本文最想強調的反模式：**當 AI 引用不到你，第一個要檢查的永遠是 robots.txt 與爬蟲可達性，而不是急著寫 llms.txt。** llms.txt 解決的是「讀得到之後、讀得夠不夠精準」，它無法解決「根本讀不到」。順序錯了，力氣全白費。

## 正確的設定順序：先開門，再畫導覽圖，最後才進階

把兩個檔擺對先後，才不會本末倒置：

1. **先修 robots.txt（地基，必做）**：確認沒有殘留的 `User-agent: * Disallow: /` 或把 AI 爬蟲全擋的舊設定。想被引用，至少放行檢索型爬蟲（OAI-SearchBot、PerplexityBot、Bingbot）與 Google-Extended。
2. **驗證爬蟲真的讀得到（必做）**：開 `你的網域/robots.txt` 肉眼確認規則；查 access log 確認上述 user-agent 回應是 200 而非 403／404；確認重要內容不需 JavaScript 才渲染得出來。
3. **確保內容本身可被引用（必做）**：答案優先段、清單、表格、明確作者實體——這才是真正決定被不被引用的主因。
4. **最後才加 llms.txt（加分，選做）**：地基都穩了，再花十分鐘寫一份精煉的 llms.txt，當作前瞻性佈局。它不會現在就見效，但成本近乎零、未來有引擎採用時你已就緒。

一句話總結順序：**robots.txt 與爬蟲可達性是必做地基，llms.txt 是做完地基後的免費加分項。** 別把加分項當地基修。

## 一個誠實的邊界：llms.txt 目前不是「見效手段」

要說清楚避免誤導：**截至 2026 年，OpenAI、Google、Perplexity 等主流引擎尚未公開宣布正式讀取 llms.txt，所以加它現在不會直接提升你的 AI 可見度。** 它的價值是「成本極低的前瞻佈局」，不是「補上就會被引用」的開關。相對地，robots.txt 設對與否，是此刻就在影響你能不能被 AI 讀到的硬變數。所以資源有限時，順序永遠是：先把 robots.txt 與爬蟲可達性做對（高槓桿、立即生效），再把 llms.txt 當作有餘力時的加分（低槓桿、未來生效）。把兩者的權重擺對，才不會在錯的檔上過度投資。

## 常見問題（FAQ）

**Q1：只加 llms.txt、不管 robots.txt 可以嗎？**
不行，而且順序反了。robots.txt 決定爬蟲讀不讀得到你，是硬性閘門；llms.txt 只是讀得到之後的閱讀建議。若 robots.txt 把 AI 爬蟲擋著，llms.txt 寫得再好也沒人讀。永遠先確認 robots.txt 放行，再談 llms.txt。

**Q2：robots.txt 和 llms.txt 會不會互相衝突？**
不會，兩者管不同層、互不覆蓋。robots.txt 管「能不能爬這個路徑」，llms.txt 管「讀我的網站時該優先看哪些重點」。合理的組合是：robots.txt 放行檢索型爬蟲，llms.txt 引導它們看重點——分工互補，不打架。

**Q3：加了 llms.txt，AI 現在就會引用我嗎？**
不會直接因此被引用。截至 2026 年它尚未被主流引擎正式採用，真正決定引用的是內容可不可引用與爬蟲讀不讀得到。把它當免費的前瞻佈局，別當見效的主力。

**Q4：那到底哪個比較重要、該先花時間在哪個？**
robots.txt 明顯優先。它設錯的代價極高（一行 Disallow 讓整站對 AI 隱形），且立即生效；llms.txt 設了頂多加分、不設也不扣分，且尚未被採用。資源有限時，先把 robots.txt 與爬蟲可達性做對，再有餘力才加 llms.txt。

---

分工搞清楚後，真正的地基仍是「爬蟲讀得到」加「內容可被引用」。GeoSeoToday 把這些檢測整理成一站——總整理見 [AIO 完整指南](/zh-hant/blog/aio-complete-guide/)，工具入口見 [/zh-hant/aio/](/zh-hant/aio/)。延伸閱讀：想深入 robots.txt 對各 AI 爬蟲的放行／封鎖，看〈[AI 爬蟲清單與管理](/zh-hant/blog/ai-crawler-management/)〉；想把 llms.txt 一次寫對並附範例，看〈[llms.txt 是什麼？要不要幫網站加](/zh-hant/blog/what-is-llms-txt/)〉。
