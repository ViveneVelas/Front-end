import React, { useState } from 'react';
import CardPedido from '../../components/card-pedido/CardPedido';
import Sidebar from '../../components/sidebar/Sidebar';
import BarraData from '../../components/barradata/BarraData';

const Pedidos = () => {
   
    
    return (
        <>
            {/* <Sidebar /> */}
            
            <CardPedido/>
            <BarraData/>

        </>
    );
};

export default Pedidos;
