import React from 'react';
import style from './Input.module.css'

const Input = ({valor}) => {
    return (
        <>
            <div className={style["form-group"]}>
                <input type="text" id="ipt_nome" className="form-input" required placeholder=" " />
                <label htmlFor="ipt_nome" className="form-label">{valor}</label>
            </div>


        </>

    );
};

export default Input;