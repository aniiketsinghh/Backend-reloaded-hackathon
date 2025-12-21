const { writeAuditLog } = require('../services/audit.service');

/**
 * Centralized audit workflow
 */
function auditLogWorkflow(action, complaintId) {
  writeAuditLog(
    `Action: ${action} | Complaint: ${complaintId}`
  );
}

module.exports = { auditLogWorkflow };
