// Adds each contact-form message to a Google Sheet.
//
// Setup (once):
// 1. Create a Google Sheet. Open Extensions > Apps Script, delete the sample code and paste this file.
// 2. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Authorise when asked.
// 3. Copy the web app URL (it ends in /exec) into contact.sheet in content/site.ts.
// After editing this script, deploy again (Manage deployments > Edit > New version) so the URL picks it up.

const SHEET_NAME = "Messages";

function doPost(e) {
  const p = e.parameter;
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(["Received", "Name", "Email", "Message", "Page"]);
    sheet.appendRow([new Date(), clean(p.name), clean(p.email), clean(p.message), clean(p.page)]);
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput("ok");
}

// Caps length, and stops a value that starts with = + - or @ from running as a formula.
function clean(value) {
  const text = String(value || "").slice(0, 5000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}
