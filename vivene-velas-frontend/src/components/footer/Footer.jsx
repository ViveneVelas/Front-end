import React from "react";
import styles from "./Footer.module.css";
import classNames from "classnames";
import logoFooter from "../../utils/imgs/logo-footer.png";
import { Icon } from '@iconify/react';
import PropTypes from "prop-types";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { toast } from 'react-toastify';


const Footer = ({isSimple}) => {

    injectStyle();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // armazenando email capturado na sessionStorage para recupera-lo depois
        sessionStorage.setItem('email', email);

        //exibindo toast para alertar usuário do próximo passo
        toast.success('Redirecionando para tela de cadastro!');

        // setando intervalo de um segundo para o usuário ler o toast e redirecionando para login
        setTimeout(() => {
            navigate('/signUp');
        }, 2000);
      };

    //utilizando classNames para deixar classes dinâmicas onde valido se a props é true ou false
    const display = classNames({"display-none": isSimple, "display-flex": !isSimple }); 
    const justifyContent = classNames({"justify-center": isSimple, "justify-space-between": !isSimple }); 

    return (
        <footer className={styles[justifyContent]}>
            <div className={styles["footer-container"]}>
                <div className="container-box-one">
                    <img src={logoFooter} className={styles["logo-footer"]} alt="Footer Logo " />
                </div>

                <div className={classNames(styles["container-box-two"], styles[display])}>
                    <div className={styles["input-footer"]}>
                        <label> Cadastre-se </label>
                        <div className={styles["icon-box"]} >
                            <input 
                                type="text" 
                                placeholder="Digite seu email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className={styles["icon-arow"]}>
                                <Icon
                                    aria-label="Arrow Icon from material icons"
                                    icon="pajamas:long-arrow" 
                                    style={{
                                        fontSize: "1.3rem",
                                        color: "#FFFFFF", 
                                        background: "#94CAD2", 
                                        borderBottomRightRadius: ".3rem",
                                        borderTopRightRadius: ".3rem",
                                        display: "flex",
                                        cursor: "pointer",
                                        padding: ".3rem"
                                    }} 
                                    onClick={handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles["icons-footer"]}>
                        <div>
                            <Icon
                                aria-label="Linkedin Icon from material icons"
                                icon="akar-icons:linkedin-v2-fill"
                                style={{fontSize: "15px", color: " #94CAD2"}} 
                            />
                        </div>

                        <div>
                            <Icon
                                aria-label="Facebook Icon from material icons"
                                icon="uil:facebook-f" 
                                style={{fontSize: "15px", color: " #94CAD2"}} 
                            />
                        </div>
                        
                        <div>
                            <Icon 
                                aria-label="Twiter Icon from material icons"
                                icon="basil:twitter-solid" 
                                style={{fontSize: "15px", color: " #94CAD2"}}
                            />
                        </div>
                    </div>
                </div>
               
                <div className={classNames(styles["container-box-tree"], styles[display])}>
                    <div className={styles["footer-navigation"]}>
                        <p>Links Rápidos</p>
                        <div className={styles["footer-links"]}>
                            <div className={styles["div-link"]}>
                                <a href="#">FAQ</a>
                                <a href="#">Ajuda</a>
                            </div>
                            
                            <div className={styles["div-link"]}>
                                <a href="#">Sobre Nós</a>
                                <a href="#">Mais Informações</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["copyright"]}>
                <p>
                    © 2024 Four Innovation. Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    isSimple: PropTypes.bool.isRequired
};       

export default Footer;