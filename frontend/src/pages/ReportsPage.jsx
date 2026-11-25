import React, { useState, useEffect } from 'react';
import { fetchHistory } from '../services/api';
import HistoryTable from '../components/HistoryTable';
import SensorCharts from '../components/SensorCharts';

/**
 * Reports Page
 * Shows full sensor history in table + charts
 */
const ReportsPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadHistory = async () => {
    try {
      setError(null);
      const response = await fetchHistory();
      if (response.success) {
        setHistory(response.data);
      }
    } catch (err) {
      console.error('Error loading history:', err);
      setError('Failed to load reports data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">Loading reports...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Reports</h1>
        <p>Historical sensor data analysis and trends</p>
      </div>

      <SensorCharts history={history} />
      <HistoryTable history={history} />
    </div>
  );
};

export default ReportsPage;
