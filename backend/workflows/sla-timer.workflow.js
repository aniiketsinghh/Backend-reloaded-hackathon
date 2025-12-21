const { writeAuditLog } = require('../services/audit.service');
const logger = require('../config/logger.config');
const appConfig = require('../config/app.config');
/**
 * Workflow that handles SLA countdown
 */
function slaTimerWorkflow(complaint) {
  logger.info(
    `SLA timer started for ${complaint.complaintId} (${complaint.slaHours} hours)`
  );

  console.log(
    `⏱️ SLA timer running for ${complaint.complaintId}`
  );

  // Simulated timer (for demo)
  setTimeout(() => {
    console.log(`⚠️ SLA expired for ${complaint.complaintId}`);

    // In real Motia:
    // emit SlaExpired event
  }, appConfig.demoSlaTimer); // 2 sec demo instead of hours
}

module.exports = { slaTimerWorkflow };
