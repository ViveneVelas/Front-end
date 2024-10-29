import React from 'react';
import style from './TextArea.module.css'

const TextArea = ({valor,nome}) => {
    return (
        <>
            <div className={style["div-text-area"]}>
                <textarea name="" id="txta_nome" className={style["text-area"]}>
                    {valor}
                </textarea>
                <label htmlFor="txta_nome" className={style["form-label"]}>{nome}</label>
            </div>


        </>

    );
};

export default TextArea;