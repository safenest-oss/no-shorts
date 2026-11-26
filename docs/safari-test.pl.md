# No Shorts w Safari: test na Macu

[English](safari-test.md) | Polski

To jest **test**, a nie gotowa wersja. Rozszerzenia nie sprawdziliśmy jeszcze w Safari. Zgłoszenie z planem: [#26](https://github.com/safenest-oss/no-shorts/issues/26).

Tymczasowe rozszerzenie znika po zamknięciu Safari, najpóźniej po 24 godzinach ([źródło](https://moderok.dev/blog/convert-chrome-extension-to-safari-web-extension/)). Nie nadaje się więc do stałej ochrony.

Nazwy w menu podajemy po angielsku i po polsku. Polskich nazw nie sprawdziliśmy, u Ciebie mogą brzmieć trochę inaczej.

## 1. Pobierz pliki

1. Pobierz [ZIP z gałęzi `develop`](https://github.com/safenest-oss/no-shorts/archive/refs/heads/develop.zip).
2. Jeśli Safari nie rozpakuje go samo, kliknij plik dwa razy.
3. Zapamiętaj folder, w którym leży plik `manifest.json`.

## 2. Dodaj rozszerzenie

1. Safari → **Ustawienia** (Settings, ⌘ ,) → **Zaawansowane** (Advanced) → zaznacz **Pokaż funkcje dla programistów** (Show features for web developers).
2. Otwórz nową zakładkę ustawień **Programistyczne** (Developer) i zaznacz **Zezwalaj na niepodpisane rozszerzenia** (Allow unsigned extensions). Mac może poprosić o hasło.
3. Kliknij **Dodaj tymczasowe rozszerzenie** (Add Temporary Extension) i wskaż folder z `manifest.json`.
4. W zakładce **Rozszerzenia** (Extensions) włącz **No Shorts**.
5. Daj dostęp do YouTube: otwórz [youtube.com](https://www.youtube.com), kliknij ikonę rozszerzenia obok paska adresu i wybierz **zawsze zezwalaj na tej stronie** (Always Allow on This Website). Potem odśwież stronę.

Nie widzisz którejś opcji? Zapisz wersję macOS i Safari oraz zrób zrzut ekranu. Na koncie dziecka opcje mogą być zablokowane, to też jest wynik testu.

Jeśli dziecko ma na Macu osobne konto, wykonaj test po zalogowaniu na to konto.

## 3. Czy działa

| Nr | Co sprawdzić | Oczekiwany efekt |
|---|---|---|
| T1 | Strona główna | Brak półki „Shorts” |
| T2 | Menu po lewej, szerokie i zwinięte | Brak wpisu „Shorts” |
| T3 | Wyszukanie popularnego tematu | Brak Shorts w wynikach |
| T4 | Dowolny kanał | Brak zakładki „Shorts” |
| T5 | Wklejony adres `youtube.com/shorts/<ID>` | Otwiera się jako zwykły film (`/watch?v=<ID>`) |
| T6 | Kilka minut klikania po YouTube bez odświeżania | Shorts nie wracają |
| T7 | Okno prywatne (po włączeniu rozszerzenia dla okien prywatnych w ustawieniach) | Jak T1 i T5 |

Dla porównania wyłącz No Shorts i odśwież stronę. Shorts powinny wrócić.

## 4. Czy dziecko może to wyłączyć

Na koncie dziecka, bez zamykania Safari:

| Nr | Co sprawdzić |
|---|---|
| S1 | Przed zmianami: czy da się wyłączyć No Shorts bez hasła? |
| S2 | W **Czasie przed ekranem** (Screen Time) włącz ograniczenia treści i ogranicz strony dla dorosłych. Czy przełącznik No Shorts jest teraz wyszarzony? |
| S3 | Czy No Shorts nadal działa po włączeniu ograniczeń? |

To tylko przypuszczenie, że ograniczenia blokują przełącznik ([notatka dostawcy innego rozszerzenia](https://support.1blocker.com/en/articles/9313634-extensions-are-greyed-out-in-settings)). Wersja z App Store może zachowywać się inaczej niż tymczasowa.

## 5. Posprzątaj po teście

Zwłaszcza na Macu dziecka:

1. Usuń lub wyłącz tymczasowe rozszerzenie.
2. Odznacz **Zezwalaj na niepodpisane rozszerzenia**.
3. Odznacz **Pokaż funkcje dla programistów**.
4. Przywróć poprzednie ustawienia Czasu przed ekranem.

## 6. Wyślij wynik

Skopiuj tabelę do komentarza w [#26](https://github.com/safenest-oss/no-shorts/issues/26), po jednej kolumnie na Maca. Zgłoszenie jest publiczne: nie podawaj imion dzieci i zamaż dane osobowe na zrzutach.

```
| Test | Mac A (rodzic) | Mac B (dziecko) | Mac C (dziecko) |
|---|---|---|---|
| macOS / Safari |  |  |  |
| Dodanie rozszerzenia |  |  |  |
| T1 strona główna |  |  |  |
| T2 menu |  |  |  |
| T3 wyszukiwanie |  |  |  |
| T4 kanał |  |  |  |
| T5 przekierowanie |  |  |  |
| T6 bez odświeżania |  |  |  |
| T7 okno prywatne |  |  |  |
| S1 wyłączenie bez hasła |  |  |  |
| S2 przełącznik wyszarzony |  |  |  |
| S3 działa z ograniczeniami |  |  |  |
```
