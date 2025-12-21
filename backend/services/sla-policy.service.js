const slaPolicy = require('../policies/sla.policy.json');

/**
 * Returns SLA hours based on priority
 */
function getSlaHours(priority) {
  return slaPolicy[priority] || 72;
}

module.exports = { getSlaHours };
