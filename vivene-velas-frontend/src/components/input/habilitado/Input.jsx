import React from 'react';
import style from './Input.module.css'

const Input = ({valor, nome}) => {
    return (
        <>
            <div className={style["form-group"]}>
                <input type="text" id="ipt_nome" className={style["form-input"]} required placeholder="" value={valor} /> 
                <label htmlFor="ipt_nome" className={style["form-label"]}>{nome}</label>
            
            
            </div>


        </>

    );
};

export default Input;