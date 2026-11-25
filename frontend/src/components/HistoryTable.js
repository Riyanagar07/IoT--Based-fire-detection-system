import React from 'react';
import { deriveStatus, STATUS_CONFIG } from '../utils/status';

/**
 * HistoryTable component displays last 20 sensor records in table format
 * Uses frontend-derived status for 3-tier display
 */
const HistoryTable = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="history-empty">
        <p>No history data available</p>
      </div>
    );
  }

  return (
    <div className="history-container">
      <h2>Sensor History (Last 20 Records)</h2>
      <div className="table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature</th>
              <th>MQ2 Gas</th>
              <th>Flame</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => {
              const derived = deriveStatus(record.mq2, record.flame);
              const config = STATUS_CONFIG[derived];
              return (
                <tr key={record.id}>
                  <td>
                    {record.timestamp
                      ? new Date(record.timestamp).toLocaleString()
                      : '--'}
                  </td>
                  <td>{record.temperature} °C</td>
                  <td>{record.mq2}</td>
                  <td>{record.flame === 1 ? 'Detected' : 'None'}</td>
                  <td>
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: config.color,
                        color: '#fff'
                      }}
                    >
                      {derived}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;
