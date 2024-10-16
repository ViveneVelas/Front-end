import React from "react";
import style from "./AdicionarLote.module.css"
import addIcon from '../../img/adicionarIcon.svg'


const AdicionarLote = () => {
    return (
        <>
            <div className={style['card-adicionar-estoque']}>

                <div>
                    <img src={addIcon} alt="Simbolo matematico de adicionar" />
                </div>

                <p>Adicionar lote de velas</p>
            </div>

        </>
    );
};

export default AdicionarLote;
