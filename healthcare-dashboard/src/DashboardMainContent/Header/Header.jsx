import React from 'react';
import './Header.css';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" readOnly />
      </div>
      <div className="notification-icon">
        <FiBell />
      </div>

      <div className="user-actions">
      <div className="action-box avatar">
        <span role="img" aria-label="avatar">😀</span>
      </div>
      <div className="action-box plus">
        <span>+</span>
      </div>
    </div>
      
    </div>
  );
};

export default Header;
