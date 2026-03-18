/**
 * ============================================================================
 * Google Apps Script Web App — Newsletter & Kontakt Handler
 * ============================================================================
 *
 * SETUP:
 * 1. Gå till https://script.google.com och skapa ett nytt projekt
 * 2. Klistra in hela detta script
 * 3. Skapa ett Google Sheet och kopiera dess ID från URL:en
 *    (https://docs.google.com/spreadsheets/d/SHEET_ID_HÄR/edit)
 * 4. Byt ut SPREADSHEET_ID nedan mot ditt Sheet-ID
 * 5. Deploya som Web App:
 *    - Kör som: "Jag" (ditt Google-konto)
 *    - Tillgång: "Anyone" (så att frontend kan nå det)
 * 6. Kopiera Web App URL och klistra in i frontend-koden
 *
 * SHEET-FLIKAR (skapas automatiskt):
 * - "Nyhetsbrev"   — generella newsletter-signups
 * - "AI-Nyheter"   — veckans AI-nyheter signups
 * - "Kontakt"      — kontaktformulär-inlämningar
 *
 * KOLUMNER PER FLIK:
 * Tidstämpel | E-post | Källa | IP-land | (extra fält för kontakt)
 *
 * ============================================================================
 */

// ═══════════════════════════════════════════════════════════════════════════
// KONFIGURATION — Byt ut detta mot ditt egna Sheet-ID
// ═══════════════════════════════════════════════════════════════════════════
const SPREADSHEET_ID = 'DIN_SPREADSHEET_ID_HÄR'; // <-- BYT UT DENNA

// Namn på flikar i Google Sheet
const NEWSLETTER_SHEET = 'Nyhetsbrev';
const AINYHETER_SHEET  = 'AI-Nyheter';
const KONTAKT_SHEET    = 'Kontakt';

// ═══════════════════════════════════════════════════════════════════════════
// HJÄLPFUNKTIONER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Skapar CORS-kompatibelt JSON-svar
 * Google Apps Script kräver ContentService för Web App-svar
 *
 * @param {Object} data - JSON-data att returnera
 * @returns {ContentService.TextOutput} - Formaterat JSON-svar med CORS-headers
 */
function createJsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * Hämtar eller skapar en sheet-flik med rätt kolumnrubriker
 * Om fliken inte finns skapas den automatiskt med headers
 *
 * @param {string} sheetName - Namnet på fliken att hämta/skapa
 * @param {string} type - Typ av flik ('kontakt' eller annan) för att bestämma kolumner
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} - Sheet-objektet
 */
function getOrCreateSheet(sheetName, type) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(sheetName);

  // Om fliken inte finns — skapa den med korrekta kolumnrubriker
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);

    if (type === 'kontakt') {
      // Kontaktformulär har fler kolumner
      sheet.appendRow([
        'Tidstämpel',
        'Förnamn',
        'Efternamn',
        'E-post',
        'Företag',
        'Område',
        'Meddelande',
        'Källa',
        'IP-land'
      ]);
    } else {
      // Newsletter/AI-nyheter har enklare struktur
      sheet.appendRow([
        'Tidstämpel',
        'E-post',
        'Källa',
        'IP-land'
      ]);
    }

    // Formatera header-raden: fetstil + bakgrundsfärg
    var headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1e1b4b');
    headerRange.setFontColor('#ffffff');

    // Auto-resize kolumnbredder
    for (var i = 1; i <= sheet.getLastColumn(); i++) {
      sheet.autoResizeColumn(i);
    }

    // Frys header-raden så den alltid syns vid scrollning
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Validerar e-postformat med regex
 *
 * @param {string} email - E-postadress att validera
 * @returns {boolean} - true om formatet är giltigt
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  var emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Kontrollerar om en e-postadress redan finns i en specifik flik
 * Förhindrar dubbletter
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - Sheet att söka i
 * @param {string} email - E-postadress att söka efter
 * @param {number} emailCol - Kolumnnummer (1-baserat) där e-post finns
 * @returns {boolean} - true om e-postadressen redan finns
 */
function isDuplicate(sheet, email, emailCol) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return false; // Bara headers finns

  var emailRange = sheet.getRange(2, emailCol, lastRow - 1, 1);
  var emails = emailRange.getValues();
  var normalizedEmail = email.trim().toLowerCase();

  for (var i = 0; i < emails.length; i++) {
    if (emails[i][0] && emails[i][0].toString().trim().toLowerCase() === normalizedEmail) {
      return true;
    }
  }
  return false;
}

/**
 * Formaterar tidstämpel till svensk standard
 *
 * @returns {string} - Formaterad tidstämpel (YYYY-MM-DD HH:MM:SS)
 */
