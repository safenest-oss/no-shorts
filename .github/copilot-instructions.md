# Copilot instructions

Read [AGENTS.md](../AGENTS.md) in the repository root first. It describes the project, its principles (privacy first: no tracking, no network requests, minimal permissions), the file layout, testing and the release process.

Quick rules:
- Chrome extension, Manifest V3, plain JavaScript and CSS, no build step and no dependencies
- Keep selectors in `content.css` as separate rules, one per selector
- Use Conventional Commits in English
- Keep the English and Polish guides in `installer/` in sync
- Run `python3 tests/e2e.py` after changing `content.css` or `content.js`
