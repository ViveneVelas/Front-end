import React, { useEffect, useState } from 'react';
import Styles from "./CardPedido.module.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const CardPedido = ({ valor, nomeCliente, entrega, st, id }) => {
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


    const deleteVela = async () => {
        try {
            const response = await axios.delete(`/host/pedidos/${id}`, {
                headers: {
                    'accept': '*/*'
                }
            });
            console.log('Vela deletada com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao deletar a vela:', error);
        }
        // window.location.reload();
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={Styles['card-container']}>

                <div className={Styles['card-info-pedido']}>
                    <div>
                        <span> Cliente: <span> {nomeCliente}</span></span>
                    </div>

                    <div>
                        <span> Local: <span> {entrega}</span></span>
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
                                    <option value="em-atraso">Concluído</option>
                                </>
                            )}
                            {styleNow === "nao-iniciado" && (
                                <>
                                    <option value="nao-iniciado">Não iniciado</option>
                                    <option value="em-andamento">Em andamento</option>
                                    <option value="em-atraso">Concluído</option>
                                </>
                            )}
                            {styleNow === "em-atraso" && (
                                <>
                                    <option value="em-atraso">Concluído</option>
                                    <option value="nao-iniciado">Não iniciado</option>
                                    <option value="em-andamento">Em andamento</option>

                                </>
                            )}
                        </select>


                    </div>

                    <div className={Styles["div-botoes"]}>
                        <button className={Styles["botao-cancelar"]} onClick={handleShow}>Cancelar</button>
                        <button className={Styles["botao-atualizar"]}>Reagendar</button>
                    </div>

                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancelar Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja cancelar esse pedido?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={deleteVela}>
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CardPedido;