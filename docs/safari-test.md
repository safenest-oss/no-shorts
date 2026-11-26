# No Shorts in Safari: testing on a Mac

English | [Polski](safari-test.pl.md)

This is a **test**, not a finished version. We have not verified the extension in Safari yet. Plan: [#26](https://github.com/safenest-oss/no-shorts/issues/26).

A temporary extension is removed when you quit Safari, or after 24 hours at the latest ([source](https://moderok.dev/blog/convert-chrome-extension-to-safari-web-extension/)). It is not a way to protect a child permanently.

## 1. Get the files

1. Download the [ZIP of the `develop` branch](https://github.com/safenest-oss/no-shorts/archive/refs/heads/develop.zip).
2. If Safari does not unzip it, double-click the file.
3. Note the folder that contains `manifest.json`.

## 2. Add the extension

1. Safari > **Settings** (⌘ ,) > **Advanced** > tick **Show features for web developers**.
2. Open the **Developer** settings pane and tick **Allow unsigned extensions**. The Mac may ask for a password.
3. Click **Add Temporary Extension** and choose the folder with `manifest.json`.
4. In the **Extensions** pane, turn on **No Shorts**.
5. Give it access to YouTube: open [youtube.com](https://www.youtube.com), click the extension icon next to the address bar and choose **Always Allow on This Website**. Then reload the page.

Missing an option? Write down the macOS and Safari versions and take a screenshot. Options may be locked on a child's account, which is a test result too.

If the child has a separate account on the Mac, run the test while signed in to that account.

## 3. Does it work

| No. | Check | Expected result |
|---|---|---|
| T1 | Home page | No "Shorts" shelf |
| T2 | Left menu, wide and collapsed | No "Shorts" entry |
| T3 | Search for a popular topic | No Shorts in the results |
| T4 | Any channel | No "Shorts" tab |
| T5 | Paste a `youtube.com/shorts/<ID>` address | Opens as a regular video (`/watch?v=<ID>`) |
| T6 | Browse YouTube for a few minutes without reloading | Shorts do not come back |
| T7 | Private window (after allowing the extension in private windows in settings) | Same as T1 and T5 |

To compare, turn No Shorts off and reload. The Shorts should come back.

## 4. Can a child turn it off

On the child's account, without quitting Safari:

| No. | Check |
|---|---|
| S1 | Before any change: can No Shorts be turned off without a password? |
| S2 | In **Screen Time**, turn on content restrictions and limit adult websites. Is the No Shorts switch now greyed out? |
| S3 | Does No Shorts still work with the restrictions on? |

That restrictions lock the switch is only a hypothesis ([note from another extension's vendor](https://support.1blocker.com/en/articles/9313634-extensions-are-greyed-out-in-settings)). An App Store version may behave differently from a temporary one.

## 5. Clean up

Especially on a child's Mac:

1. Remove or turn off the temporary extension.
2. Untick **Allow unsigned extensions**.
3. Untick **Show features for web developers**.
4. Restore the previous Screen Time settings.

## 6. Report the result

Copy the table into a comment on [#26](https://github.com/safenest-oss/no-shorts/issues/26), one column per Mac. The issue is public: leave out children's names and blur personal data in screenshots.

```
| Test | Mac A (parent) | Mac B (child) | Mac C (child) |
|---|---|---|---|
| macOS / Safari |  |  |  |
| Adding the extension |  |  |  |
| T1 home page |  |  |  |
| T2 menu |  |  |  |
| T3 search |  |  |  |
| T4 channel |  |  |  |
| T5 redirect |  |  |  |
| T6 without reloading |  |  |  |
| T7 private window |  |  |  |
| S1 turn off without password |  |  |  |
| S2 switch greyed out |  |  |  |
| S3 works with restrictions |  |  |  |
```
