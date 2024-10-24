import React from 'react';
import style from './InputDesabilitado.module.css'

const InputDesabilitado = ({valor}) => {
    return (
        <>
            <div className={style["form-group"]}>
                <input type="text" id="ipt_nome" className="form-input" required placeholder=" " disabled/>
                <label htmlFor="ipt_nome" className="form-label">{valor}</label>
            </div>


        </>

    );
};

export default InputDesabilitado;