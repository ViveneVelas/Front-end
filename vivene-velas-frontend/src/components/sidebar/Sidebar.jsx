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
        {collapsed ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
      </button>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/dashboard">
              <i className="bi bi-bar-chart"></i>
              {!collapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li>
            <a href="/calendario">
              <i class="bi bi-calendar4-week"></i>
              {!collapsed && <span>Agenda</span>}
            </a>
          </li>
          <li>
            <a href="/cadastro-velas">
              <i className="bi bi-plus-lg"></i>
              {!collapsed && <span>Adicionar Velas</span>}
            </a>
          </li>
          <li>
            <a href="/estoque">
              <i className="bi bi-boxes"></i>
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
            <a href="/pedidos">
            <i class="bi bi-clipboard-plus"></i>
              {!collapsed && <span>pedidos</span>}
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
