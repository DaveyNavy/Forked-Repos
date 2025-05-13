import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import RecipesPage from './RecipesPage';
import ProfilePage from './ProfilePage';
import UploadPage from './UploadPage';
import './App.css'

function App() {
  // Retrive Dylan token from local storage on initial load
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  // Store Dylan token in local storage when it changes
  useEffect(() => {
      if (token) {
          localStorage.setItem('authToken', token);
          localStorage.setItem('username', username);
      }
  }, [token, username]);

  const handleLogout = () => {
      setToken(null);
      setUsername('');
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
  };

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
          <li> 
            <Link to="/upload">Upload Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/upload" element={<UploadPage />}/>
        <Route
          path="/profile/:id"
          element={token ? (
            <ProfilePage />
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUsername={setUsername} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
