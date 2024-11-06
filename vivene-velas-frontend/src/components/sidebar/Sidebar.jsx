import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dashIcon from '../../img/dashIcon.svg'
import calendarioIcon from '../../img/calendarioIcon.svg'
import estoqueIcon from '../../img/estoqueIcon.svg'
import velaIcon from '../../img/velaIcon.svg'
import pedidoIcon from '../../img/pedidoIcon.svg'
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
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : styles.nonCollapsed}`}>
      <button className={styles.toggleBtn} onClick={handleToggle}>
        {collapsed ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
      </button>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/dashboard">
              <i><img src={dashIcon} alt="" /></i>
              {!collapsed && <span>Dashboard</span>}
            </a>
          </li>

          <li>
            <a href="/estoque">
              <i><img src={estoqueIcon} alt="" /></i>
              {!collapsed && <span>Estoque</span>}
            </a>
          </li>

          <li>
            <a href="/vela">
              <i><img src={velaIcon} alt="" /></i>
              {!collapsed && <span>Velas Padronizadas</span>}
            </a>
          </li>

          <li>
            <a href="/pedidos">
              <i><img src={pedidoIcon} alt="" /></i>
              {!collapsed && <span>Pedidos</span>}
            </a>
          </li>


          <li>
            <a href="/cadastro-velas">
              <i className="bi bi-plus-lg"></i>
              {!collapsed && <span>Adicionar Velas</span>}
            </a>
          </li>

          <li>
            <a href="/calendario">
              <i><img src={calendarioIcon} alt="" /></i>
              {!collapsed && <span>Agenda</span>}
            </a>

            <li onClick={back}>
              <a>
                <i className="bi bi-box-arrow-right"></i>
                {!collapsed && <span>Sair</span>}
              </a>
            </li>

          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
