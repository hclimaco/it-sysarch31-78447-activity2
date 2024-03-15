import React from 'react';
import './index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {currentYear} IT-SYSARCH31-78447 Made by Hazel Climaco
      </p>
    </footer>
  );
};

export default Footer;