const links = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main > section");

// 顯示指定畫面
function showPage(id, moveFocus = false) {
  const pageExists = Array.from(sections).some(
    (section) => section.id === id
  );

  const currentId = pageExists ? id : "about";
  const currentSection = document.getElementById(currentId);

  // 隱藏其他畫面，清除先前動畫
  sections.forEach((section) => {
    section.classList.remove("page-enter");
    section.hidden = section.id !== currentId;
  });

  // 重新觸發漸入動畫
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

  const heading = currentSection.querySelector("h1");
  document.title = "ACM小組";

  if (moveFocus) {
    heading.focus({ preventScroll: true });
  }
}

// 點選主要選單
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // 保留另開分頁等原生操作
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

    lastLocation = location.href;
    showPage(link.hash.slice(1), true);
  });
});

// 同步瀏覽器上一頁、下一頁與網址變化
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
