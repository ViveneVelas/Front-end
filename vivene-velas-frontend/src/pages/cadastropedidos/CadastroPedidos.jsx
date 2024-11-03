import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Input from '../../components/input/habilitado/Input'
import TextArea from '../../components/textarea/habilitado/TextArea';
import style from './CadastroPedidos.module.css'
import ScrollContainer from '../../components/scrollcontainer/ScrollContainer';
import Pedido from '../../components/pedido/Pedido';


const CadastroPedidos = () => {

    return (
        <>
            <div>

                <Sidebar />

                <div className={style['div-card-pedidos']}>

                    <div>

                        <TextArea nome={"Descrição"} />
                        <Input nome={"Valor unitário"} />

                    </div>

                    <div className={style['div-info-pedidos']}>
                        <div>
                            <Input nome={"Quantidade de velas"} />
                            <Input nome={"Nome do cliente"} />
                            <Input nome={"Data de entrega"} />
                            <Input nome={"Endereço"} />
                            <Input nome={"Valor do frete"} />

                        </div>

                        <button>Adicionar Pedido</button>

                    </div>

                    <div className={style['div-registro-pedidos']}>

                        <div>

                            <p>Registro do pedido</p>


                            <ScrollContainer>
                                <Pedido nomeVela={"Vela de cacau"}
                                    statusEstoque={"Em estoque"}
                                    qtdeVelas={3}
                                    valorVela={"20,00"}
                                    valorPedido={"60,00"}
                                />

                                <Pedido nomeVela={"Vela de cacau"}
                                    statusEstoque={"Em estoque"}
                                    qtdeVelas={3}
                                    valorVela={"20,00"}
                                    valorPedido={"60,00"}
                                />

                                <Pedido nomeVela={"Vela de cacau"}
                                    statusEstoque={"Em estoque"}
                                    qtdeVelas={3}
                                    valorVela={"20,00"}
                                    valorPedido={"60,00"}
                                />


                            </ScrollContainer>
                        </div>

                        <div className={style['div-botoes']}>
                            <button>Cancelar</button>
                            <button>Salvar Pedidos</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default CadastroPedidos;
