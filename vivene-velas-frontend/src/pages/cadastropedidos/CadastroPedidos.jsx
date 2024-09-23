import React, { useState } from 'react';
import "./CadastroPedidos.modules.css"
import Sidebar from '../../components/sidebar/Sidebar';


const CadastroPedidos = () => {

    const [image, setImage] = useState(null);
    const [selectedOption, setSelectedOption] = useState(''); // Estado para armazenar a seleção do usuário

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

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
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
                        <div className="upload-icon"><i className="bi bi-camera"></i></div>
                        <div className="upload-text">Adicionar Foto</div>
                        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
                    </label>
                </div>

                <div className='div-imputs-form'>

                    <div className="form-group">
                        <label htmlFor="optional-select" className="form-label">Vela do pedido</label>
                        <select
                            id="optional-select"
                            className="form-select-optional"
                            value={selectedOption}
                            onChange={handleSelectChange}
                        >
                            <option value="" disabled>Selecione uma opção...</option>
                            <option value="Vela de Manga">Vela de Manga</option>
                            <option value="Vela de Maracujá">Vela de Maracujá</option>
                            <option value="Vela de Açaí">Vela de Açaí</option>
                        </select>
                    </div>

                    <div className='div-imputs-form'>
                        <div className="form-group">
                            <textarea id="ipt_descricao" className="form-text-area" required placeholder=" " />
                            <label htmlFor="ipt_descricao" className="form-label">Descrição</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_valor_unit" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_valor_unit" className="form-label">Valor unitário</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_valor_pedido" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_valor_pedido" className="form-label">Valor do pedido</label>
                        </div>
                    </div>

                </div>

                <div className='div-imputs-form'>

                    <div>

                        <div className="form-group">
                            <input type="text" id="ipt_qtde_velas" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_qtde_velas" className="form-label">Quantidade de velas</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_aroma" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_aroma" className="form-label">Nome do cliente</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_tamanho" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_tamanho" className="form-label">Data de entrega</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="ipt_tamanho" className="form-input" required placeholder=" " />
                            <label htmlFor="ipt_tamanho" className="form-label">Endereço</label>
                        </div>

                    </div>

                    <div className='form-buttons'>

                        <button className='cancel-button' onClick={""}>Cancelar Pedido</button>
                        <button className='confirm-button'onClick={""}>Salvar Pedido</button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default CadastroPedidos;
