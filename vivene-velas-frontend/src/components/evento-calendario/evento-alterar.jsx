import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import style from './evento-calendario.module.css';
import axios from 'axios';


const EventModal = ({ evento, onClose, onDelete, onUpdate, valor, nomeCliente, entrega, st, id, eventoFechar }) => {
    const [editedEvent, setEditedEvent] = useState({ ...evento });
    const [collapsed, setCollapsed] = useState(true);
    const [eventos, setEventos] = useState([])
    const [inputs, setInput] = useState([])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedEvent({ ...editedEvent, [name]: value });
    }

    const handleColorChange = (e) => {
        setEditedEvent({ ...editedEvent, color: e.target.value });
    }

    const handleStartDateChange = (e) => {
        const startDate = new Date(e.target.value);
        if (startDate <= editedEvent.end) {
            setEditedEvent({ ...editedEvent, start: startDate });
        }
    }

    const handleEndDateChange = (e) => {
        const endDate = new Date(e.target.value);
        if (endDate >= editedEvent.start) {
            setEditedEvent({ ...editedEvent, end: endDate });
        }
    }
    const handleDelete = () => {
        onDelete(evento.id);
    }
    const handleUpdate = () => {
        onUpdate(editedEvent);
        onClose();
    }

    useEffect(() => {

        const fetchPedidos = async () => {

            try {
                const response = await axios.get('/host/pedidos/' + id, {
                    headers: {
                        'accept': 'application/json'
                    }
                });
                console.log(response.data);

                setEventos(response.data); // Armazena os dados retornados no estado
                console.log(response.data);

            } catch (err) {
                console.log(err);
            }

            if (st == "concluido") {
                console.log("a");

                setInput(["Concluído", "Em Andamento", "Não Iniciado"])
            } else if (st == "em-andamento") {
                console.log("b");
                setInput(["Em Andamento", "Concluído", "Não Iniciado"])
            } else {
                console.log("c");
                setInput(["Não Iniciado", "Concluído", "Em Andamento"])
            }
        };

        fetchPedidos();
    }, []);

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Nome do Cliente: {nomeCliente}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <br />
                    <div className={style["pedido_card"]}>
                        <div className={style['margin_card']}>

                            <div className={style["pedido_header"]}>
                                <p>Pedido</p>
                            </div>
                            <div className={style["pedido_itens"]}>
                                {eventos.listaDeVelas && Array.isArray(eventos.listaDeVelas) ? (
                                    eventos.listaDeVelas.map((vela, index) => (
                                        <div key={index}>
                                            <p>{index + 1}: {vela.nomeVela} - Quantidade: {vela.qtdVela}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>Nenhuma vela encontrada.</p>
                                )}
                            </div>
                        </div>
                        <div className={style["pedido_preco"]}>
                            Preço: R$  {valor}
                        </div>
                    </div>
                    <br />
                    <div className={style["div_com_input"]}>
                        <h6>
                            Data: { }
                        </h6>
                        <input type="text" value={entrega} />
                    </div>
                    <div className={style["div_com_input"]}>
                        <h6>
                            Status do Pedido:
                        </h6>
                        <select name="status" id="status">
                            {inputs && Array.isArray(inputs) ? (
                                inputs.map((vela, index) => (
                                    <option key={index} value={vela}>
                                        {vela}
                                    </option>
                                ))
                            ) : (
                                <option value="aaaaa">Nenhuma vela encontrada.</option>
                            )}
                        </select>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button variant='primary' onClick={eventoFechar}>
                    Cancelar
                </Button>
                <Button variant='primary' onClick={handleUpdate}>
                    Alterar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventModal;