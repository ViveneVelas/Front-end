import React from 'react';
import style from './TextArea.module.css'

const TextArea = ({valor,nome}) => {
    return (
        <>
            <div className={style["div-text-area"]}>
                <label htmlFor="txta_nome" >{nome}</label>
                <textarea name="" id="txta_nome" className={style["text-area"]}>
                    {valor}
                </textarea>
            </div>


        </>

    );
};

export default TextArea;