import React from 'react';
import { STATUS_CONFIG } from '../utils/status';

/**
 * StatusAlert component displays fire alert status
 * Supports NORMAL (green), MODERATE (orange), ALERT (red)
 */
const StatusAlert = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.NORMAL;

  return (
    <div
      className="status-alert"
      style={{
        backgroundColor: config.bgColor,
        border: `2px solid ${config.borderColor}`
      }}
    >
      <div className="status-icon">{config.icon}</div>
      <div className="status-text">
        <h2 style={{ color: config.color }}>{config.label}</h2>
        <p>{config.message}</p>
      </div>
    </div>
  );
};

export default StatusAlert;
