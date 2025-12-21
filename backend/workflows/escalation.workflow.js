const { writeAuditLog } = require('../services/audit.service');
const logger = require('../config/logger.config');
/**
 * Workflow triggered when SLA expires
 */
function escalationWorkflow(complaint) {
  complaint.status = 'ESCALATED';

  writeAuditLog(
    `Complaint ${complaint.complaintId} escalated due to SLA breach`
  );

  console.log('🚨 Complaint escalated:', complaint.complaintId);
  logger.error(
  `Complaint ${complaint.complaintId} escalated due to SLA breach`
);


  // In real Motia:
  // notify senior department
}

module.exports = { escalationWorkflow };
