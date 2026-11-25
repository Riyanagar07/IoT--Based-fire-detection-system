const express = require('express');
const router = express.Router();

const {
  postSensorData,
  getLatestSensorData,
  getHistory,
  getHealth
} = require('../controllers/sensorController');

const validateSensorData = require('../middleware/validateSensorData');

// POST /sensor-data - Store new sensor data
router.post('/sensor-data', validateSensorData, postSensorData);

// GET /sensor-data - Get latest sensor data
router.get('/sensor-data', getLatestSensorData);

// GET /history - Get last 20 records
router.get('/history', getHistory);

// GET /health - Server health check
router.get('/health', getHealth);

module.exports = router;
