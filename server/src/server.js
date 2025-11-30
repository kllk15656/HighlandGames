// src/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

const authRoutes = require('./routes/auth');

const app = express();

// CORS for frontend port 5173
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true
}));

app.use(express.json());

// Mount API routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
