import React, { useState } from 'react';
import './CadastroVelas.modules.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notificacao from '../../components/notificacao/Notificacao';

const CadastroVelas = () => {
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);

    const [image, setImage] = useState(null);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('tamanho', tamanho);
        formData.append('preco', preco);
        formData.append('descricao', descricao);
        formData.append('imagem', image);

        try {
            const response = await axios.post('http://44.204.200.174:8080/velas', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setShowAlertSuccess(true)
            console.log('Resposta:', response.data);
            setTimeout(() => {
                navigate('/vela');
            }, 5000);
        } catch (error) {
            setShowAlertError(true)
            console.error('Erro ao enviar:', error);
            setTimeout(() => {
                setShowAlertError(false)
            }, 5000);
        }
    };

    return (
        <>
            <Sidebar />
            <div className="container">
                <h2 className="title">Cadastro de vela padronizada</h2>
                <form className="form" onSubmit={handleSubmit}>
                    {/* Upload de Imagem */}
                    <div className="image-upload">
                        <input
                            type="file"
                            id="ipt_image"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="ipt_image" className="image-label">
                            {image ? (
                                <img src={URL.createObjectURL(image)} alt="Preview" className="uploaded-image" />
                            ) : (
                                <span>Adicionar Foto</span>
                            )}
                        </label>
                    </div>
                    {/* Inputs de Formulário */}
                    <div className="inputs-container">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="preco">Preço</label>
                            <input
                                type="number"
                                id="preco"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tamanho">Tamanho</label>
                            <select
                                id="tamanho"
                                value={tamanho}
                                onChange={(e) => setTamanho(e.target.value)}
                                required
                            >
                                <option value="" disabled hidden>
                                    Selecione o tamanho
                                </option>
                                <option value="P">Pequeno</option>
                                <option value="M">Médio</option>
                                <option value="G">Grande</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                id="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {/* Botões */}
                    <div className="form-buttons">
                        <button type="button" onClick={() => navigate('/vela')} className="cancel-button">
                            Cancelar
                        </button>
                        <button type="submit" className="confirm-button">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
            {showAlertSuccess && (
                <Notificacao
                    message=" Vela Cadastrada com Sucesso!"
                    duration={5000}
                    type="success"
                    icon="bi bi-check2-circle"
                    onClose={() => setShowAlertSuccess(false)}
                />
            )}

            {showAlertError && (
                <Notificacao
                    message=" Erro ao cadastrar uma vela!"
                    duration={5000}
                    type="error"
                    icon="bi bi-x-circle"
                    onClose={() => setShowAlertSuccess(false)}
                />
            )}
        </>
    );
};

export default CadastroVelas;
