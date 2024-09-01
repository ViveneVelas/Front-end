import React,{useState} from 'react';
import {Modal, Button, Form, Collapse} from 'react-bootstrap'

const Modalupdate = () =>{
    const [collapsed, setCollapsed] = useState(true);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
    }

    const handleColorChange = (e)=>{
    }

    const handleStartDateChange = (e)=>{
        const startDate = new Date(e.target.value);
        
    }

    const handleEndDateChange = (e)=>{
        const endDate = new Date(e.target.value);
    }



    return(
        <Modal show={true} >
            <Modal.Header>
                <Modal.Title>Titulo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" name='title' value="Titulo" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} name='desc' value="{editedEvent.desc" onChange={handleInputChange}/>
                    </Form.Group>

                    <Collapse in={!collapsed}>
                        <div>
                        <Form.Group controlId="formInicio">
                            <Form.Label>Início</Form.Label>
                            <Form.Control type="datetime-local" name='start' value="{adjustDate(editedEvent.start)}" onChange={handleStartDateChange}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formEnd">
                            <Form.Label>Fim</Form.Label>
                            <Form.Control type="datetime-local" name='end' value="{adjustDate(editedEvent.end)}" onChange={handleEndDateChange}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formColor">
                            <Form.Label>Cor</Form.Label>
                            <Form.Control type="color" name='color' value="editedEvent.color}" onChange={handleColorChange}/>
                        </Form.Group>

                        <Form.Group controlId="formTipo">
                            <Form.Label>Tipo</Form.Label>
                            {/* <Form.Control type="text" name='tipo' value={editedEvent.tipo} onChange={handleInputChange}/> */}
                        </Form.Group>
                        </div>
                    </Collapse>
                </Form>
            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button variant='secondary' onClick={()=> setCollapsed(!collapsed)}>
                    {!collapsed ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
                </Button>
                <Button variant='primary' >
                    Salvar Alterações
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modalupdate;