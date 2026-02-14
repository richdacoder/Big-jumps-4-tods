const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const requestRouter = require('../routes/request');
const bookingRouter = require('../routes/booking.js');
const contactUserRouter = require('../routes/contactUser');

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
// CORS - Allow only your frontend
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
  origin: function(origin, callback){
    console.log(origin);
    if(!origin) return callback(null, true); // server-to-server or Postman
    if(allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

app.use('/api', requestRouter);
app.use('/api', bookingRouter);

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
const PORT = process.env.PORT || 3002;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});

module.exports = app;
