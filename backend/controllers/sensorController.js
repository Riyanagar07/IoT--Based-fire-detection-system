const { db } = require('../config/firebase');

/**
 * Determine fire status based on sensor readings
 * WARNING if mq2 > 300 OR flame == 1, else NORMAL
 */
const determineStatus = (mq2, flame) => {
  if (mq2 > 300 || flame === 1) {
    return 'WARNING';
  }
  return 'NORMAL';
};

/**
 * POST /sensor-data
 * Store new sensor data in Firestore
 */
const postSensorData = async (req, res) => {
  try {
    const { temperature, mq2, flame } = req.body;

    // Determine status based on sensor values
    const status = determineStatus(mq2, flame);

    // Create data object with timestamp
    const sensorData = {
      temperature,
      mq2,
      flame,
      status,
      timestamp: new Date().toISOString()
    };

    // Store in Firestore collection "fire-data"
    const docRef = await db.collection('fire-data').add(sensorData);

    return res.status(201).json({
      success: true,
      data: {
        id: docRef.id,
        ...sensorData
      }
    });
  } catch (error) {
    console.error('Error storing sensor data:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to store sensor data'
    });
  }
};

/**
 * GET /sensor-data
 * Return the latest sensor record from Firestore
 */
const getLatestSensorData = async (req, res) => {
  try {
    // Get the latest record ordered by timestamp descending
    const snapshot = await db
      .collection('fire-data')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(200).json({
        success: true,
        data: null,
        message: 'No sensor data found'
      });
    }

    // Extract document data
    const doc = snapshot.docs[0];
    const data = {
      id: doc.id,
      ...doc.data()
    };

    return res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Error fetching latest sensor data:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch latest sensor data'
    });
  }
};

/**
 * GET /history
 * Return last 20 records sorted by timestamp descending
 */
const getHistory = async (req, res) => {
  try {
    // Get last 20 records ordered by timestamp descending
    const snapshot = await db
      .collection('fire-data')
      .orderBy('timestamp', 'desc')
      .limit(20)
      .get();

    // Map documents to array
    const history = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return res.status(200).json({
      success: true,
      data: history
    });
  } catch (error) {
    console.error('Error fetching history:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch history'
    });
  }
};

/**
 * GET /health
 * Return server health status
 */
const getHealth = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      status: 'UP',
      message: 'Server is running',
      timestamp: new Date().toISOString()
    }
  });
};

module.exports = {
  postSensorData,
  getLatestSensorData,
  getHistory,
  getHealth
};
