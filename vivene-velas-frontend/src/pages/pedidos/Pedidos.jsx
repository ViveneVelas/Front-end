import React, { useState } from 'react';
import style from './Pedidos.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import BarraData from '../../components/barradata/BarraData';
import Busca from '../../components/busca/Busca';

const Pedidos = () => {



    return (
        <>
            <Sidebar />

            <div className={style['div-global']}>

                <div className={style['div-topo-busca-filtro']}>
                    <div className={style['div-caixa-busca']}>

                        <Busca/>

                        <div >
                            <button className={style['botao-filtrar']}>
                                <i class="bi bi-filter"></i>
                                Filtrar
                            </button>
                        </div>

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
