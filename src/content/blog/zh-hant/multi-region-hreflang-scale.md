---
title: 多地區同語言的 hreflang：en-US、en-GB、en-AU 怎麼分不打架
description: 同語言、多地區是自我蠶食最大的溫床。本文用 en-US／en-GB／en-AU 的實例，教你 language-region 標註、x-default 兜底，以及「內容沒差異就會被 Google 合併」的判斷門檻與程式碼。
target_keyword: 多地區 hreflang
intent: informational
cluster: 多語言 / 國際 SEO（群集 5）
author: GeoSeoToday
date_published: 2026-08-08
date_updated: 2026-08-08
translations:
  zh-hans: multi-region-hreflang-scale
  en: multi-region-hreflang-scale
---
# 多地區同語言的 hreflang：en-US、en-GB、en-AU 怎麼分不打架

**同一種語言、多個地區（en-US、en-GB、en-AU）是 hreflang 最容易自我蠶食的情境：因為三頁對 Google 幾乎是同一份英文內容，一旦標註不完整或內容毫無在地差異，演算法會把它們合併成一頁，再自行挑一個地區版本端給所有人。** 正解是用「語言-地區」組合碼加 `en`（純語言）與 `x-default` 兩層兜底，並確保每個地區版真的有在地差異，否則標了也會被 Google 忽略。

## 為什麼「同語言多地區」比「多語言」更難？

多語言（英/中/日）出錯，Google 還能靠語言偵測分辨；但 en-US 對 en-GB，文字系統相同、九成內容雷同，語言偵測完全幫不上忙——分流的責任 100% 落在 hreflang 上。這帶來兩個獨有的坑：

1. **內容太像被合併**：三個地區版若只有貨幣符號或一兩個拼字不同，Google 常判定為重複內容，只收錄其中一頁，另兩頁的排名與流量歸零。
2. **標錯地區碼直接失效**：`en-UK`（正確是 `en-GB`）、把地區碼 `us` 單獨當語言用，都會讓該筆標註作廢，形同沒標。

換句話說，同語言多地區要同時打贏「標註正確」和「內容夠不同」兩場仗，只贏一場都不夠。

## 正確的 language-region 標註（含程式碼）

規則：地區碼用 **ISO 3166-1 alpha-2 大寫**，接在語言碼後面用連字號；每頁都要列全部地區版＋自我參照，再加一行 `en` 純語言與一行 `x-default`。以一個賣給美、英、澳三地的英文定價頁為例：

```html
<link rel="alternate" hreflang="en-US" href="https://example.com/us/pricing/" />
<link rel="alternate" hreflang="en-GB" href="https://example.com/uk/pricing/" />
<link rel="alternate" hreflang="en-AU" href="https://example.com/au/pricing/" />
<link rel="alternate" hreflang="en" href="https://example.com/us/pricing/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/us/pricing/" />
```

這五行要**一字不差地同時出現在 /us/、/uk/、/au/ 三個頁面上**。幾個關鍵：

- 多留一行純 `en`：當使用者的瀏覽器語言是英文、但地區不是美英澳（例如印度、新加坡）時，Google 會落到這行指定的版本，而不是隨機亂挑。
- `x-default` 是最後兜底，通常指向你的主市場或全球通用版。`en` 與 `x-default` 可以指向同一個 URL，也可以分開。
- 地區碼**只用在真的有地區差異的內容**。若你只有一份全球英文，根本不該拆 en-US／en-GB，直接用單一 `en` 就好——硬拆只會製造蠶食。

## 三種標法怎麼選？決策表

| 你的實際情況 | 該用的標法 | 理由 |
|---|---|---|
| 只有一份全球英文，無在地差異 | 單一 `en` + `x-default` | 拆地區碼但內容相同，會被 Google 合併，白做工 |
| 各地區有在地差異（幣別、稅務、法規、當地案例） | `en-US` / `en-GB` / `en-AU` + `en` + `x-default` | 內容夠不同才撐得起多地區分流 |
| 語言相同但只想分英美兩地 | `en-US` / `en-GB` + `en` + `x-default` | 純語言那行接住其餘英語地區，避免漏接 |

