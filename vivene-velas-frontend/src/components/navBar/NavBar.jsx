import React from "react";
import styles from "./NavBar.module.css"
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import logoNavbar from "../../utils/imgs/logo-nav-white.svg";


const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <nav className={styles["navbar"]}>
            <img src={logoNavbar} className={styles["navbar-logo"]} alt="NavBar Logo" />
            <div className={styles["navbar-container"]}>
                <div className={styles["nav-links"]}>
                    <Icon 
                        icon="mdi:house" 
                        alt="House Icon" 
                        style={{
                            fontSize: "1.5rem",
                            color: "#94CAD2", 
                            background: "transparent", 
                            display: "flex",
                            cursor: "pointer"
                        }} 
                        onClick={() => handleNavigate("/")}
                    />
                    <p onClick={() => handleNavigate("/signup")}> Ver Vagas </p>
                    <p onClick={() => handleNavigate("/signup")}> Ver Empresas </p>
                </div>

                <p onClick={() => handleNavigate("/login")}> Logar </p>
                
            </div>
        </nav>
    )
}

export default NavBar;