function getSwedishTimestamp() {
  var now = new Date();
  var tz = Session.getScriptTimeZone();
  return Utilities.formatDate(now, tz, 'yyyy-MM-dd HH:mm:ss');
}

// ═══════════════════════════════════════════════════════════════════════════
// HUVUDFUNKTIONER — Web App Endpoints
// ═══════════════════════════════════════════════════════════════════════════

/**
 * doPost — Hanterar alla inkommande POST-requests
 *
 * Förväntat JSON-format:
 * {
 *   "email": "example@mail.com",
 *   "type": "newsletter" | "ainyheter" | "kontakt",
 *   "timestamp": "2026-03-18T10:00:00Z",  (valfritt)
 *   "source": "hemsida",                  (valfritt)
 *   "fname": "Erik",                      (vid kontakt)
 *   "lname": "Svensson",                  (vid kontakt)
 *   "company": "Företag AB",              (vid kontakt)
 *   "area": "Sälj",                       (vid kontakt)
 *   "message": "Hej, vi vill..."          (vid kontakt)
 * }
 *
 * @param {Object} e - Event-objekt från Google Apps Script
 * @returns {ContentService.TextOutput} - JSON-svar
 */
function doPost(e) {
  try {
    // ─── Parsa inkommande JSON ───────────────────────────────────────
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createJsonResponse({
        success: false,
        error: 'Ogiltig JSON i request body. Kontrollera formatet.'
      });
    }

    // ─── Extrahera och validera grundläggande fält ────────────────────
    var email     = (data.email || '').trim();
    var type      = (data.type || '').trim().toLowerCase();
    var source    = (data.source || 'hemsida').trim();
    var timestamp = data.timestamp || getSwedishTimestamp();
    var ipCountry = data.ipCountry || 'Okänt';

    // Validera att e-post finns och är giltig
    if (!email) {
      return createJsonResponse({
        success: false,
        error: 'E-postadress saknas. Skicka med fältet "email".'
      });
    }

    if (!isValidEmail(email)) {
      return createJsonResponse({
        success: false,
        error: 'Ogiltigt e-postformat. Kontrollera adressen.'
      });
    }

    // Validera typ
    var validTypes = ['newsletter', 'ainyheter', 'kontakt'];
    if (!type || validTypes.indexOf(type) === -1) {
      return createJsonResponse({
        success: false,
        error: 'Ogiltig typ. Giltiga värden: "newsletter", "ainyheter", "kontakt".'
      });
    }

    // ─── Hantera baserat på typ ──────────────────────────────────────

    if (type === 'newsletter') {
      // ── Newsletter-signup ──
      var nlSheet = getOrCreateSheet(NEWSLETTER_SHEET, 'newsletter');

      // Kolla dubbletter (e-post i kolumn 2)
      if (isDuplicate(nlSheet, email, 2)) {
        return createJsonResponse({
          success: true,
          message: 'E-postadressen är redan registrerad för nyhetsbrevet.',
          duplicate: true
        });
      }

      nlSheet.appendRow([
        timestamp,
        email,
        source,
        ipCountry
      ]);

      return createJsonResponse({
        success: true,
        message: 'Tack! Du är nu registrerad för vårt nyhetsbrev.'
      });

    } else if (type === 'ainyheter') {
      // ── AI-Nyheter signup ──
      var aiSheet = getOrCreateSheet(AINYHETER_SHEET, 'ainyheter');

      // Kolla dubbletter (e-post i kolumn 2)
      if (isDuplicate(aiSheet, email, 2)) {
        return createJsonResponse({
          success: true,
          message: 'E-postadressen är redan registrerad för AI-nyheter.',
          duplicate: true
        });
      }

      aiSheet.appendRow([
        timestamp,
        email,
        source,
        ipCountry
      ]);

      return createJsonResponse({
        success: true,
        message: 'Tack! Du får AI-nyheter varje måndag.'
      });

    } else if (type === 'kontakt') {
      // ── Kontaktformulär ──
      var fname   = (data.fname || '').trim();
      var lname   = (data.lname || '').trim();
      var company = (data.company || '').trim();
      var area    = (data.area || '').trim();
      var message = (data.message || '').trim();

      // Validera obligatoriska kontaktfält
      if (!fname) {
        return createJsonResponse({
          success: false,
          error: 'Förnamn saknas.'
        });
      }

      var kontaktSheet = getOrCreateSheet(KONTAKT_SHEET, 'kontakt');

      kontaktSheet.appendRow([
        timestamp,
        fname,
        lname,
        email,
        company,
        area,
        message,
        source,
        ipCountry
      ]);

      // ── Skicka e-postnotifikation (valfritt) ──
      // Avkommentera raderna nedan om du vill få ett mail vid nya kontaktförfrågningar
      /*
      try {
        MailApp.sendEmail({
          to: 'hej@aikollegorna.se',
          subject: 'Ny kontaktförfrågan: ' + fname + ' ' + lname + ' (' + company + ')',
          htmlBody: '<h2>Ny kontaktförfrågan</h2>'
            + '<p><strong>Namn:</strong> ' + fname + ' ' + lname + '</p>'
            + '<p><strong>E-post:</strong> ' + email + '</p>'
            + '<p><strong>Företag:</strong> ' + company + '</p>'
            + '<p><strong>Område:</strong> ' + area + '</p>'
            + '<p><strong>Meddelande:</strong><br>' + message + '</p>'
            + '<p><small>Källa: ' + source + ' · ' + timestamp + '</small></p>'
        });
      } catch (mailError) {
        // E-post misslyckades, men data sparades ändå
        Logger.log('E-postnotifikation misslyckades: ' + mailError.message);
      }
      */

      return createJsonResponse({
        success: true,
        message: 'Tack för din förfrågan! Vi hör av oss inom 24 timmar.'
      });
    }

  } catch (error) {
    // ─── Global felhantering ─────────────────────────────────────────
    Logger.log('doPost error: ' + error.message + '\n' + error.stack);
    return createJsonResponse({
      success: false,
      error: 'Serverfel. Försök igen senare. (' + error.message + ')'
    });
  }
}

