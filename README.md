# ACM 接案小組網站

ACM 接案小組的網站，展示團隊介紹、學習方向、教學資源與活動成果。

目前已完成網站版面、導覽切換與社群連結，各內容頁暫時保留標題，後續逐步補充。

## 網站功能

- 滿版 ACM 海報
- YouTube、Facebook、Instagram 社群連結
- 點選導覽列切換內容，保留上方海報與選單
- 內容切換時播放漸入動畫
- 選單與社群連結的滑鼠移入變色效果
- 支援手機版排版
- 支援瀏覽器上一頁、下一頁及重新整理後保留目前頁面
- 配合使用者的減少動畫設定

## 頁面區塊

| 英文標題 | 中文標題 |
| --- | --- |
| ABOUT US | 關於我們 |
| OUR SKILLS | 學習技能 |
| TUTORIALS | 教學講義 |
| RESOURCES | 學習資源 |
| ACTIVITIES | 活動成果 |
| OUR TEAM | 成員 |

## 使用技術

- HTML：網頁結構與內容
- CSS：版面、配色、響應式設計與動畫
- JavaScript：畫面切換、網址狀態與導覽選取狀態
- Git / GitHub：版本控制與團隊協作

本專案使用原生 HTML、CSS 與 JavaScript，無須安裝套件或執行建置。

## 檔案結構

```text
personal_web/
├── ACM_web.html       # 網站主頁
├── styles.css         # 樣式與動畫
├── web.js             # 畫面切換邏輯
├── README.md          # 專案說明
└── 圖庫/
    └── ACM_logo.png   # 網站海報
```

## 本機開啟方式

1. 下載專案，或使用 Git 複製：

   ```bash
   git clone https://github.com/CodyY-png/ACM_WEB_.git
   ```

2. 使用瀏覽器開啟 `ACM_web.html`。

也可以使用 VS Code 的 Live Server 開啟網站。

## 修改方式

- 修改頁面內容：編輯 `ACM_web.html` 中對應的 `<section>`。
- 修改外觀與動畫：編輯 `styles.css`。
- 修改切換功能：編輯 `web.js`。
- 更換海報：替換 `圖庫/ACM_logo.png`，或更新 HTML 中的圖片路徑。

新增頁面時，導覽連結的 `href` 必須對應內容區塊的 `id`，例如：

```html
<a href="#skills">學習技能</a>

<section id="skills" hidden>
  <p class="section-label">OUR SKILLS</p>
  <h1 tabindex="-1">學習技能</h1>
</section>
```

## 社群平台

- [YouTube](https://www.youtube.com/@ncnuACM)
- [Facebook](https://www.facebook.com/share/g/19hUCZwvEt/)
- [Instagram](https://www.instagram.com/acm.ncnu/)

## 後續規劃

- 補充團隊介紹與成員資料
- 整理 HTML、CSS、JavaScript 學習內容
- 加入 Git、GitHub、後端與資料庫相關資源
- 新增教學講義與活動成果# ACM_WEB_
ACM 接案小組網站
