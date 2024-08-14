import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside id="sidebar" className={styles["sidebar"]}>
      <ul className={styles["sidebar-nav"]} id="sidebar-nav">
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="/">
            <i className="bi bi-grid"></i>
            <span>Velas</span>
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="/">
            <i className="bi bi-grid"></i>
            <span>Estoque</span>
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="/">
            <i className="bi bi-grid"></i>
            <span>Sair</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
