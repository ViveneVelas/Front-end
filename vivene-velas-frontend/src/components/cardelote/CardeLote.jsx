import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './CardeLote.module.css'
import editar from '../../img/canetaIcon.svg'
import lixeira from '../../img/lixoIcon.svg'
import qrcode from '../../img/qrcodeIcon.svg'

const CardeLote = ({ imgSrc, title, qtd, qrCode, descr, id }) => {
    const deleteVela = async () => {
        console.log(id);
        console.log("aaaaa");
        console.log(id);
        
        try {
          const response = await axios.delete(`http://44.204.200.174/lotes/${id}`, {
            headers: {
              'accept': '*/*'
            }
          });
          console.log('Vela deletada com sucesso:', response.data);
        } catch (error) {
          console.error('Erro ao deletar a vela:', error);
        }
        window.location.reload();
      };

      const vendaVela = async () => {
        console.log(id);
        console.log("Chegeui na venda");
        console.log(id);
        
        try {
          const response = await axios.put(`http://44.204.200.174/lotes/venda/${id}`, {
            headers: {
              'accept': '*/*'
            }
          });
          console.log('Vela deletada com sucesso:', response.data);
        } catch (error) {
          console.error('Erro ao deletar a vela:', error);
        }
        window.location.reload();
      };
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
                        <button onClick={deleteVela}>
                            <img src={editar} alt="" className={style["img-editar-lote"]} />
                        </button>
                        <button onClick={deleteVela}>
                            <img src={lixeira} alt=""  className={style["img-editar-lote"]} />
                        </button>
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
                                <button className={style["botao"]} onClick={vendaVela}>Vender Vela</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CardeLote;