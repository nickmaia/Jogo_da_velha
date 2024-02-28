import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Verifique o caminho do import

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
