import api from "../../api";
import styles from "./SignUp.module.css";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { json, useNavigate } from 'react-router-dom';
import { injectStyle } from "react-toastify/dist/inject-style";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

import { Icon } from "@iconify/react/dist/iconify.js";
import firstStep from "../../utils/imgs/first-step.png"

function SignUpStep2() {
    injectStyle();

    const navigate = useNavigate();

    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [deficiencia, setDeficiencia] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [showDeficienciaInput, setShowDeficienciaInput] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        api.post('/signup', {
            cpf,
            telefone,
            dataNascimento,
            estadoCivil,
            deficiencia,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
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
            <div className={styles["signup2-container"]}>
                <h1 className={styles["signup2-title"]}>Crie seu cadastro</h1>
                <img src={firstStep} alt="First Step" className={styles["signup2-image"]} />

                <div className={styles["signup2-form"]}>
                    <div className={styles["container-form"]}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles["side-by-side"]}>
                                <div className={styles["signup2-input"]}>
                                    <label>CPF <span>*</span></label>
                                    <div className={styles["input-text-icon2"]}>
                                        <input
                                            type="text"
                                            value={cpf}
                                            onChange={(e) => setCpf(e.target.value)}
                                            placeholder="CPF"
                                        />
                                    </div>
                                </div>

                                <div className={styles["signup2-input"]}>
                                    <label>Telefone <span>*</span></label>
                                    <div className={styles["input-text-icon2"]}>
                                        <input
                                            type="text"
                                            value={telefone}
                                            onChange={(e) => setTelefone(e.target.value)}
                                            placeholder="Telefone"
                                        />
                                    </div>
                                </div>

                                <div className={styles["signup2-input"]}>
                                    <label>Data de Nascimento <span>*</span></label>
                                    <div className={styles["input-text-icon2"]}>
                                        <input
                                            type="text"
                                            value={dataNascimento}
                                            onChange={(e) => setDataNascimento(e.target.value)}
                                            placeholder="Data de Nascimento"
                                        />
                                    </div>
                                </div>

                                <div className={styles["signup2-input"]}>
                                    <label>Estado civil <span>*</span></label>
                                    <div className={styles["input-text-icon2"]}>
                                        <input
                                            type="text"
                                            value={estadoCivil}
                                            onChange={(e) => setEstadoCivil(e.target.value)}
                                            placeholder="Escolha uma opção"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles["signup-checkbox"]}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => setShowDeficienciaInput(!showDeficienciaInput)}
                                    />
                                    Pessoa com deficiência
                                </label>
                            </div>

                            {showDeficienciaInput && (
                                <div className={styles["signup2-input-deficiencia"]}>
                                    <label>Deficiência</label>
                                    <div className={styles["input-text-icon2-deficiencia"]}>
                                        <input
                                            type="text"
                                            value={deficiencia}
                                            onChange={(e) => setDeficiencia(e.target.value)}
                                            placeholder="Deficiência"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className={styles["signup2-subtitle"]}>
                                <h3>Endereço</h3>
                            </div>

                            <div className={styles["side-by-side"]}>
                                <div className={styles["signup2-input"]}>
                                    <label>CEP <span>*</span></label>
                                    <div className={styles["input-text-icon2"]}>
                                        <input
                                            type="text"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}
                                            placeholder="CEP"
                                        />
                                    </div>
                                </div>

                                <div className={styles["signup2-input-logradouro"]}>
                                    <label>Logradouro <span>*</span></label>
                                    <div className={styles["input-text-icon2-logradouro"]}>
                                        <input
                                            type="text"
                                            value={logradouro}
                                            onChange={(e) => setLogradouro(e.target.value)}
                                            placeholder="Rua | Avenida | Quadra"
                                        />
                                    </div>
                                </div>

                                <div className={styles["signup2-input"]}>
                                    <label>Número <span>*</span></label>
                                    <div className={styles["input-text-icon2"]}>
                                        <input
                                            type="text"
                                            value={numero}
                                            onChange={(e) => setNumero(e.target.value)}
                                            placeholder="Número"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles["spacing"]}>
                                <div className={styles["side-by-side"]}>
                                    <div className={styles["signup2-input"]}>
                                        <label>Complemento<span>*</span></label>
                                        <div className={styles["input-text-icon2"]}>
                                            <input
                                                type="text"
                                                value={complemento}
                                                onChange={(e) => setComplemento(e.target.value)}
                                                placeholder="Complemento"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles["signup2-input"]}>
                                        <label>Bairro <span>*</span></label>
                                        <div className={styles["input-text-icon2"]}>
                                            <input
                                                type="text"
                                                value={bairro}
                                                onChange={(e) => setBairro(e.target.value)}
                                                placeholder="Bairro"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles["signup2-input"]}>
                                        <label>Cidade <span>*</span></label>
                                        <div className={styles["input-text-icon2"]}>
                                            <input
                                                type="text"
                                                value={cidade}
                                                onChange={(e) => setCidade(e.target.value)}
                                                placeholder="Cidade"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles["signup2-input"]}>
                                        <label>Estado <span>*</span></label>
                                        <div className={styles["input-text-icon2"]}>
                                            <input
                                                type="text"
                                                value={estado}
                                                onChange={(e) => setEstado(e.target.value)}
                                                placeholder="Estado"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles["button2-end"]}>
                                <div className={styles["button2"]}>
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

export default SignUpStep2;
