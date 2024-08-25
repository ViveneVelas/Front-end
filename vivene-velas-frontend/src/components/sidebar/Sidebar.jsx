import React, { useState } from 'react';
import styles from './Sidebar.module.css'; // Importe o CSS Module

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <button className={styles.toggleBtn} onClick={handleToggle}>
        {collapsed ? '☰' : '×'}
      </button>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">
              <i className="bi bi-grid"></i>
              {!collapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li>
            <a href="/vela">
              <i className="bi bi-candle"></i>
              {!collapsed && <span>Velas</span>}
            </a>
          </li>
          <li>
            <a href="/estoque">
              <i className="bi bi-box"></i>
              {!collapsed && <span>Estoque</span>}
            </a>
          </li>
          <li>
            <a href="/login">
              <i className="bi bi-box-arrow-right"></i>
              {!collapsed && <span>Sair</span>}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
