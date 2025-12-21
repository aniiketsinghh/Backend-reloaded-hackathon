const { mapDepartment } = require('../services/department-mapper.service');
const { getSlaHours } = require('../services/sla-policy.service');
const { writeAuditLog } = require('../services/audit.service');
const logger = require('../config/logger.config');

/**
 * Workflow triggered when ComplaintCreated event occurs
 */
function complaintRoutingWorkflow(event) {
  const complaint = event.data;

  // Decide department
  const department = mapDepartment(complaint.issueType);

  // Decide SLA based on priority
  const slaHours = getSlaHours(complaint.priority);

  // Update complaint object
  complaint.department = department;
  complaint.slaHours = slaHours;
  complaint.status = 'ASSIGNED';

  // Audit log
  writeAuditLog(
    `Complaint ${complaint.complaintId} routed to ${department} with SLA ${slaHours} hours`
  );

  console.log('✅ Routing completed:', complaint);
  logger.info(
  `Complaint ${complaint.complaintId} routed to ${complaint.department} with SLA ${complaint.slaHours} hours`
);

  // In real Motia:
  // emit event -> SLA_TIMER_STARTED
}

module.exports = { complaintRoutingWorkflow };
