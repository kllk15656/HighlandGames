const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

const authRoutes = require('./routes/auth');

const app = express();

// ==========================
//      CORS CONFIG HERE
// ==========================
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://kllk15656.github.io",
      "https://kllk15656.github.io/HighlandGames",
      "https://highlandgames.onrender.com"
    ],
    credentials: true
  })
);

app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
