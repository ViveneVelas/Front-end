import React from 'react';
import style from './TextAreaDesabilitado.module.css'

const TextArea = ({ valor }) => {
    return (
        <>
            <div className={style["div-text-area"]}>
                <textarea name="" id="" disabled className={style["text-area"]}>
                    {valor}
                </textarea>
            </div>


        </>

    );
};

export default TextArea;