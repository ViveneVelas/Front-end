import React, { useState } from 'react';
import "./CadastroPedidos.modules.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/habilitado/Input'


const CadastroPedidos = () => {

    return (
        <>
            <Sidebar />

            <div>
                <Input valor={"Valor unitário"} />

            </div>

            <div>
            <Input valor={"Quantidade de velas"} />
            <Input valor={"Nome do cliente"} />
            <Input valor={"Data de entrega"} />
            <Input valor={"Endereço"} />
            <Input valor={"Valor do frete"} />

            </div>

            <div>
                

            </div>
        </>
    );
};

export default CadastroPedidos;
