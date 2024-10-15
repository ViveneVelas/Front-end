import React, { useState } from 'react';
import './CadastroVelas.modules.css'; 
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CadastroVelas = () => {
    const [image, setImage] = useState(null);
    const [nome, setNome] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(""); 
    const navigate = useNavigate();

    const vela = () => {
        navigate('/vela');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("tamanho", tamanho);
        formData.append("descricao", descricao);
        formData.append("preco", preco);
        if (image) {
            const blob = await fetch(image).then(r => r.blob());
            formData.append("imagem", blob, "imagem.jpg"); 
        }

        try {
            await axios.post("http://localhost:8080/velas", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            alert("Vela cadastrada com sucesso!");
            navigate("/estoque");
        } catch (error) {
            console.error("Erro ao cadastrar vela:", error);
            alert("Erro ao cadastrar a vela. Verifique os campos.");
        }
    };

    return (
        <>
            <Sidebar />
            <form onSubmit={handleSubmit} className="form-align-card">
                {/* Coluna da imagem */}
                <div className="form-group image-upload">
                    <input
                        type="file"
                        id="ipt_image"
                        className="form-input"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="ipt_image" className="form-card">
                        <div className="upload-icon"><i className="bi bi-camera"></i></div>
                        <div className="upload-text">Adicionar Foto</div>
                        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
                    </label>
                </div>

                {/* Coluna dos inputs */}
                <div className='div-imputs-form'>
                    <div className="form-group">
                        <input
                            type="text"
                            id="ipt_nome"
                            className="form-input"
                            required
                            placeholder=" "
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} 
                        />
                        <label htmlFor="ipt_nome" className="form-label">Nome</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            id="ipt_tamanho"
                            className="form-input"
                            required
                            placeholder=" "
                            value={tamanho}
                            onChange={(e) => setTamanho(e.target.value)} 
                        />
                        <label htmlFor="ipt_tamanho" className="form-label">Tamanho</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="number" 
                            id="ipt_preco"
                            className="form-input"
                            required
                            placeholder=" "
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)} 
                        />
                        <label htmlFor="ipt_preco" className="form-label">Preço</label>
                    </div>

                    <div className="form-group">
                        <textarea
                            id="ipt_descricao"
                            className="form-text-area"
                            required
                            placeholder=" "
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)} 
                        />
                        <label htmlFor="ipt_descricao" className="form-label">Descrição</label>
                    </div>
                </div>

                {/* Botões */}
                <div className='form-buttons'>
                    <button type='button' className='cancel-button' onClick={vela}>Cancelar</button>
                    <button type='submit' className='confirm-button'>Adicionar Vela</button>
                </div>
            </form>
        </>
    );
};

export default CadastroVelas;
