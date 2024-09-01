import React,{useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'

const Modaldelete = ({vela, onClose, onDelete}) =>{

    return(
        <Modal show={true} >
            <Modal.Header>
                <Modal.Title>Deseja remover a vela de Chocolate?</Modal.Title>
            </Modal.Header>
            
            <Modal.Footer className='justify-content-between'>
                <Button variant='primary' className='btn-red' onClick={onClose}>
                    Cancelar
                </Button>
                <Button variant='primary' className='btn-green' onClick={onDelete}>
                    Deletar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modaldelete;