/**
 * ==================================================
 * Inspection Service
 * ==================================================
 */

function getInspectionRounds() {

  const sheet = getSheet(SHEETS.INSPECTION_ROUNDS);

  return sheet.getDataRange().getValues();

}

function addInspectionRound(data) {

  const sheet = getSheet(SHEETS.INSPECTION_ROUNDS);

  sheet.appendRow([
    Utilities.getUuid(),
    data.year,
    data.startDate,
    data.endDate,
    "OPEN",
    data.remark,
    Session.getActiveUser().getEmail(),
    new Date(),
    "",
    ""
  ]);

  return true;

}