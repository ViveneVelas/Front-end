import React, { useState }  from 'react';
import Styles from "./CardPedido.module.css"

const CardPedido = ({ valor, nomeCliente, endereco }) => {
    const [status, setStatus] = useState("nao-iniciado");

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };


    return (
        <>
            <div className={Styles['card-container']}>

                <div className={Styles['card-info-pedido']}>
                    <div>
                        <span> Cliente: <span> {nomeCliente}</span></span>
                    </div>

                    <div>
                        <span> Endereço: <span> {endereco}</span></span>
                    </div>

                    <div>
                        <span> Valor total de compra: R$<span> {valor}</span></span>
                    </div>

                </div>

                <div className={Styles['card-status-pedido']}>

                    <div >
                        <span>Status: </span>
                        <select
                            className={`${Styles["select-optional"]} ${Styles[status]}`}
                            onChange={handleStatusChange}
                            value={status}
                        >
                            <option value="nao-iniciado">Não iniciado</option>
                            <option value="em-andamento">Em andamento</option>
                            <option value="em-atraso">Em atraso</option>
                        </select>
                    </div>

                    <div className={Styles["div-botoes"]}>
                        <button className={Styles["botao-cancelar"]}>Cancelar</button>
                        <button className={Styles["botao-atualizar"]}>Atualizar</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default CardPedido;