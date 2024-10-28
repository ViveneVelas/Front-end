import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/input/habilitado/Input'
import InputDesabilitado from '../../components/input/desabilitado/InputDesabilitado';
import CheckBox from '../../components/checkbox/CheckBox';
import style from './CadastroLote.module.css'

const CadastroLotes = () => {

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

            <div>

                <div>
                    <h3>Cadastro de Lote</h3>

                </div>


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

                        </label>
                    </div>


                    <div className='div-imputs-form'>

                        <div>

                            <select className={style["select-optional"]} name="" id="">
                                <option disabled selected>Selecione uma vela </option>
                                <option value="Vela de Cacau">Vela de Cacau</option>
                                <option value="Vela de Cacau">Vela de Cacau</option>
                                <option value="Vela de Cacau">Vela de Cacau</option>

                            </select>

                            <Input valor={"Quantidade de velas"} />

                            <div >

                                <CheckBox valor={"Casa"} />
                                <CheckBox valor={"Estúdio"} />

                            </div>

                            <InputDesabilitado valor={"Tamanho da vela"} />
                            <InputDesabilitado valor={"Valor"} />




                        </div>

                        <div className='form-buttons'>

                            <button className='cancel-button' onClick={vela}>Cancelar</button>
                            <button className='confirm-button' onClick={vela}>Cadastrar</button>

                        </div>


                    </div>

                </div>


            </div>

        </>





    );
};

export default CadastroLotes;