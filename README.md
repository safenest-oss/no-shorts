# No Shorts

[Polski](README.pl.md) | English

A tiny Chrome extension (Manifest V3) that removes YouTube Shorts from your experience. Part of [SafeNest](https://github.com/safenest-oss), a collection of small open source tools that make the Internet safer for children.

## Features

- Hides Shorts shelves and individual Shorts on the home page, subscriptions, search results and recommendations
- Removes the "Shorts" entry from the sidebar, the mini guide and the mobile bottom bar
- Hides the "Shorts" tab on channel pages and the "Shorts" filter chip
- Redirects `youtube.com/shorts/<ID>` links to the regular player (`/watch?v=<ID>`)

No tracking, no network requests, no special permissions. The extension only runs on `youtube.com`.

## Installation

The extension is not yet in the Chrome Web Store, so you install it manually. It takes about a minute and works in Chrome, Edge, Brave and Opera on a computer.

### 1. Get the files

- **Easiest (no technical knowledge needed):** download `no-shorts-vX.Y.Z.zip` from the [latest release](https://github.com/safenest-oss/no-shorts/releases/latest), unzip it and open `START-HERE.html` (English) or `START-TUTAJ.html` (Polish) for a step-by-step guide. The `no-shorts` folder inside is the extension.
- **From source:** click the green **Code** button, then **Download ZIP**, or run `git clone https://github.com/safenest-oss/no-shorts.git`

### 2. Load it into Chrome

1. Open a new tab and go to `chrome://extensions`
2. Turn on **Developer mode** (switch in the top right corner)
3. Click **Load unpacked**
4. Select the `no-shorts` folder (the one containing `manifest.json`) and confirm
5. "No Shorts" appears on the list of extensions. Optionally pin it with the puzzle icon in the toolbar

> Chrome may show a "Disable developer mode extensions" notice when you restart the browser. Choose to keep the extension. This message disappears once the extension is available in the Chrome Web Store.

### 3. Updating

Download the new version, replace the folder contents, then click the reload icon on the extension's card in `chrome://extensions`.

### Installing for a child (parents)

**Manual installation does not work on a Chrome profile supervised with Google Family Link.** In our test Developer mode is locked there, and supervised profiles can only add extensions from the Chrome Web Store. For a child's profile, wait for the Chrome Web Store version (tracked in the [issues](../../issues)) and make sure extensions are allowed in Family Link (Controls → Google Chrome and Web → Advanced settings → Extensions).

A regular extension can also be switched off by a child who has full control of the profile, so it works best together with supervision and a conversation about why you use it.

## How to check that it works

Open [youtube.com](https://www.youtube.com) and verify:

| Check | Expected result |
|---|---|
| Home page | No "Shorts" shelf between the videos |
| Left sidebar | No "Shorts" entry |
| Search for any popular topic | Results contain only regular videos, no Shorts row |
| Open a channel and look at its tabs | No "Shorts" tab |
| Paste a link like `youtube.com/shorts/<ID>` in the address bar | It opens as a normal video (`/watch?v=<ID>`) |

To compare, turn the extension off with the switch in `chrome://extensions` and reload YouTube: the Shorts come back. Turn it on again to block them.

If a Short slips through, see [Known limitations](#known-limitations).

## How it works

- `content.css` hides Shorts elements with selectors based on YouTube's custom elements and `/shorts/` links
- `content.js` redirects Shorts URLs. YouTube is a single-page app, so it listens to `yt-navigate-*` and `popstate` events in addition to the initial page load

## Known limitations

YouTube changes its markup regularly, so some selectors may stop working over time. If a Short slips through, please [open an issue](../../issues/new/choose) with the page where it appeared and, if you can, the element's tag name from DevTools.

The extension works in desktop browsers. It does not affect the YouTube mobile app.

## Roadmap

- [ ] Popup with an on/off toggle and age profiles
- [ ] Allow-list for selected channels
- [ ] Firefox support
- [ ] Publish to the Chrome Web Store (listing materials in [`store/LISTING.md`](store/LISTING.md))

## Contributing

Issues and pull requests are welcome. For selector fixes, just edit `content.css` and describe where the Short appeared. See the SafeNest [contributing guide](https://github.com/safenest-oss/.github/blob/main/CONTRIBUTING.md).

## Privacy

No data is collected. See the [privacy policy](PRIVACY.md).

## License

[MIT](LICENSE)
