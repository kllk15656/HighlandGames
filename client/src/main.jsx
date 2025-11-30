import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // includes Tailwind directives

createRoot(document.getElementById('root')).render(<App />);
