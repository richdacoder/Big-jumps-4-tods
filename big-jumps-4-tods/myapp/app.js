const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const requestRouter = require('../routes/request');

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
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

app.use('/api', requestRouter);

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
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});

module.exports = app;
