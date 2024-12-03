import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dashIcon from '../../img/dashIcon.svg';
import calendarioIcon from '../../img/calendarioIcon.svg';
import estoqueIcon from '../../img/estoqueIcon.svg';
import velaIcon from '../../img/velaIcon.svg';
import pedidoIcon from '../../img/pedidoIcon.svg';
import styles from './Sidebar.module.css'; // Importe o CSS Module

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768); // Verifica se a largura da tela é menor ou igual a 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chamando para verificar no primeiro carregamento

    return () => window.removeEventListener('resize', handleResize); // Limpar o listener quando o componente for desmontado
  }, []);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const back = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : styles.nonCollapsed} ${isResponsive ? 'responsive' : ''}`}>
      <button className={styles.toggleBtn} onClick={handleToggle}>
        {collapsed ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>}
      </button>
      <nav className={styles.nav}>
        <ul>
          {!isResponsive && (
            <li id='icon' className="menu-item">
              <a href="/dashboard">
                <i><img src={dashIcon} alt="Ícone Dashboard" /></i>
                <span>Dashboard</span>
              </a>
            </li>
          )}

          <li className="menu-item">
            <a href="/estoque">
              <i><img src={estoqueIcon} alt="Ícone Estoque" /></i>
              <span>Estoque</span>
            </a>
          </li>

          <li className="menu-item">
            <a href="/vela">
              <i><img src={velaIcon} alt="Ícone Vela" /></i>
              <span>Velas</span>
            </a>
          </li>

          <li className="menu-item">
            <a href="/pedidos">
              <i><img src={pedidoIcon} alt="Ícone Pedido" /></i>
              <span>Pedidos</span>
            </a>
          </li>

          <li className="menu-item">
            <a href="/cadastro-velas">
              <i className="bi bi-plus-lg"></i>
              <span>Adicionar Velas</span>
            </a>
          </li>

          {!isResponsive && (
            <li id='icon' className="menu-item">
              <a href="/calendario">
                <i><img src={calendarioIcon} alt="Ícone Agenda" /></i>
                <span>Agenda</span>
              </a>
            </li>
          )}
          <li className="menu-item">
            <a onClick={back}>
              <i className="bi bi-box-arrow-right"></i>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
