# ACM 接案小組網站

國立暨南國際大學資訊工程學系 ACM 接案小組的網站，介紹團隊、學習方向、學習資源與活動成果。

目前「關於我們」已加入團隊介紹；學習技能、學習資源、活動成果、成員及常見問題頁面已建立，內容待補充。

## 網站功能

- 滿版 ACM 海報，搭配程式符號飄動、淡綠光暈與滑鼠視差效果。
- 海報右上角提供 YouTube、Facebook、Instagram 連結。
- 點選選單切換下方內容，保留海報與導覽列。
- 內容切換時漸入，選單標示目前所在頁面。
- 社群連結與選單支援滑鼠移入變色及底線動畫。
- 透過網址片段記錄頁面，支援重新整理、上一頁與下一頁。
- 分頁名稱固定為「ACM小組」，搭配自訂 A 字圖示。
- 寬螢幕正文兩側顯示淡色漸層海報，空間不足時自動隱藏。
- 支援手機排版、鍵盤操作與系統的減少動畫設定。

## 頁面區塊

| 中文標題 | 英文標題 | 網址片段 |
| --- | --- | --- |
| 關於我們 | ABOUT US | `#about` |
| 學習技能 | OUR SKILLS | `#skills` |
| 學習資源 | RESOURCES | `#resources` |
| 活動成果 | ACTIVITIES | `#work` |
| 成員 | OUR TEAM | `#members` |
| 常見問題 | FAQ | `#faq` |

## 使用技術

- HTML：內容結構與可存取標記。
- CSS：版面、響應式設計、漸層與動畫。
- JavaScript：頁面切換、瀏覽紀錄與滑鼠視差。
- Git / GitHub：版本控制與協作。

使用原生 HTML、CSS、JavaScript，無須安裝套件或執行建置。

## 檔案結構

```text
personal_web/
├── ACM_web.html              # 網站入口與頁面內容
├── styles.css                # 網站樣式與動畫
├── web.js                    # 頁面切換與海報互動
├── README.md                 # 專案說明
└── 圖庫/
    ├── ACM_logo.png          # 頂部海報
    ├── acm-favicon.svg       # 瀏覽器分頁圖示
    └── acm-side-gradient.png # 正文兩側漸層海報
```

## 本機開啟

1. 下載專案，或執行：

   ```bash
   git clone https://github.com/CodyY-png/ACM_WEB_.git
   cd ACM_WEB_
   ```

2. 使用瀏覽器開啟 `ACM_web.html`，或使用 VS Code 的 Live Server 預覽。
3. 修改並儲存檔案後重新整理；若仍顯示舊樣式，可按 `Ctrl + F5`。

## 修改內容

- 頁面文字與社群網址：修改 `ACM_web.html`。
- 字體、顏色、排版、動畫速度及浮動幅度：修改 `styles.css`。
- 頁面切換與視差位移幅度：修改 `web.js`。
- 更換圖片：更新 `圖庫` 中的檔案，或修改 HTML、CSS 中對應的相對路徑。

新增頁面時，選單的 `href` 必須對應 `main` 內直接子層 `section` 的 `id`，並保留 `h1`，供切換程式設定焦點：

```html
<!-- 放在 .main-nav 裡 -->
<a href="#example">新頁面</a>

<!-- 放在 main 裡 -->
<section id="example" aria-labelledby="example-title" hidden>
  <p class="section-label">EXAMPLE</p>
  <h1 id="example-title" tabindex="-1">新頁面</h1>
</section>
```

## 動畫與裝置設定

- 程式符號與光暈會持續緩慢移動。
- 滑鼠視差僅在支援懸停的精細指標裝置上啟用，手機版不套用海報位移。
- 啟用系統「減少動畫」設定後，停用漸入、浮動、光暈與視差動畫。
- 正文側邊海報僅在視窗寬度至少 1440px 時顯示。

## 檢查方式

```bash
node --check web.js
git diff --check
```

第一個指令需要安裝 Node.js，僅用於檢查 JavaScript 語法，瀏覽網站不需要 Node.js。

手動確認選單切換、上一頁與下一頁、社群連結、手機排版，以及減少動畫設定下的呈現。

## 社群平台

- [YouTube](https://www.youtube.com/@ncnuACM)
- [Facebook](https://www.facebook.com/share/g/19hUCZwvEt/)
- [Instagram](https://www.instagram.com/acm.ncnu/)

## 後續規劃

- 補充網頁三件套、Git / GitHub、後端與資料庫的學習方向。
- 整理學習資源與教學文件。
- 加入活動成果、成員介紹及常見問題內容。
