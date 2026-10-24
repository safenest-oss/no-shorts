// No Shorts - content script
// 1) Redirects /shorts/ID to the regular player (/watch?v=ID)
// 2) Hides Shorts UI. CSS (content.css) does most of the work; this script is a
//    fallback that finds Shorts by link and by visible text, so it keeps working
//    when YouTube renames its elements.

// ---------- 1. Redirect ----------

function redirectShorts() {
  const match = location.pathname.match(/^\/shorts\/([\w-]+)/);
  if (match) {
    location.replace("/watch?v=" + match[1]);
  }
}

redirectShorts();

// YouTube is a single-page app - navigation does not reload the page
document.addEventListener("yt-navigate-start", redirectShorts);
document.addEventListener("yt-navigate-finish", redirectShorts);
window.addEventListener("popstate", redirectShorts);

// ---------- 2. Hide Shorts UI ----------

const HIDDEN_ATTR = "data-no-shorts-hidden";
const SHORTS_TEXT = /^\s*shorts\s*$/i;

// Sidebar and mini sidebar
const GUIDE_AREA = "ytd-guide-renderer, ytd-mini-guide-renderer, tp-yt-app-drawer, #guide";
const GUIDE_ENTRY =
  "ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer, yt-guide-entry-view-model, tp-yt-paper-item";

// Prefer the whole sidebar entry; fall back to the link itself
function guideEntryFor(node) {
  return node.closest(GUIDE_ENTRY) || node.closest("a");
}

// Items in feeds, search results and recommendations
const FEED_ITEM = [
  "ytd-rich-item-renderer",
  "ytd-video-renderer",
  "ytd-grid-video-renderer",
  "ytd-compact-video-renderer",
  "ytd-reel-item-renderer",
  "ytm-shorts-lockup-view-model",
  "ytm-shorts-lockup-view-model-v2",
  "yt-lockup-view-model",
].join(",");

// Whole Shorts shelves
const SHELF = "ytd-reel-shelf-renderer, ytd-rich-shelf-renderer[is-shorts], grid-shelf-view-model";

// Channel tabs and filter chips
const TAB_OR_CHIP =
  "yt-tab-shape, tp-yt-paper-tab, yt-chip-cloud-chip-renderer, yt-chip-shape, chip-shape";

function hide(el) {
  if (el && !el.hasAttribute(HIDDEN_ATTR)) {
    el.setAttribute(HIDDEN_ATTR, "");
    el.style.setProperty("display", "none", "important");
  }
}

function isShortsLink(a) {
  return /^\/shorts(\/|$)/.test(a.pathname || "");
}

function scan() {
  // Sidebar: find the "Shorts" entry by link, title or visible text
  document.querySelectorAll(GUIDE_AREA).forEach((area) => {
    area.querySelectorAll("a").forEach((a) => {
      if (isShortsLink(a) || SHORTS_TEXT.test(a.getAttribute("title") || "")) {
        hide(guideEntryFor(a));
      }
    });
    area.querySelectorAll("yt-formatted-string, span").forEach((node) => {
      if (SHORTS_TEXT.test(node.textContent) && node.children.length === 0) {
        hide(guideEntryFor(node));
      }
    });
  });

  // Feeds, search, recommendations: any item that links to /shorts/
  document.querySelectorAll('a[href*="/shorts/"]').forEach((a) => {
    if (a.closest(GUIDE_AREA) || !isShortsLink(a)) return;
    hide(a.closest(FEED_ITEM));
  });

  // Shorts shelves
  document.querySelectorAll(SHELF).forEach((shelf) => {
    if (shelf.matches("ytd-reel-shelf-renderer, ytd-rich-shelf-renderer[is-shorts]") ||
        shelf.querySelector('a[href*="/shorts/"]')) {
      hide(shelf);
    }
  });

  // Channel "Shorts" tab and "Shorts" filter chip
  document.querySelectorAll(TAB_OR_CHIP).forEach((el) => {
    if (SHORTS_TEXT.test(el.textContent)) hide(el);
  });
}

let timer = null;
function scheduleScan() {
  if (timer !== null) return;
  timer = setTimeout(() => {
    timer = null;
    scan();
  }, 120);
}

new MutationObserver(scheduleScan).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
document.addEventListener("yt-navigate-finish", scheduleScan);
document.addEventListener("yt-page-data-updated", scheduleScan);
scheduleScan();
