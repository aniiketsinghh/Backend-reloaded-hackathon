const { v4: uuidv4 } = require('uuid');

/**
 * Event fired when a new complaint is created
 */
function ComplaintCreatedEvent(payload) {
  return {
    eventId: uuidv4(),          // Unique event ID
    type: 'ComplaintCreated',   // Event name
    timestamp: new Date(),      // When event happened
    data: payload               // Complaint data
  };
}

/**
 * Event fired when SLA time expires
 */
function SlaExpiredEvent(payload) {
  return {
    eventId: uuidv4(),
    type: 'SlaExpired',
    timestamp: new Date(),
    data: payload
  };
}

/**
 * Event fired when complaint is escalated
 */
function ComplaintEscalatedEvent(payload) {
  return {
    eventId: uuidv4(),
    type: 'ComplaintEscalated',
    timestamp: new Date(),
    data: payload
  };
}

module.exports = {
  ComplaintCreatedEvent,
  SlaExpiredEvent,
  ComplaintEscalatedEvent
};
