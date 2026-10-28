# Chrome Web Store listing – No Shorts

Everything needed to fill in the Chrome Web Store developer dashboard. Copy the texts from here.

## Basics

| Field | Value |
|---|---|
| Name | No Shorts |
| Category | Productivity |
| Language | English (add Polish as a second language) |
| Visibility | Start with **Unlisted** to test the parent-approval flow, then switch to **Public** |
| Website | https://github.com/safenest-oss/no-shorts |
| Support URL | https://github.com/safenest-oss/no-shorts/issues |
| Privacy policy URL | https://github.com/safenest-oss/no-shorts/blob/main/PRIVACY.md |

## Short description (max 132 characters)

EN: `Hides YouTube Shorts everywhere: feed, search, menus and channels. Shorts links open as regular videos. No tracking.`

PL: `Ukrywa YouTube Shorts w feedzie, wyszukiwarce, menu i na kanałach. Linki Shorts otwierają się jak zwykłe filmy. Bez śledzenia.`

## Detailed description (English)

```
No Shorts removes YouTube Shorts so that YouTube is back to regular videos.

WHAT IT DOES
• Hides Shorts shelves and individual Shorts on the home page, subscriptions, search results and recommendations
• Removes "Shorts" from the side menu and from channel tabs
• Opens youtube.com/shorts links as regular videos in the normal player

PRIVATE BY DESIGN
• No data collected, no tracking, no analytics, no accounts
• No network requests – everything happens locally on the YouTube page you are viewing
• Runs only on youtube.com
• Free and open source (MIT): https://github.com/safenest-oss/no-shorts

MADE FOR FAMILIES
No Shorts is the first tool of SafeNest, a collection of small open source tools that make the Internet safer for children. It is designed for use on a child's Chrome profile.

NOTE
YouTube changes its pages often, so occasionally a Short may slip through. If you see one, please report it at https://github.com/safenest-oss/no-shorts/issues. The extension works in desktop browsers and does not affect the YouTube mobile app.
```

## Detailed description (Polish)

```
No Shorts usuwa YouTube Shorts, żeby YouTube znów składał się ze zwykłych filmów.

CO ROBI
• Ukrywa półki Shorts i pojedyncze Shorts na stronie głównej, w subskrypcjach, wynikach wyszukiwania i rekomendacjach
• Usuwa „Shorts" z menu bocznego i zakładek kanału
• Linki youtube.com/shorts otwiera jako zwykłe filmy w standardowym odtwarzaczu

PRYWATNOŚĆ W ZAŁOŻENIACH
• Nie zbiera danych, nie śledzi, bez analityki i bez kont
• Bez zapytań sieciowych – wszystko dzieje się lokalnie na oglądanej stronie YouTube
• Działa tylko na youtube.com
• Darmowe i otwarte (MIT): https://github.com/safenest-oss/no-shorts

DLA RODZIN
No Shorts to pierwsze narzędzie SafeNest, zbioru małych narzędzi open source, które czynią Internet bezpieczniejszym dla dzieci. Jest przeznaczone do użycia na profilu dziecka w Chrome.

UWAGA
YouTube często zmienia swoje strony, więc czasem jakiś Short może się przebić. Zgłoś to proszę: https://github.com/safenest-oss/no-shorts/issues. Rozszerzenie działa w przeglądarkach na komputerze i nie wpływa na aplikację YouTube na telefonie.
```

## Privacy practices tab (answers)

- **Single purpose:** `Hide YouTube Shorts and open Shorts links as regular videos.`
- **Permission justification – host access (`*://www.youtube.com/*`, `*://m.youtube.com/*`):** `The content script must run on YouTube pages to hide Shorts elements and to redirect /shorts/ links to the regular player. It does not read or transmit any page data.`
- **Remote code:** No
- **Data usage:** do not tick any data collection category (nothing is collected)
- **Certifications:** tick all three (data is not sold, not used for unrelated purposes, not used for creditworthiness)

## Graphics

| Asset | Size | Status |
|---|---|---|
| Store icon | 128x128 | Done: `icons/icon128.png` |
| Screenshots (1-5) | 1280x800 or 640x400 | **To do – take on real YouTube** |
| Small promo tile | 440x280 | Optional, recommended |

Screenshot ideas (take them yourself on the real site, with the extension off and on):
1. YouTube home page with the extension on (no Shorts shelf, no "Shorts" in the menu)
2. Side by side: before (Shorts shelf visible) and after
3. A channel page without the "Shorts" tab
4. Search results without a Shorts row

Do not show a child's profile or any personal information in screenshots.

## Submission checklist

- [ ] Register a developer account (one-time $5 fee) at https://chrome.google.com/webstore/devconsole – use your personal Google account, not the company one
- [ ] Build the package: `bash scripts/build-store.sh` and upload `dist/no-shorts-store-vX.Y.Z.zip`
- [ ] Fill in the listing (texts above), add screenshots
- [ ] Fill in the Privacy practices tab (answers above) and the privacy policy URL
- [ ] Set visibility to Unlisted, submit for review (typically 1-3 business days)
- [ ] Test on a Family Link-supervised profile: add the extension from the store link, check whether the parent has to allow extensions
- [ ] Switch to Public when everything works
- [ ] Add the store link to both READMEs and to the guides in `installer/`

## Review tips (to avoid rejection)

- Do not imply an affiliation with YouTube or Google (no "official" wording; keep the icon free of YouTube's red logo)
- Do not claim compatibility you have not tested (e.g. Family Link) until you have tested it
- Keep name, short description and detailed description consistent and free of keyword stuffing
- Permission justification and single purpose must match what the code really does
- Keep the privacy policy URL reachable while the extension is published
