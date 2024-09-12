import React, { useState } from 'react';
import style from './Pedidos.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import BarraData from '../../components/barradata/BarraData';

const Pedidos = () => {



    return (
        <>
            <Sidebar />

            <div className={style['div-global']}>

                <div className={style['div-topo-busca-filtro']}>
                    <div className={style['div-caixa-busca']}>

                        <div className={style['div-busca-input']}>
                            <input type="text" placeholder='Buscar vela pelo nome' className={style['input']} />
                            <i className=' bi bi-search'></i>
                        </div>

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

                </div>

            </div>



        </>
    );
};

export default Pedidos;
