/**
 * MongoDB connection using mongoose.
 * Expects MONGO_URI in environment variables (server/.env).
 *
 * For local testing you can run a local MongoDB and set:
 * MONGO_URI=mongodb://localhost:27017/highland-games
 */
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if(!uri) {
      console.warn('MONGO_URI not set. Skipping real DB connection (for demo).');
      return;
    }
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
