import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Like from './components/Like'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Like />
  </React.StrictMode>
);

reportWebVitals();

