import React, { useState } from 'react';
import { FaHome, FaChartLine, FaBox, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Mysidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
    
      <div className="mobile-menu-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>

    
      <div className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li>
            <FaHome />
            <span className="menu-text">Home</span>
          </li>
          <li>
            <FaChartLine />
            <span className="menu-text">Dashboard</span>
          </li>
         
          <li>
            <FaCog />
            <span className="menu-text">Settings</span>
          </li>
          <li>
            <FaSignOutAlt />
            <span className="menu-text">Sign Out</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Mysidebar;
