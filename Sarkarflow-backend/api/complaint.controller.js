const { ComplaintCreatedEvent } = require('../events/complaint.events');
const logger = require('../config/logger.config');
/**
 * API to submit a new complaint
 */
function createComplaint(req, res) {
  const { issueType, location, priority } = req.body;

  // Basic validation
  if (!issueType || !location || !priority) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const complaintPayload = {
    complaintId: `CMP-${Date.now()}`,
    issueType,
    location,
    priority,
    status: 'OPEN'
  };

  // Emit event instead of direct logic
  const event = ComplaintCreatedEvent(complaintPayload);

  console.log('📢 Event Emitted:', event.type);
  logger.info(
  `Event emitted: ${event.type} for complaint ${complaintPayload.complaintId}`
);

  return res.status(201).json({
    message: 'Complaint registered successfully',
    complaint: complaintPayload
  });
}

module.exports = { createComplaint };
