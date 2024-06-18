import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import './index.css'; 
import WarehousePage from './components/warehouse/WarehousePage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/warehouses" element={<WarehousePage/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
