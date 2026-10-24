// Przekierowanie /shorts/ID -> /watch?v=ID (zwykły odtwarzacz)
function redirectShorts() {
  const match = location.pathname.match(/^\/shorts\/([\w-]+)/);
  if (match) {
    location.replace("/watch?v=" + match[1]);
  }
}

redirectShorts();

// YouTube to SPA - nawigacja nie przeładowuje strony
document.addEventListener("yt-navigate-start", redirectShorts);
document.addEventListener("yt-navigate-finish", redirectShorts);
window.addEventListener("popstate", redirectShorts);
