import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/main" className="logo">Forked Repos</a>
        </div>
        <div className="navbar-right">
          <ul>
            <li><Link to="/main">Main Page</Link></li>
            <li><Link to="/recipes">Recipes Page</Link></li>
            <li><Link to="/profile/louis">Profile Page</Link></li>
            <li><Link to="/upload">Upload Page</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  


export default NavBar;  