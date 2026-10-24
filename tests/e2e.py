"""End-to-end test: loads the extension in real Chromium and checks it against a
simplified mock of YouTube's markup (tests/mock-youtube.html).

Setup:  pip install playwright && playwright install chromium
Run:    python3 tests/e2e.py

The mock is a simplification, so a pass does not guarantee that the live
YouTube site is covered. Update the mock when you fix a selector.
"""
import sys
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
HTML = (Path(__file__).parent / "mock-youtube.html").read_text()

SHOULD_BE_HIDDEN = ["shorts-a", "shorts-b", "mini-shorts", "short1", "shelf",
                    "short2", "tab-shorts", "short-late"]
SHOULD_BE_VISIBLE = ["home", "subs", "video1", "video2", "tab-videos"]

with sync_playwright() as p, tempfile.TemporaryDirectory() as profile:
    ctx = p.chromium.launch_persistent_context(
        profile, headless=True, channel="chromium",
        args=[f"--disable-extensions-except={ROOT}", f"--load-extension={ROOT}",
              "--headless=new"])
    page = ctx.new_page()
    page.route("https://www.youtube.com/**",
               lambda r: r.fulfill(status=200, content_type="text/html", body=HTML))
    page.goto("https://www.youtube.com/")
    page.wait_for_timeout(2000)

    display = page.evaluate(
        "ids => Object.fromEntries(ids.map(i => "
        "[i, getComputedStyle(document.getElementById(i)).display]))",
        SHOULD_BE_HIDDEN + SHOULD_BE_VISIBLE)

    failures = [f"{i} should be hidden" for i in SHOULD_BE_HIDDEN if display[i] != "none"]
    failures += [f"{i} should be visible" for i in SHOULD_BE_VISIBLE if display[i] == "none"]

    page.route("https://www.youtube.com/watch**",
               lambda r: r.fulfill(status=200, content_type="text/html", body="<html></html>"))
    page.goto("https://www.youtube.com/shorts/abc123")
    page.wait_for_timeout(1000)
    if "/watch?v=abc123" not in page.url:
        failures.append(f"redirect failed, ended at {page.url}")
    ctx.close()

if failures:
    print("FAILED:\n- " + "\n- ".join(failures))
    sys.exit(1)
print("OK: all checks passed")
