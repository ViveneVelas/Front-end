import React, { useState } from 'react';
import './CadastroVelas.modules.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../../components/input/habilitado/Input'
import Textarea from '../../components/textarea/habilitado/TextArea'

const CadastroVelas = () => {
    const [image, setImage] = useState(null);
    const [nome, setNome] = useState('');
    const [preco, setpreco] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigate = useNavigate();

    const vela = () => {
        navigate('/vela');
    };

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
            const response = await axios.post('http://localhost:8080/velas', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log('Resposta:', response.data);
            alert('Vela adicionada com sucesso!');
            navigate('/vela');
        } catch (error) {
            console.error('Erro ao enviar:', error);
            alert('Erro ao adicionar a vela.');
        }
    };

    return (
        <>
            <Sidebar />
            <div className="form-align-card">
                <form className="form" onSubmit={handleSubmit}>
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
                            {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" />}
                        </label>
                    </div>

                    <div className="div-imputs-form">
                        <div className="form-group">
                            <Input nome={"Nome da vela"}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                        </div>

                        <div className="form-group">

                            <div className={"form-group"}>
                            <input type="number" id="ipt_nome" className={"form-input"} required placeholder="" value={preco} onChange={(e) => setpreco(e.target.value)} /> 
                                <label htmlFor="ipt_nome" className={"form-label"}>{"Preço"}</label>
                            </div>

                        </div>

                        <div className="form-group">
                            <select
                                id="sel_tamanho"
                                className="form-input"
                                required
                                value={tamanho}
                                onChange={(e) => setTamanho(e.target.value)}
                            >
                                <option value="" disabled hidden>
                                    Tamanho
                                </option>
                                <option value="P">Pequeno</option>
                                <option value="M">Médio</option>
                                <option value="G">Grande</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <Textarea
                                nome={"Descrição da vela"}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                            <label htmlFor="ipt_descricao" className="form-label">Descrição</label>
                        </div>

                        <div className="form-buttons">
                            <button type="button" className="cancel-button" onClick={vela}>Cancelar</button>
                            <button type="submit" className="confirm-button">Adicionar Vela</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CadastroVelas;
