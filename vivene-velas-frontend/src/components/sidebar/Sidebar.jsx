import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Sidebar.module.css'; // Importe o CSS Module

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const back = () => {
      localStorage.clear()
      window.location.href = '/login';
  }

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
            <a href="/calendario">
              <i className="bi bi-calendar3-week"></i>
              {!collapsed && <span>Agenda</span>}
            </a>
          </li>
          <li>
            <a href="/">
              <i className="bi bi-plus-lg"></i>
              {!collapsed && <span>Adicionar Velas</span>}
            </a>
          </li>
          <li>
            <a href="/estoque">
              <i className="bi bi-box"></i>
              {!collapsed && <span>Estoque</span>}
            </a>
          </li>
          <li>
            <a href="/vela">
              <i className="bi bi-clipboard-heart"></i>
              {!collapsed && <span>Velas Padronizadas</span>}
            </a>
          </li>
          <li>
            <a href="/">
              <i className="bi bi-people"></i>
              {!collapsed && <span>Clientes</span>}
            </a>
          </li>
          <li onClick={back}>
            <a>
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
