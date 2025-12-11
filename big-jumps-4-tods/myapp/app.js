const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const app = express();

// CORS - Allow only your frontend
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// Only 1 route
// const appointmentRouter = require('../routes/appointments');
// app.use('/appointments', appointmentRouter);

// 404 handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});

module.exports = app;
