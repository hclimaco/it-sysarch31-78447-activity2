import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <span className="firstname">Hazel</span>
      </div>
      <nav>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;