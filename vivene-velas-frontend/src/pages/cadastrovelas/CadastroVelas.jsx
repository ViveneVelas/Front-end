import React, { useState } from 'react';
import './CadastroVelas.modules.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'

const CadastroVelas = () => {

    const [image, setImage] = useState(null);

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


    return (
        <>
            <Sidebar />
            <div className="form-align-card">

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
                        <div className="upload-icon"><i class="bi bi-camera"></i></div>
                        <div className="upload-text">Adicionar Foto</div>
                        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
                    </label>
                </div>


                <div className='div-imputs-form'>

                    <div>

                        <div className="form-group">
                            <input type="text" id="ipt_nome" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_nome" className="form-label">Nome</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_aroma" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_aroma" className="form-label">Aroma</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_tamanho" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_tamanho" className="form-label">Tamanho</label>
                        </div>

                        <div className="form-group">
                            <textarea id="ipt_tamanho" className="form-text-area" required placeholder=" " />
                            <label htmlFor="ipt_tamanho" className="form-label">Descrição</label>
                        </div>

                    </div>

                    <div className='form-buttons'>

                        <button className='cancel-button' onClick={vela}>Cancelar</button>
                        <button className='confirm-button' onClick={vela}>Adicionar Vela</button>

                    </div>


                </div>

            </div>



        </>





    );
};

export default CadastroVelas;