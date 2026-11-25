require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend working 🚀" });
});
// CORS configuration - allow requests from frontend
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use('/', sensorRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Fire Detection Backend running on http://localhost:${PORT}`);
});


module.exports = app;
