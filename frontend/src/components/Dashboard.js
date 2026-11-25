import React, { useState, useEffect } from 'react';
import { fetchLatestData, fetchHistory } from '../services/api';
import { deriveStatus } from '../utils/status';
import SensorCard from './SensorCard';
import StatusAlert from './StatusAlert';
import HistoryTable from './HistoryTable';
import SensorCharts from './SensorCharts';
import CreatorAnimation from './CreatorAnimation';
//import DataSimulator from './DataSimulator';

/**
 * Dashboard component
 * - Fetches latest sensor data
 * - Auto-refreshes every 2 seconds
 * - Displays sensor cards, status alert, charts, and history table
 */
const Dashboard = () => {
  const [latestData, setLatestData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to load all dashboard data
  const loadData = async () => {
    try {
      setError(null);

      // Fetch latest data
      const latestResponse = await fetchLatestData();
      if (latestResponse.success) {
        setLatestData(latestResponse.data);
      }

      // Fetch history
      const historyResponse = await fetchHistory();
      if (historyResponse.success) {
        setHistory(historyResponse.data);
      }
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Failed to connect to backend. Make sure server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  // Initial load and auto-refresh every 2 seconds
  useEffect(() => {
    loadData();

    // Set up auto-refresh interval (every 2 seconds)
    const intervalId = setInterval(() => {
      loadData();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Derive 3-tier status from raw sensor values
  const currentStatus = latestData
    ? deriveStatus(latestData.mq2, latestData.flame)
    : 'NORMAL';

  // Show loading state on initial load
  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading sensor data...</div>
      </div>
    );
  }

  // Show error state (only for real connection failures)
  if (error) {
    return (
      <div className="dashboard">
        <div className="error">{error}</div>
        <button className="retry-btn" onClick={loadData}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">

      {/* Waiting for data message when no sensor data exists yet */}
      {!latestData && (
        <div className="info-message">
          <p>Waiting for sensor data...</p>
          <p className="sub-text">Click Start above to generate live data, or send a POST request to <code>/sensor-data</code>.</p>
        </div>
      )}

      {/* Status Alert Section */}
      <StatusAlert status={currentStatus} />

      {/* Sensor Cards Section */}
      <div className="sensor-grid">
        <SensorCard
          title="Temperature"
          value={latestData?.temperature}
          unit="°C"
          icon="🌡️"
          color="#e74c3c"
        />
        <SensorCard
          title="MQ2 Gas"
          value={latestData?.mq2}
          unit="ppm"
          icon="💨"
          color="#9b59b6"
        />
        <SensorCard
          title="Flame"
          value={latestData?.flame}
          unit=""
          icon="🔥"
          color="#f39c12"
        />
      </div>

      {/* Last Updated */}
      {latestData?.timestamp && (
        <div className="last-updated">
          Last updated: {new Date(latestData.timestamp).toLocaleString()}
        </div>
      )}

      {/* Charts Section */}
      <SensorCharts history={history} />

      {/* History Table Section */}
      <HistoryTable history={history} />

      {/* Creator Animation */}
      <CreatorAnimation />
    </div>
  );
};

export default Dashboard;
