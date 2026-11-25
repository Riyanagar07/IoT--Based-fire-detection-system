import React from 'react';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

/**
 * SensorCharts component displays temperature and MQ2 trends
 * using Recharts line and area charts
 */
const SensorCharts = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="charts-empty">
        <p>No chart data available</p>
      </div>
    );
  }

  // Format data for charts (reverse to show oldest first)
  const chartData = [...history]
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    .map((record) => ({
      time: new Date(record.timestamp).toLocaleTimeString(),
      temperature: record.temperature,
      mq2: record.mq2,
      flame: record.flame
    }));

  return (
    <div className="charts-container">
      <h2 className="charts-title">Sensor Trends</h2>

      <div className="charts-grid">
        {/* Temperature Line Chart */}
        <div className="chart-card">
          <h3 className="chart-label">Temperature (°C)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf1" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#95a5a6' }} />
              <YAxis tick={{ fontSize: 12, fill: '#95a5a6' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e8ecf1',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#e74c3c"
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#e74c3c', strokeWidth: 0 }}
                activeDot={{ r: 6 }}
                name="Temperature"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* MQ2 Area Chart */}
        <div className="chart-card">
          <h3 className="chart-label">MQ2 Gas Level (ppm)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="mq2Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f39c12" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f39c12" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf1" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#95a5a6' }} />
              <YAxis tick={{ fontSize: 12, fill: '#95a5a6' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e8ecf1',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="mq2"
                stroke="#f39c12"
                strokeWidth={2.5}
                fill="url(#mq2Gradient)"
                dot={{ r: 4, fill: '#f39c12', strokeWidth: 0 }}
                activeDot={{ r: 6 }}
                name="MQ2 Gas"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SensorCharts;
