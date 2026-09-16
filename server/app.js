const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

mongoose.set('bufferCommands', false);

const app = express();

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});

app.use(cors());
app.use(express.json());

let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 8000,
    socketTimeoutMS: 10000,
    connectTimeoutMS: 8000,
  });
  isConnected = true;
  console.log('MongoDB connected');
};

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('DB connection error:', err.message);
    res.status(500).json({ error: 'Database connection failed', detail: err.message });
  }
});

app.use('/api/contact', contactRoutes);

app.get('/api', (req, res) => {
  res.json({ message: 'API is running' });
});

module.exports = app;