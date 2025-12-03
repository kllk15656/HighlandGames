import axios from "axios";

// Your live backend on Render:
axios.defaults.baseURL = "https://highlandgames.onrender.com";

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(<App />);

