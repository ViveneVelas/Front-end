import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import style from './evento-calendario.module.css';

const EventModal = ({ evento, onClose, onDelete, onUpdate }) => {
    const [editedEvent, setEditedEvent] = useState({ ...evento });
    const [collapsed, setCollapsed] = useState(true);

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
        console.log(evento);
    }, []);

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{editedEvent.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <h6>
                        Nome do Cliente: {editedEvent.clienteNome}
                    </h6>
                    <br />
                    <div className={style["pedido_card"]}>
                        <div className={style['margin_card']}>

                        <div className={style["pedido_header"]}>
                            <p>Pedido</p>
                        </div>
                        <div className={style["pedido_itens"]}>
                            {editedEvent.listaDeVelas.map((vela, index) => (
                                <div key={index}>
                                    <p>{index + 1}: {vela.nomeVela} - Quantidade: {vela.qtdVela}</p>
                                </div>
                            ))}
                        </div>
                            </div>
                        <div className={style["pedido_preco"]}>
                            Preço: R$  {editedEvent.preco}
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button variant='primary' onClick={handleDelete}>
                    Apagar
                </Button>
                <Button variant='primary' onClick={handleUpdate}>
                    Alterar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventModal;