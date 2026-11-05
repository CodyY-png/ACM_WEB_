const links = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main > section");

// 顯示指定畫面
function showPage(id, moveFocus = false) {
  const pageExists = Array.from(sections).some(
    (section) => section.id === id
  );

  const currentId = pageExists ? id : "about";
  const currentSection = document.getElementById(currentId);

  // 隱藏其他畫面，清除上一次動畫
  sections.forEach((section) => {
    section.classList.remove("page-enter");
    section.hidden = section.id !== currentId;
  });

  // 重新播放進場動畫
  void currentSection.offsetWidth;
  currentSection.classList.add("page-enter");

  // 更新選單狀態
  links.forEach((link) => {
    if (link.hash === `#${currentId}`) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  // 更新瀏覽器分頁標題
  const heading = currentSection.querySelector("h1");
  document.title = `${heading.textContent}｜ACM 接案小組`;

  if (moveFocus) {
    heading.focus({ preventScroll: true });
  }
}

// 點選主要選單
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // 保留另開分頁等瀏覽器原生操作
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (location.hash !== link.hash) {
      history.pushState(null, "", link.hash);
    }

    showPage(link.hash.slice(1), true);
  });
});

// 配合網址顯示畫面，避免同一次切換重複播放動畫
let lastLocation = location.href;

function syncPage() {
  if (location.href === lastLocation) {
    return;
  }

  lastLocation = location.href;
  showPage(location.hash.slice(1));
}

window.addEventListener("popstate", syncPage);
window.addEventListener("hashchange", syncPage);

// 初次開啟或重新整理
showPage(location.hash.slice(1));