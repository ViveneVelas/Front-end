import React from 'react';
import style from './CardeLote.module.css'

const CardeLote = ({ imgSrc, title, qtd, qrCode, descr }) => {

    return (
        <>
            <div className={style["card-lote"]}>
                <div className={style["div-img"]}>
                    <img src={imgSrc} 
                         className={style["img"]} 
                         alt={title} />
                </div>
                <div className={style["div-info"]} >
                    <h4 className>{title}</h4>
                    <p className={style["paragrafo"]}>{descr}</p>
                    <p className={style["paragrafo"]}>
                        <strong>Quantidade de velas:</strong> {qtd}
                    </p>
                    <p className={style["paragrafo"]}>
                        <strong>Código QRCode:</strong> 
                        {qrCode}</p>
                    <button>Vender Vela</button>
                </div>
            </div>

        </>
    );
};

export default CardeLote;