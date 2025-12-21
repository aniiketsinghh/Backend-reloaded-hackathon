const departmentPolicy = require('../policies/department.policy.json');

/**
 * Determines department based on issue type
 */
function mapDepartment(issueType) {
  return departmentPolicy[issueType] || 'General Administration';
}

module.exports = { mapDepartment };
