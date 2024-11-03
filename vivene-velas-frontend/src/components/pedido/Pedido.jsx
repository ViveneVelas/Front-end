import React from "react";
import style from './Pedido.module.css'
import lixeira from '../../img/lixoIcon.svg'

const Pedido = ({ nomeVela, statusEstoque, qtdeVelas, valorVela, valorPedido }) => {
  return (
    <>

<div >

      <div className={style['card-pedido']}>
        <div className={style['div-dados-pedido']}>
          <span className={style['span-info-vela']}>{nomeVela}</span>
          <span className={style['span-info-status-estoque']}>{statusEstoque}</span>
        </div>

        <div className={style['div-dados-pedido']}>
          <span className={style['span-info-vela']}>Qtde: {qtdeVelas}</span>
        </div>

        <div className={style['div-dados-pedido']}>
          <span className={style['span-info-vela']}>R$ {valorVela}</span>
          <span className={style['span-info-pedido']}>R$ {valorPedido}</span>
        </div>


        <img src={lixeira} alt="" />

      </div >

<hr />
      {/* <div className={style['div-hr']}></div> */}
</div >
    </>
  );
};

export default Pedido;