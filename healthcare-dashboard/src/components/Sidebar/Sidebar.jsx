// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { navigationLinks } from '../../data/navigationLinks';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span className="health">Health</span><span className="care">care.</span>
      </div>

      <div className="sidebar__section">
        <p className="sidebar__heading">General</p>
        <ul className="sidebar__nav">
          {navigationLinks.general.map((item, index) => (
            <li key={index}>
              <span className="sidebar__icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__section">
        <p className="sidebar__heading">Tools</p>
        <ul className="sidebar__nav">
          {navigationLinks.tools.map((item, index) => (
            <li key={index}>
              <span className="sidebar__icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__bottom">
        <ul className="sidebar__nav">
          <li>
            <span className="sidebar__icon">⚙️</span>
            <span>Setting</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
