import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/input/habilitado/Input'
import InputDesabilitado from '../../components/input/desabilitado/InputDesabilitado';
import CheckBox from '../../components/checkbox/CheckBox';
import TextArea from '../../components/textarea/desabilitado/TextAreaDesabilitado';
import style from './AtualizarLote.module.css'

const AtualizacaoLote = () => {

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
                        <h4>Atualizar de Lote</h4>

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

                                <Input nome={"Quantidade de velas"}
                                       valor={"20"}/>

                                <div className={style["div-check-box"]}>

                                    <CheckBox nome={"Casa"} />
                                    <CheckBox nome={"Estúdio"} />

                                </div>

                                <InputDesabilitado nome={"Tamanho da vela"} />
                                <InputDesabilitado nome={"Valor"} />

                                <TextArea nome={"Descrição"}/>

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

export default AtualizacaoLote;