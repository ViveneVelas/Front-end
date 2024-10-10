import React, { useState, useEffect } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'

const EventModal = ({evento, onClose, onDelete, onUpdate}) =>{
    const [editedEvent, setEditedEvent] = useState({...evento});
    const [collapsed, setCollapsed] = useState(true);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setEditedEvent({...editedEvent, [name]:value});
    }

    const handleColorChange = (e)=>{
        setEditedEvent({...editedEvent, color:e.target.value});
    }

    const handleStartDateChange = (e)=>{
        const startDate = new Date(e.target.value);
        if(startDate <= editedEvent.end){
            setEditedEvent({...editedEvent, start:startDate});
        }
    }

    const handleEndDateChange = (e)=>{
        const endDate = new Date(e.target.value);
        if(endDate >= editedEvent.start){
            setEditedEvent({...editedEvent, end:endDate});
        }
    }
    const handleDelete = () =>{
        onDelete(evento.id);
    }
    const handleUpdate = () =>{
        onUpdate(editedEvent);
        onClose();
    }

    const adjustDate = (date) =>{
        const adjustedDate = new Date(date);
        adjustedDate.setHours(adjustedDate.getHours() - 3);
        return adjustedDate.toISOString().slice(0,-8);
    };

    useEffect(() => {
        console.log("AAAAAAAA");
        console.log("AAAAAAAA");
        
        console.log(evento);
      }, []);

    return(
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{editedEvent.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" name='title' value={editedEvent.titulo} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Nome do Cliente</Form.Label>
                        <Form.Control as="textarea" rows={3} name='desc' value={editedEvent.clienteNome} onChange={handleInputChange}/>
                    </Form.Group>
                    <div>

                    <Form.Group controlId="formDesc">
                        <Form.Label>Nome do Cliente</Form.Label>
                        <Form.Control as="textarea" rows={3} name='desc' value={editedEvent.listaDeVelas[0].qtdVela} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Nome do Cliente</Form.Label>
                        <Form.Control as="textarea" rows={3} name='desc' value={editedEvent.listaDeVelas[0].nomeVela} onChange={handleInputChange}/>
                    </Form.Group>
                    </div>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control as="textarea" rows={3} name='desc' value={editedEvent.preco} onChange={handleInputChange}/>
                    </Form.Group>

                        <div>
                    
                        
                        <Form.Group controlId="formColor">
                            <Form.Label>Cor</Form.Label>
                            <Form.Control type="color" name='color' value={editedEvent.color} onChange={handleColorChange}/>
                        </Form.Group>
                        </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button variant='secondary' onClick={()=> setCollapsed(!collapsed)}>
                    {!collapsed ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
                </Button>
                <Button variant='danger' onClick={handleDelete}>
                    Apagar
                </Button>
                <Button variant='primary' onClick={handleUpdate}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventModal;