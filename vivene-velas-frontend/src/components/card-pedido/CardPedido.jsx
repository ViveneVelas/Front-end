import React, { useEffect, useState } from 'react';
import Styles from "./CardPedido.module.css"

const CardPedido = ({ valor, nomeCliente, entrega, st }) => {
    const [status, setStatus] = useState(st);
    const [styleNow, setStyleNow] = useState('');

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        const definirStyle = () => {
            if (status == "nao-iniciado") {
                setStyleNow("nao-iniciado")
            } else if (status == 'andamento') {
                setStyleNow("em-andamento")
            } else {
                setStyleNow("em-atraso")
            }
            console.log(status)
        }
        definirStyle()
    },);


    return (
        <>
            <div className={Styles['card-container']}>

                <div className={Styles['card-info-pedido']}>
                    <div>
                        <span> Cliente: <span> {nomeCliente}</span></span>
                    </div>

                    <div>
                        <span> Tipo de Entrega: <span> {entrega}</span></span>
                    </div>

                    <div>
                        <span> Valor total de compra: R$<span> {valor}</span></span>
                    </div>

                </div>

                <div className={Styles['card-status-pedido']}>

                    <div >
                        <span>Status: </span>
                        <select
                            className={`${Styles["select-optional"]} ${Styles[styleNow]}`}
                            onChange={handleStatusChange}
                            value={status}
                        >
                            {styleNow === "em-andamento" && (
                                <>
                                    <option value="em-andamento">Em andamento</option>
                                    <option value="nao-iniciado">Não iniciado</option>
                                    <option value="em-atraso">Em atraso</option>
                                </>
                            )}
                            {styleNow === "nao-iniciado" && (
                                <>
                                    <option value="nao-iniciado">Não iniciado</option>
                                    <option value="em-andamento">Em andamento</option>
                                    <option value="em-atraso">Em atraso</option>
                                </>
                            )}
                            {styleNow === "em-atraso" && (
                                <>
                                    <option value="em-atraso">Em atraso</option>
                                    <option value="nao-iniciado">Não iniciado</option>
                                    <option value="em-andamento">Em andamento</option>

                                </>
                            )}
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