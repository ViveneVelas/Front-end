import React, { useState } from 'react';
import "./CadastroPedidos.modules.css"
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/habilitado/Input'
import TextArea from '../../components/textarea/habilitado/TextArea';


const CadastroPedidos = () => {

    return (
        <>
            {/* <Sidebar /> */}

            <div>
                <Input nome={"Valor unitário"} />
                <TextArea nome={"Descrição"}/>

            </div>

            <div>
            <Input nome={"Quantidade de velas"}
                   />
            <Input nome={"Nome do cliente"}
             />
            <Input nome={"Data de entrega"} />
            <Input nome={"Endereço"} />
            <Input nome={"Valor do frete"} />

            </div>

            <div>
                

            </div>
        </>
    );
};

export default CadastroPedidos;
