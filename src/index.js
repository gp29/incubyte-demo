import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <Routes>
          <Route path="/" name="Home" element={<App/>} />
        </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
