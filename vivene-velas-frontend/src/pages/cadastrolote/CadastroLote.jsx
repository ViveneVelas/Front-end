import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/input/habilitado/Input'
import InputDesabilitado from '../../components/input/desabilitado/InputDesabilitado';
import CheckBox from '../../components/checkbox/CheckBox';
import TextAreaDesabilitada from '../../components/textarea/desabilitado/TextAreaDesabilitado';
import style from './CadastroLote.module.css'

const CadastroLotes = () => {

    const navigate = useNavigate();


    const vela = () => {
        navigate('/vela');
    };



    return (
        <>
            <Sidebar />

            <div className={style["div-pagina"]}>

                <div className={style["div-info-pagina"]}>

                    <div>
                        <h4>Cadastro de Lote</h4>

                    </div>


                    <div className={style["div-cad-lote"]}>


                        <div className="form-group image-upload">
                            <input
                                type="file"

                                id="ipt_image"
                                className="form-input"
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="ipt_image" className="form-card">

                            </label>
                        </div>


                        <div className={style["div-inputs-form"]}>

                            <div className={style["div-inputs"]}>

                                <select className={style["select-optional"]} name="" id="">
                                    <option disabled selected>Selecione uma vela </option>
                                    <option value="Vela de Cacau">Vela de Cacau</option>
                                    <option value="Vela de Cacau">Vela de Cacau</option>
                                    <option value="Vela de Cacau">Vela de Cacau</option>

                                </select>

                                <Input nome={"Quantidade de velas"} />

                                <div className={style["div-check-box"]}>

                                    <CheckBox valor={"Casa"} />
                                    <CheckBox valor={"Estúdio"} />

                                </div>

                                <InputDesabilitado nome={"Tamanho da vela"} />
                                <InputDesabilitado nome={"Valor"} />

                                <TextAreaDesabilitada nome={"Descrição"}
                                                        valor={""}/>

                            </div>

                            <div className='form-buttons'>

                                <button className='cancel-button' onClick={vela}>Cancelar</button>
                                <button className='confirm-button' onClick={vela}>Cadastrar</button>

                            </div>


                        </div>

                    </div>


                </div>
            </div>

        </>





    );
};

export default CadastroLotes;