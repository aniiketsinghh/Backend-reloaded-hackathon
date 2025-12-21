const fs = require('fs');
const path = require('path');

const auditLogPath = path.join(__dirname, '../logs/audit.log');

/**
 * Writes audit trail logs
 */
function writeAuditLog(message) {
  const log = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(auditLogPath, log);
}

module.exports = { writeAuditLog };
