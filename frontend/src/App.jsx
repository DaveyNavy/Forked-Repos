import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import './App.css'

function App() {
 return(
  <Router>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/main">Main Page</Link>
      </li>
    </ul>
  </nav>

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/main" element={<MainPage />} />
  </Routes>
   

  
  </Router>
 );
}



export default App
