# Contributing to No Shorts

Thanks for helping make the Internet safer for children. This project is part of [SafeNest OSS](https://github.com/safenest-oss).

## Ground rules

- **Privacy first:** no tracking, telemetry, accounts, remote code or network requests, and no extra permissions. Pull requests that weaken this will not be merged.
- **Small and readable:** parents and reviewers should be able to understand the code.
- **Honest limits:** document what the tool cannot do.

## Workflow

1. Open or pick an issue (YouTube changes its page often, so reports with the page URL and the element name from DevTools are very valuable).
2. Fork the repo, branch from `develop` (`fix/<topic>`, `feat/<topic>`, `docs/<topic>`).
3. Run the test: `python3 tests/e2e.py` (needs Playwright with Chromium).
4. Use [Conventional Commits](https://www.conventionalcommits.org/) (`fix: hide Shorts chip in search`).
5. Open a pull request into `develop`. Describe what changed and how you checked it.

Releases are cut from `develop` into `main` by the maintainers (see `AGENTS.md`).

## Security

Please do not report vulnerabilities in public issues. See [SECURITY.md](SECURITY.md).

## Conduct

Be kind and constructive. This project is about children's safety, so keep discussions respectful and free of harassment.
