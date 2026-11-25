import axios from 'axios';

// Create axios instance with base URL pointing to backend
const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Fetch latest sensor data from backend
 */
export const fetchLatestData = async () => {
  const response = await api.get('/sensor-data');
  return response.data;
};

/**
 * Fetch history of last 20 sensor records
 */
export const fetchHistory = async () => {
  const response = await api.get('/history');
  return response.data;
};

/**
 * Post new sensor data to backend
 */
export const postSensorData = async (sensorData) => {
  const response = await api.post('/sensor-data', sensorData);
  return response.data;
};

/**
 * Check backend health status
 */
export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
