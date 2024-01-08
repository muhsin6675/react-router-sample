import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css'

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h1>Dashboard App</h1>
      </div>
      <nav className="navbar-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
