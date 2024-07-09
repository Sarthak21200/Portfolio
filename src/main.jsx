import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import BackgroundImage from "./components/BackgroundImage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundImage>
      <App />
    </BackgroundImage>
  </React.StrictMode>
);
