/**
 * ==========================================================
 * AIS API
 * ==========================================================
 */

function getDashboard() {

  return {
    assetCount: getAssetCount(),
    checkedCount: 0,
    waitingCount: getAssetCount(),
    locationCount: getRowCount(SHEETS.LOCATIONS)
  };

}

/**
 * Dashboard
 */
function apiGetDashboard() {

  return getDashboard();

}

/**
 * Asset List
 */
function apiGetAssets() {

  return getAssets();

}

/**
 * Asset
 */
function apiGetAsset(rowNumber) {

  return getAssetByRow(rowNumber);

}

/**
 * Add
 */
function apiAddAsset(asset) {

  if (assetCodeExists(asset.assetCode)) {

    throw new Error("รหัสวัสดุนี้มีอยู่แล้ว");

  }

  return addAsset(asset);

}

/**
 * Update
 */
function apiUpdateAsset(rowNumber, asset) {

  if (assetCodeExists(asset.assetCode, rowNumber)) {

    throw new Error("รหัสวัสดุนี้มีอยู่แล้ว");

  }

  return updateAsset(rowNumber, asset);

}

/**
 * Delete
 */
function apiDeleteAsset(rowNumber) {

  return deleteAsset(rowNumber);

}