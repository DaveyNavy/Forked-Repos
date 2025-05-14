import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './MainPage';
import RecipesPage from './RecipesPage';
import ProfilePage from './ProfilePage';
import UploadPage from './UploadPage';
import './App.css';
import NavBar from './NavBar';
import './NavBar.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/upload" element={<UploadPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
