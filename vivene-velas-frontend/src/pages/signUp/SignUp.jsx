import api from "../../api";
import styles from "./SignUp.module.css";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { json, useNavigate } from 'react-router-dom';
import { injectStyle } from "react-toastify/dist/inject-style";
// import InputMask from 'react-input-mask'; // npm i react-input-mask - Lembrar de Importar
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

import womenWorking from '../../utils/imgs/women-working.png';
import { Icon } from "@iconify/react/dist/iconify.js";
import SignUpStep2 from "./SignUpStep2";

function SignUp() {
    injectStyle();

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [cpf, setCpf] = useState('');
    // const [cep, setCep] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('/signup', {
            nome,
            email,
            senha
            // cpf,
            // cep
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 201) {
                    toast.success('Cadastro realizado com sucesso!');
                    navigate('/login');
                } else {
                    throw new Error('Ops! Ocorreu um erro interno.');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };


    return (
        <>
            <NavBar />
            <div className={styles["signup-container"]}>
                <div className={styles["signup-img"]}>
                    <img src={womenWorking} alt="Women working" />
                </div>
                <div className={styles["signup-form"]}>
                    <h2>Crie seu cadastro</h2>
                    <div className={styles["container-form"]}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles["signup-input"]}>
                                <label>Nome completo <span>*</span></label>
                                <div className={styles["input-text-icon"]}>
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        placeholder="Nome completo"
                                    />
                                    <Icon
                                        aria-label="Question mark from material icons"
                                        icon="mdi:help"
                                        style={{
                                            fontSize: "1.3rem",
                                            color: "#94CAD2",
                                            display: "flex",
                                            alignSelf: "center",
                                            paddingRight: ".5rem",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className={styles["signup-input"]}>
                                <label>Email <span>*</span></label>
                                <div className={styles["input-text-icon"]}>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                    <Icon
                                        aria-label="Email from material icons"
                                        icon="pepicons-pencil:letter"
                                        style={{
                                            fontSize: "1.3rem",
                                            color: "#94CAD2",
                                            display: "flex",
                                            alignSelf: "center",
                                            paddingRight: ".5rem",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className={styles["signup-input-password"]}>
                                <label>Senha <span>*</span></label>
                                <div className={styles["input-text-icon-password"]}>
                                    <input
                                        type="password"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        placeholder="Senha"
                                    />
                                    <Icon
                                        aria-label="Password from material icons"
                                        icon="octicon:lock-24"
                                        style={{
                                            fontSize: "1.3rem",
                                            color: "#94CAD2",
                                            display: "flex",
                                            alignSelf: "center",
                                            paddingRight: ".5rem",
                                        }}
                                    />
                                </div>
                            </div>


                            <div className={styles["signup-checkbox"]}>
                                <label>
                                    <input type="checkbox" />Concordo com os
                                    <a href=""> termos de uso</a>
                                </label>
                            </div>

                            <div className={styles["side-by-side"]}>
                                <div className={styles["login-link"]}>
                                    <p>Já é cadastrado?</p>
                                    <a href="/login" className={styles["signup-href"]}>Clique aqui</a>
                                </div>


                                <div className={styles["button"]}>
                                    <button type="submit" >Prosseguir</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <Footer isSimple={false} />
        </>
    );
}


export default SignUp
