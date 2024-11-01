import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/habilitado/Input'
import TextArea from '../../components/textarea/habilitado/TextArea';
import style from './CadastroPedidos.module.css'
import ScrollContainer from '../../components/scrollcontainer/ScrollContainer';


const CadastroPedidos = () => {

    return (
        <>
            <div>

                <Sidebar />

                <div className={style['div-card-pedidos']}>

                    <div>
                        <Input nome={"Valor unitário"} />
                        <TextArea nome={"Descrição"} />

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

                    <div className={style['div-registro-pedidos']}>

                        <p>Registro do pedido</p>

                        
                        <ScrollContainer>
                            <p>Pedido 1</p>
                            <p>Pedido 1</p>
                            <p>Pedido 1</p>
                            
                        </ScrollContainer>
                        

                    </div>
                </div>
            </div>
        </>
    );
};

export default CadastroPedidos;