/**
 * doGet — Health check endpoint
 *
 * Används för att verifiera att Web App:en är deployad och fungerar.
 * Anropa med GET-request till Web App URL:en.
 *
 * Returnerar:
 * - status: "ok"
 * - timestamp: aktuell tid
 * - sheets: lista med tillgängliga flikar
 * - version: scriptversion
 *
 * @param {Object} e - Event-objekt från Google Apps Script
 * @returns {ContentService.TextOutput} - JSON-svar med status
 */
function doGet(e) {
  try {
    // Försök öppna spreadsheet för att verifiera anslutning
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheets = ss.getSheets().map(function(s) { return s.getName(); });

    return createJsonResponse({
      status: 'ok',
      message: 'AI kollegorna Newsletter API är aktiv.',
      timestamp: getSwedishTimestamp(),
      sheets: sheets,
      version: '1.0.0',
      endpoints: {
        POST: {
          newsletter: 'Registrera för nyhetsbrev',
          ainyheter: 'Registrera för AI-nyheter',
          kontakt: 'Skicka kontaktförfrågan'
        }
      }
    });
  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: 'Kunde inte ansluta till Google Sheet. Kontrollera SPREADSHEET_ID.',
      error: error.message
    });
  }
}

/**
 * onOpen — Lägger till anpassad meny i Google Sheet
 *
 * Körs automatiskt när spreadsheet öppnas.
 * Skapar en "AI kollegorna"-meny med verktyg för att hantera data.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('AI kollegorna')
    .addItem('Visa statistik', 'showStats')
    .addItem('Skapa alla flikar', 'initializeSheets')
    .addToUi();
}

/**
 * initializeSheets — Skapar alla flikar manuellt
 * Användbart om du vill förbereda sheet innan första signup
 */
function initializeSheets() {
  getOrCreateSheet(NEWSLETTER_SHEET, 'newsletter');
  getOrCreateSheet(AINYHETER_SHEET, 'ainyheter');
  getOrCreateSheet(KONTAKT_SHEET, 'kontakt');

  SpreadsheetApp.getActiveSpreadsheet().toast(
    'Alla flikar har skapats!',
    'AI kollegorna',
    5
  );
}

/**
 * showStats — Visar enkel statistik-popup
 * Anropas via menyn i Google Sheet
 */
function showStats() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var stats = [];

  var flikar = [
    { name: NEWSLETTER_SHEET, label: 'Nyhetsbrev' },
    { name: AINYHETER_SHEET, label: 'AI-Nyheter' },
    { name: KONTAKT_SHEET, label: 'Kontakt' }
  ];

  flikar.forEach(function(f) {
    var sheet = ss.getSheetByName(f.name);
    var count = sheet ? Math.max(0, sheet.getLastRow() - 1) : 0;
    stats.push(f.label + ': ' + count + ' registreringar');
  });

  var ui = SpreadsheetApp.getUi();
  ui.alert('📊 Statistik', stats.join('\n'), ui.ButtonSet.OK);
}
