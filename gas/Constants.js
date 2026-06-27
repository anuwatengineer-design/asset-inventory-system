/**
 * ==========================================================
 * AIS - Asset Inventory System
 * Constants
 * ==========================================================
 */

const SHEETS = Object.freeze({

  ASSETS: 'TB_Assets',

  INSPECTION_ROUNDS: 'TB_InspectionRounds',

  INSPECTION_DETAILS: 'TB_InspectionDetails',

  LOCATIONS: 'TB_Locations',

  CONDITIONS: 'TB_Conditions',

  UNITS: 'TB_Units',

  USERS: 'TB_Users',

  SETTINGS: 'TB_Settings',

  AUDIT_LOGS: 'TB_AuditLogs'

});

const ROLE = Object.freeze({

  ADMIN: 'ADMIN',

  OFFICER: 'OFFICER'

});

const CONDITION = Object.freeze({

  GOOD: 1,

  NORMAL: 2,

  REPAIRED: 3,

  DAMAGED: 4,

  BROKEN: 5

});