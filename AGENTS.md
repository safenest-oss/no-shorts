# Project guide for AI assistants and contributors

This file gives any coding assistant (GitHub Copilot, Claude, others) the context needed to work on No Shorts. Humans may find it useful too.

## What this is

No Shorts is a Chrome extension (Manifest V3) that removes YouTube Shorts. It is the first project of **SafeNest** (`safenest-oss` on GitHub), a collection of small open source tools that protect children online (ages 5-18). The main audience is non-technical parents.

## Principles (do not break these)

- **Privacy first:** no tracking, telemetry, accounts, remote code or network requests. Request no extra permissions.
- **Small and readable:** parents and reviewers should be able to understand the code.
- **Age-aware protection:** strict for young children, lighter for teenagers.
- **Honest limits:** document what the tool cannot do (e.g. a child can disable an extension).

## Layout

| Path | Purpose |
|---|---|
| `manifest.json` | Extension manifest. `version` must match the release tag (`v` + version) |
| `content.css` | Hides Shorts UI. **One selector per rule on purpose**, so one unsupported selector cannot drop the rest |
| `content.js` | Redirects `/shorts/ID` to `/watch?v=ID` and hides Shorts by link and visible text (fallback when YouTube renames elements) |
| `installer/` | Step-by-step guides for parents: `START-HERE.html` (English) and `START-TUTAJ.html` (Polish). Keep them in sync |
| `scripts/build-release.sh` | Builds `dist/no-shorts-vX.Y.Z.zip` (guides + extension folder) |
| `.github/workflows/release.yml` | When a GitHub release is published, builds the zip and attaches it |
| `tests/` | End-to-end test with Playwright against a simplified mock of YouTube |

## How YouTube works (gotchas)

- YouTube is a single-page app: navigation does not reload the page, so listen to `yt-navigate-*` events and use a `MutationObserver`.
- Home feed Shorts are `richSectionRenderer` > `richShelfRenderer` > `shortsLockupViewModel`. In the DOM they are wrapped in `ytd-rich-section-renderer`, so hide the whole section, not only the items.
- The sidebar data is loaded separately from the page source, so its markup can only be checked in the live DOM (DevTools).
- YouTube changes markup often. Prefer link- and text-based detection over element names.

## Testing

```
pip install playwright && playwright install chromium
python3 tests/e2e.py
```

The mock page (`tests/mock-youtube.html`) is a simplification. A passing test does not prove the live site is covered, so verify fixes on youtube.com and add the new case to the mock.

## Release process

1. Bump `version` in `manifest.json`
2. Merge to `main`
3. On GitHub: Releases -> Draft a new release -> new tag `vX.Y.Z` -> Publish. The workflow attaches the zip.

## Conventions

- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `ci:`) in English, imperative mood
- Authorship: commits are authored by the repository owner. AI assistants must not add themselves as author or add `Co-Authored-By` trailers
- Code, README and issues in English. Guides for parents in Polish and English
- Keep pull requests small and focused; describe how you tested

## Open work

See the GitHub issues. Current themes: mobile support (Firefox for Android, parental-controls guide, Chrome/iOS research), age-profile popup with on/off toggle, channel allow-list, publishing to the Chrome Web Store (privacy policy, store listing, graphics).
