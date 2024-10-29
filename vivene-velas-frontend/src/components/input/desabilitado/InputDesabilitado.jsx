import React from 'react';
import style from './InputDesabilitado.module.css'

const InputDesabilitado = ({valor, nome}) => {
    return (
        <>
            <div className={style["form-group"]}>
            <input type="text" id="ipt_nome" className={style["form-input"]} required placeholder={valor} disabled/>
            <label htmlFor="ipt_nome" className={style["form-label"]}>{nome}</label>
            </div>


        </>

    );
};

export default InputDesabilitado;