import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import img from '../../utils/imgs/mask-group.png';


function HomePage() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <NavBar />
            
            <div className={styles["main-container"]}>
                <div className={styles["box-1"]}>
                    <h2>Busque sua vaga ideal</h2>
                    <div className={styles["main-input"]}>
                        <input type="text" />
                        <Icon 
                            aria-label="Search Icon from material icons"
                            icon="ri:search-line" 
                            style={{
                                fontSize: "1rem",
                                color: "#000000", 
                                display: "flex",
                                alignSelf: "center",
                                paddingRight: ".5rem",
                            }} 
                        />
                    </div>
                </div>
                <div className={styles["box-2"]}>
                    <img src={img} alt="womens talking" />
                    <button>Cadastre-se Já</button>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default HomePage;
