import React from 'react';

/**
 * SensorCard component displays individual sensor readings
 */
const SensorCard = ({ title, value, unit, icon, color }) => {
  return (
    <div className="sensor-card" style={{ borderColor: color }}>
      <div className="sensor-icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="sensor-info">
        <h3>{title}</h3>
        <div className="sensor-value" style={{ color: color }}>
          {value !== undefined && value !== null ? value : '--'}
          <span className="sensor-unit">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
