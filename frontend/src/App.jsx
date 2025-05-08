import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import RecipesPage from './RecipesPage';
import ProfilePage from './ProfilePage';
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main">Main Page</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes Page</Link>
          </li>
          <li>
            <Link to="/profile">Profile Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route
          path="/profile"
          element={
            <ProfilePage
              username="Louis"
              userStats={{ likes: 10, comments: 5, rating: 4.3 }}
              uploadedRecipes={[
                { id: 'r1', title: 'Pasta', date: '2025-05-07' },
                { id: 'r2', title: 'Salad', date: '2025-05-08' },
              ]}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App
