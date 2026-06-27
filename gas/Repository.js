/**
 * ==========================================================
 * Repository
 * Google Sheets Access
 * ==========================================================
 */

/**
 * เปิดฐานข้อมูล
 */
function getDatabase() {

  return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);

}

/**
 * เปิดชีต
 */
function getSheet(sheetName) {

  const sheet = getDatabase().getSheetByName(sheetName);

  if (!sheet) {

    throw new Error("ไม่พบ Sheet : " + sheetName);

  }

  return sheet;

}

/**
 * อ่านข้อมูลทั้งหมด
 */
function getAll(sheetName) {

  return getSheet(sheetName)
    .getDataRange()
    .getValues();

}

/**
 * อ่าน Header
 */
function getHeader(sheetName) {

  return getAll(sheetName)[0];

}

/**
 * อ่านข้อมูล 1 แถว
 */
function getRow(sheetName, rowNumber) {

  return getSheet(sheetName)
    .getRange(rowNumber, 1, 1, getHeader(sheetName).length)
    .getValues()[0];

}

/**
 * เพิ่มข้อมูล
 */
function insertRow(sheetName, rowData) {

  getSheet(sheetName).appendRow(rowData);

  return true;

}

/**
 * แก้ไขข้อมูล
 */
function updateRow(sheetName, rowNumber, rowData) {

  getSheet(sheetName)
    .getRange(rowNumber, 1, 1, rowData.length)
    .setValues([rowData]);

  return true;

}

/**
 * ลบข้อมูล
 */
function deleteRow(sheetName, rowNumber) {

  getSheet(sheetName).deleteRow(rowNumber);

  return true;

}

/**
 * จำนวนข้อมูล
 */
function getRowCount(sheetName) {

  return Math.max(
    0,
    getSheet(sheetName).getLastRow() - 1
  );

}