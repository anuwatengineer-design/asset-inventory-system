/**
 * ==========================================================
 * Asset Service
 * ==========================================================
 */

function getAssets() {

  return getAll(SHEETS.ASSETS);

}

function getAssetCount() {

  return Math.max(0, getAssets().length - 1);

}

function getAssetByRow(rowNumber) {

  return getRow(SHEETS.ASSETS, rowNumber);

}

function addAsset(asset) {

  insertRow(SHEETS.ASSETS, [

    asset.assetUID,
    asset.assetCode,
    asset.qrCode,
    asset.receiveDate,
    asset.assetName,
    asset.imageFront,
    asset.imageLeft,
    asset.imageRight,
    asset.quantity,
    asset.unit,
    asset.location,
    asset.condition,
    asset.remark,
    "ACTIVE",
    new Date(),
    "SYSTEM",
    "",
    ""

  ]);

  return true;

}

function updateAsset(rowNumber, asset) {

  const old = getRow(SHEETS.ASSETS, rowNumber);

  updateRow(SHEETS.ASSETS, rowNumber, [

    old[0],
    asset.assetCode,
    old[2],
    old[3],
    asset.assetName,
    old[5],
    old[6],
    old[7],
    asset.quantity,
    asset.unit,
    asset.location,
    asset.condition,
    asset.remark,
    old[13],
    new Date(),
    "SYSTEM",
    old[16],
    old[17]

  ]);

  return true;

}

function deleteAsset(rowNumber) {

  if (rowNumber <= 1) {
    throw new Error("ไม่สามารถลบ Header ได้");
  }

  deleteRow(SHEETS.ASSETS, rowNumber);

  return true;

}

/**
 * ตรวจสอบรหัสวัสดุซ้ำ
 */
function assetCodeExists(assetCode, excludeRow) {

  const data = getAssets();

  for (let i = 1; i < data.length; i++) {

    const rowNumber = i + 1;

    if (excludeRow && rowNumber === excludeRow) continue;

    if (String(data[i][1]).trim() === String(assetCode).trim()) {

      return true;

    }

  }

  return false;

}