import React, { useState } from 'react';
import style from './Pedidos.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import BarraData from '../../components/barradata/BarraData';
import BuscaPersonalizada from '../../components/bucapersonalisada/BuscaPersolanizada';
import Lupa from '../../img/lupaIcon.svg'
import Calendario from '../../img/calendarioMarromIcon.svg'
import Cliente from '../../img/clienteIcon.svg'

const Pedidos = () => {



    return (
        <>
            <Sidebar />

            <div className={style['div-global']}>

                <div className={style['div-topo-busca-filtro']}>
                    <div className={style['div-caixa-busca']}>

                       <BuscaPersonalizada nome={"Data de entrega"}
                                           img={Calendario}/>

                       <BuscaPersonalizada nome={"Nome do cliente"}
                                           img={Cliente}/>

                       <BuscaPersonalizada nome={"Nome da vela"}
                                           img={Lupa}/>                        

                    </div>

                    <button className={style['botao-adicionar-pedido']}>
                        <i class="bi bi-plus"></i>
                        Adicionar Pedido</button>

                </div>

                <div className={style['dados-pedido']}>

                    <BarraData />
                    <BarraData />
                    <BarraData />

                </div>

            </div>



        </>
    );
};

export default Pedidos;
