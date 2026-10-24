# No Shorts

A tiny Chrome extension (Manifest V3) that removes YouTube Shorts from your experience.

## Features

- Hides Shorts shelves and individual Shorts on the home page, subscriptions, search results and recommendations
- Removes the "Shorts" entry from the sidebar, the mini guide and the mobile bottom bar
- Hides the "Shorts" tab on channel pages and the "Shorts" filter chip
- Redirects `youtube.com/shorts/<ID>` links to the regular player (`/watch?v=<ID>`)

No tracking, no network requests, no special permissions. The extension only runs on `youtube.com`.

## Installation (from source)

1. Clone or download this repository
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the project folder

Works in Chromium-based browsers (Chrome, Edge, Brave, Opera).

## How it works

- `content.css` hides Shorts elements with selectors based on YouTube's custom elements and `/shorts/` links
- `content.js` redirects Shorts URLs. YouTube is a single-page app, so it listens to `yt-navigate-*` and `popstate` events in addition to the initial page load

## Known limitations

YouTube changes its markup regularly, so some selectors may stop working over time. If a Short slips through, please open an issue with the element's tag name and a link to the page (or a screenshot of DevTools).

## Roadmap

- [ ] Popup with an on/off toggle
- [ ] Allow-list for selected channels
- [ ] Firefox support
- [ ] Publish to the Chrome Web Store

## Contributing

Issues and pull requests are welcome. For selector fixes, just edit `content.css` and describe where the Short appeared.

## License

[MIT](LICENSE)
