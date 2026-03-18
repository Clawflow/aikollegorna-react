# Backend: Google Apps Script — Newsletter & Kontakt

## Vad detta script gor

Hanterar alla formularinskickningar fran AI kollegorna-sajten:
- **Nyhetsbrev** — sparar email-signups i Google Sheets
- **AI-Nyheter** — sparar signups for veckans AI-nyheter
- **Kontakt** — sparar kontaktforfragan med alla falt

Scriptet koar som en Google Apps Script Web App och skriver direkt till ett Google Sheet.

---

## Steg-for-steg: Deploya scriptet

### 1. Skapa ett Google Sheet

1. Ga till [Google Sheets](https://sheets.google.com)
2. Klicka **"Tomt kalkylblad"** (skapa nytt)
3. Dop det till exempelvis: `AI kollegorna — Signups`
4. Kopiera **Sheet-ID** fran URL:en:
   ```
   https://docs.google.com/spreadsheets/d/DETTA_AR_DITT_SHEET_ID/edit
   ```
   Kopiera stringen mellan `/d/` och `/edit`

### 2. Skapa Google Apps Script-projekt

1. Ga till [script.google.com](https://script.google.com)
2. Klicka **"Nytt projekt"**
3. Dop projektet till: `AI kollegorna Newsletter`
4. Ta bort all existerande kod i `Code.gs`
5. Oppna filen `newsletter-script.js` i denna mapp
6. Kopiera HELA innehallet och klistra in i `Code.gs`
7. Hitta raden:
   ```javascript
   const SPREADSHEET_ID = 'DIN_SPREADSHEET_ID_HAR';
   ```
8. Byt ut `DIN_SPREADSHEET_ID_HAR` mot ditt riktiga Sheet-ID fran steg 1
9. Klicka **Spara** (Ctrl+S)

### 3. Testa scriptet lokalt

1. I script.google.com, valj funktionen `initializeSheets` i dropdown-menyn
2. Klicka **Kor** (play-knappen)
3. Godkann behorigheter forsta gangen (Google fragar om tillgang till Sheets)
4. Ga till ditt Google Sheet — du ska nu se tre flikar:
   - `Nyhetsbrev`
   - `AI-Nyheter`
   - `Kontakt`

### 4. Deploya som Web App

1. I script.google.com, klicka **Deploya** -> **Ny deploy**
2. Klicka kugghjulet bredvid "Valj typ" och valj **Web app**
3. Fyll i:
   - **Beskrivning**: `Newsletter API v1.0`
   - **Kor som**: `Jag` (ditt Google-konto)
   - **Vem har atkomst**: `Alla` (Anyone)
4. Klicka **Deploya**
5. Kopiera **Web App URL** som visas (ser ut ungefar sa har):
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### 5. Koppla till React-sajten

1. Oppna filen `src/components/NewsletterSection.jsx`
2. Hitta raden:
   ```javascript
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/DIN_DEPLOY_URL_HAR/exec'
   ```
3. Byt ut hela URL:en mot din Web App URL fran steg 4

4. Oppna ocksa `src/pages/Kontakt.jsx`
5. Samma sak — byt ut placeholder-URL:en mot din Web App URL

6. Testa genom att kora sajten (`npm run dev`) och skicka in ett testmail

### 6. Verifiera att det fungerar

1. Oppna din Web App URL direkt i webblasaren (GET-request)
2. Du ska se ett JSON-svar:
   ```json
   {
     "status": "ok",
     "message": "AI kollegorna Newsletter API ar aktiv.",
     "timestamp": "2026-03-18 10:00:00",
     "sheets": ["Nyhetsbrev", "AI-Nyheter", "Kontakt"]
   }
   ```
3. Testa med ett newsletter-signup fran sajten
4. Kolla ditt Google Sheet — e-posten ska dyka upp!

---

## Uppdatera scriptet

Nar du gor andringar i scriptet:

1. Ga till script.google.com
2. Gor dina andringar
3. Klicka **Deploya** -> **Hantera deploys**
4. Klicka pennikonen pa din aktiva deploy
5. Bok **Version** till "Ny version"
6. Klicka **Deploya**

**VIKTIGT**: URL:en andras INTE vid uppdateringar, sa du behover inte andra naget i React-koden.

---

## Felsokningsguide

| Problem | Losning |
|---------|---------|
| `CORS-fel` | Se till att du deployade med "Anyone" har atkomst |
| `404 / Script not found` | Kontrollera att Web App URL:en ar korrekt |
| `Permission denied` | Godkann behorigheter — kor `initializeSheets` manuellt forst |
| `Spreadsheet not found` | Dubbelkolla SPREADSHEET_ID i scriptet |
| `Inga flikar skapas` | Kor `initializeSheets` manuellt fran script-editorn |
| `E-post sparas inte` | Kolla Logger i script.google.com (Visa -> Logg) |

---

## Arkitektur

```
React Frontend (Vercel/Netlify)
       |
       | POST JSON {email, type, source, ...}
       v
Google Apps Script Web App
       |
       | appendRow()
       v
Google Sheets
  |-- Nyhetsbrev  (Tidstampel | E-post | Kalla | IP-land)
  |-- AI-Nyheter  (Tidstampel | E-post | Kalla | IP-land)
  |-- Kontakt     (Tidstampel | Fornamn | Efternamn | E-post | Foretag | Omrade | Meddelande | Kalla | IP-land)
```

---

## Sakerhet

- **Ingen autentisering kravs** fran frontend (medvetet val for UX)
- **Dubblettskydd** inbyggt — samma e-post kan inte registreras tva ganger
- **Validering** sker bade pa frontend och backend
- **Rate limiting** hanteras av Google (standard-granser for Apps Script)
- **GDPR**: Ingen data lagras utanfor Google Workspace

---

## Kontakt

Fragor? Maila [hej@aikollegorna.se](mailto:hej@aikollegorna.se)
