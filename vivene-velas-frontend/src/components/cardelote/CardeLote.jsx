import React from 'react';
import style from './CardeLote.module.css'
import editar from '../../img/canetaIcon.svg'
import lixeira from '../../img/lixoIcon.svg'
import qrcode from '../../img/qrcodeIcon.svg'

const CardeLote = ({ imgSrc, title, qtd, qrCode, descr }) => {

    return (
        <>
            <div className={style["card-lote"]}>

                <div className={style["div-img"]}>
                    <img src={`data:image/jpeg;base64,${imgSrc}`}
                        className={style["img"]}
                        alt={title} />
                </div>

                <div className={style["div-pai"]}>

                    <div className={style["div-editar-lote"]}>
                        <img src={editar} alt="" className={style["img-editar-lote"]} />
                        <img src={lixeira} alt="" className={style["img-editar-lote"]} />
                    </div>

                    <div className={style["div-info"]}>
                        <div>

                            <h4 className>{title}</h4>
                            <p className={style["paragrafo"]}>{descr}</p>
                            <p className={style["paragrafo"]}>
                                <strong>Quantidade de velas:</strong> {qtd}
                            </p>

                        </div>
                        <div className={style["div-botao"]}>
                            <div className={style["div-qrcode"]}>
                                <img src={qrcode} alt="" className={style["img-qrcode"]} />
                                <div className={style["div-p"]}>
                                    <p className={style["p-qr-code"]}> {qrCode} </p>
                                </div>
                            </div>
                            <div>
                                <button className={style["botao"]}>Vender Vela</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CardeLote;