一句話原則：**先問「內容夠不同嗎」，再決定要不要拆地區碼。** 標註是果，在地差異是因，順序不能反。

## 每個地區版至少要有的在地差異

Google 明確表示：地區變體若內容實質相同，會被視為重複並合併。要讓 en-US／en-GB／en-AU 站得住，每版至少落實其中三項：

1. **貨幣與價格**：$ / £ / A$，且是真實在地定價而非匯率換算字串。
2. **拼字與用詞**：color/colour、optimization/optimisation、shipping/delivery，全頁一致而非只改標題。
3. **在地法規與稅務**：GDPR（英）對 CCPA（美）、含稅或未稅標示、當地退貨政策。
4. **在地案例與聯絡資訊**：當地客戶案例、當地電話與地址、當地貨運選項。
5. **日期與度量**：MM/DD/YYYY 對 DD/MM/YYYY、英里對公里。

只做到「換個貨幣符號」是最常見的失敗——三項以上實質差異，才是 Google 願意分別收錄的門檻。

## 怎麼驗證有沒有生效？

1. **GSC 國家×頁面交叉分析**：以「網頁」篩選 /us/、/uk/、/au/，看各自的曝光是否落在對的國家。若 /uk/ 的曝光大量來自美國，代表分流失效或內容被合併。
2. **抽查原始碼雙向一致**：隨機抽 5 頁，逐行核對五行標註在三個地區版上完全一致、且互相回連。
3. **重複內容自檢**：把兩個地區版並排，若你自己都說不出三處以上差異，Google 也會把它們當同一頁。

## 常見問題（FAQ）

**Q1：只賣英美兩地，需要 en-US 和 en-GB 分開嗎？**
看內容。若英美價格、稅務、案例真的不同，就分並各自 canonical；若只是同一份英文，用單一 `en` 反而更穩，硬拆會製造蠶食。

**Q2：英國到底是 en-GB 還是 en-UK？**
`en-GB`。UK 不是 ISO 3166-1 的地區碼，`en-UK` 會被 Google 判為無效標註而整筆忽略——這是同語言多地區最常見的低級錯誤。

**Q3：一定要多加那行純 `en` 嗎？**
強烈建議。少了它，來自新加坡、印度、南非等「講英文但不在你清單裡」的地區，Google 只能亂挑一個版本端出；補上 `en` 就有明確落點，也順帶接住 `x-default` 沒涵蓋的情境。

**Q4：三個地區版內容幾乎一樣，硬標 hreflang 有用嗎？**
沒用還可能有害。內容實質相同時 Google 會合併，多地區標註被忽略；此時要嘛做出真在地差異，要嘛收斂成單一 `en`，不要停在「標了但沒差異」的中間狀態。

**Q5：x-default 該指到哪個地區？**
指向你的主市場或最通用的版本（多半是 en-US 或一個不綁地區的全球頁）。x-default 接住的是「所有語言地區條件都不符」的使用者，指向最不會出錯的版本即可。

---

同語言多地區的五行標註手寫極易漏地區或寫錯碼，GeoSeoToday的 [hreflang 產生器與 GEO 檢測工具](/zh-hant/geo/) 會自動帶入全地區清單、純語言列與 x-default，杜絕 `en-UK` 這類低級錯誤。想先打好 hreflang 基礎，請看〈[hreflang 是什麼？多語言站必備教學](/zh-hant/blog/what-is-hreflang/)〉；x-default 該指哪裡的完整判斷見〈[x-default 要指到哪個語言？](/zh-hant/blog/x-default-guide/)〉；整體架構則見支柱頁〈[多語言 / 國際 SEO 完整指南](/zh-hant/blog/multilingual-seo-guide/)〉。
