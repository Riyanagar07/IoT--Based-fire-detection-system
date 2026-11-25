/**
 * Middleware to validate incoming sensor data
 * Ensures temperature, mq2, and flame are valid numbers
 */
const validateSensorData = (req, res, next) => {
  const { temperature, mq2, flame } = req.body;

  // Check if all required fields are present
  if (temperature === undefined || mq2 === undefined || flame === undefined) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: temperature, mq2, flame'
    });
  }

  // Validate temperature is a number
  if (typeof temperature !== 'number' || isNaN(temperature)) {
    return res.status(400).json({
      success: false,
      error: 'temperature must be a valid number'
    });
  }

  // Validate mq2 is a number
  if (typeof mq2 !== 'number' || isNaN(mq2)) {
    return res.status(400).json({
      success: false,
      error: 'mq2 must be a valid number'
    });
  }

  // Validate flame is a number (0 or 1)
  if (typeof flame !== 'number' || isNaN(flame) || (flame !== 0 && flame !== 1)) {
    return res.status(400).json({
      success: false,
      error: 'flame must be 0 or 1'
    });
  }

  // All validations passed
  next();
};

module.exports = validateSensorData;
