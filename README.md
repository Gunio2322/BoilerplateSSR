# React SSR Boilerplate

Pełny boilerplate aplikacji React z renderowaniem po stronie serwera (SSR) z użyciem Express i Webpack.

## Szybki start

1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Zbuduj aplikację:
   ```bash
   npm run build
   ```
3. Uruchom serwer produkcyjny:
   ```bash
   npm start
   ```
4. Tryb deweloperski (hot reload serwera):
   ```bash
   npm run dev
   ```

Aplikacja będzie dostępna na http://localhost:3000

## Struktura projektu
- `src/` – kod aplikacji React
- `server/` – serwer Express do SSR
- `public/` – pliki statyczne

## Funkcje
- SSR z React i Express
- Routing po stronie serwera i klienta (react-router-dom)
- styled-components do stylowania
- Konfiguracja Webpack/Babel
