# No Shorts

Polski | [English](README.md)

Malutkie rozszerzenie do Chrome (Manifest V3), które usuwa YouTube Shorts. Część [SafeNest](https://github.com/safenest-oss), zbioru małych narzędzi open source, które czynią Internet bezpieczniejszym dla dzieci.

## Co robi

- Ukrywa Shorts na stronie głównej, w subskrypcjach, wynikach wyszukiwania i rekomendacjach
- Usuwa wpis „Shorts" z menu bocznego i paska nawigacji
- Ukrywa zakładkę „Shorts" na kanałach oraz filtr „Shorts"
- Przekierowuje linki `youtube.com/shorts/<ID>` do zwykłego odtwarzacza (`/watch?v=<ID>`)

Bez śledzenia, bez zapytań sieciowych, bez specjalnych uprawnień. Rozszerzenie działa tylko na `youtube.com`.

## Instalacja

Rozszerzenia nie ma jeszcze w sklepie Chrome, więc instalujesz je ręcznie. Zajmuje to około minuty i działa w Chrome, Edge, Brave i Operze na komputerze.

### 1. Pobierz pliki

- **Najprościej (bez wiedzy technicznej):** pobierz plik `no-shorts-vX.Y.Z.zip` z [najnowszego wydania](https://github.com/safenest-oss/no-shorts/releases/latest), rozpakuj go i otwórz `START-TUTAJ.html`, w którym jest przewodnik krok po kroku. Folder `no-shorts` w środku to samo rozszerzenie.
- **Ze źródeł:** kliknij zielony przycisk **Code**, potem **Download ZIP**, albo użyj `git clone https://github.com/safenest-oss/no-shorts.git`

### 2. Wczytaj do Chrome

1. Otwórz nową kartę i wpisz `chrome://extensions`
2. Włącz **Tryb programisty** (przełącznik w prawym górnym rogu)
3. Kliknij **Załaduj rozpakowane**
4. Wskaż folder, w którym jest plik `manifest.json` (w paczce wydania to `no-shorts`), i zatwierdź
5. „No Shorts" pojawi się na liście rozszerzeń. Możesz je przypiąć ikoną puzzla na pasku narzędzi

> Po ponownym uruchomieniu przeglądarki Chrome może wyświetlić komunikat o wyłączeniu rozszerzeń trybu programisty. Wybierz zachowanie rozszerzenia. Komunikat zniknie, gdy rozszerzenie trafi do sklepu Chrome.

### 3. Aktualizacja

Pobierz nową wersję, podmień zawartość folderu i kliknij ikonę odświeżania na karcie rozszerzenia w `chrome://extensions`.

### Instalacja dla dziecka (rodzice)

Na komputerze dziecka użyj profilu Chrome, którego dziecko nie może zmieniać, np. profilu nadzorowanego przez Google Family Link albo przeglądarki zarządzanej zasadami, które wymuszają instalację rozszerzenia. Zwykłe rozszerzenie można wyłączyć, więc najlepiej działa razem z takimi ustawieniami i rozmową z dzieckiem o tym, po co z niego korzystacie.

## Jak sprawdzić, że działa

Otwórz [youtube.com](https://www.youtube.com) i sprawdź:

| Co sprawdzić | Oczekiwany efekt |
|---|---|
| Strona główna | Brak półki „Shorts" między filmami |
| Menu po lewej | Brak wpisu „Shorts" |
| Wyszukanie popularnego tematu | Wyniki zawierają tylko zwykłe filmy, bez rzędu Shorts |
| Otwarcie kanału i spojrzenie na zakładki | Brak zakładki „Shorts" |
| Wklejenie w pasek adresu linku `youtube.com/shorts/<ID>` | Otwiera się jako zwykły film (`/watch?v=<ID>`) |

Dla porównania wyłącz rozszerzenie przełącznikiem w `chrome://extensions` i odśwież YouTube: Shorts wrócą. Włącz je ponownie, żeby znów je blokować.

Jeśli jakiś Short się przebije, zobacz sekcję poniżej.

## Znane ograniczenia

YouTube regularnie zmienia kod strony, więc część selektorów może z czasem przestać działać. Jeśli coś się przebije, [zgłoś problem](../../issues/new/choose) z adresem strony i, jeśli potrafisz, nazwą elementu z narzędzi deweloperskich (DevTools).

Rozszerzenie działa w przeglądarkach na komputerze. Nie wpływa na aplikację YouTube na telefonie.

## Licencja

[MIT](LICENSE)
