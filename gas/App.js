/**
 * ==========================================================
 * AIS - Asset Inventory System
 * App Entry Point
 * ==========================================================
 */

function doGet() {
  const template = HtmlService.createTemplateFromFile('index');

  return template
    .evaluate()
    .setTitle('AIS - Asset Inventory System')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Include HTML
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Dashboard
 */
function getDashboard() {

  return {
    assetCount: getAssetCount(),
    version: VERSION.VERSION,
    appName: VERSION.APP_NAME
  };

}

/**
 * Test
 */
function testSystem() {

  Logger.log(getDashboard());

}

/**
 * Test Database
 */
function testDatabase() {

  Logger.log(getSheet(SHEETS.LOCATIONS).getName());

}

/**
 * Test Asset
 */
function testAssets() {

  Logger.log(getAssets());

}

/**
 * Test Count
 */
function testAssetCount() {

  Logger.log(getAssetCount());

}