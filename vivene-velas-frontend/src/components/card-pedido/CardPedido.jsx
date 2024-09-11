import React from 'react';
import Styles from "./CardPedido.module.css"

const CardPedido = ({ tipoVela, qtde, nomeCliente, qtdeCompra }) => {
    return (
        <>
            <div className={Styles['card-pedidos']}>

                <div className={Styles['div-card-dados']}>

                    <div className={Styles['div-dados-pedido']}>
                        <p className={Styles['titulo']}>Tipo de Vela:</p>
                        <span>{tipoVela}</span>
                    </div>
                    <div className={Styles['div-dados-pedido']}>
                        <p className={Styles['titulo']}>Quatidade:</p>
                        <span>{qtde}</span>

                    </div>
                </div>

                <div className={Styles['div-card-dados']}>

                    <div className={Styles['div-dados-pedido']}>
                        <p className={Styles['titulo']}>Cliente:</p>
                        <span>{nomeCliente}</span>
                    </div>

                    <div className={Styles['div-dados-pedido']}>
                        <p className={Styles['titulo']}> {nomeCliente} comprou <span>{qtdeCompra}</span> vezes</p>
                        
                    </div>
                </div>

                <div className={Styles['div-botao']}>
                    <button className={Styles['botao-cancelar']}>Cancelar</button>
                    <button className={Styles['botao-reagendar']}>Reagendar</button>

                </div>

            </div>
        </>
    );
};

export default CardPedido;