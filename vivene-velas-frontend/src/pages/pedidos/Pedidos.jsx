import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Pedidos.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import BarraData from '../../components/barradata/BarraData';
import BuscaPersonalizada from '../../components/bucapersonalisada/BuscaPersolanizada';
import Lupa from '../../img/lupaIcon.svg'
import Calendario from '../../img/calendarioMarromIcon.svg'
import Cliente from '../../img/clienteIcon.svg'

const Pedidos = () => {

    const [pedido, setPedido] = useState([]);
    const [filter, setFilter] = useState('id');
    const [nomeBusca, setNomeBusca] = useState('');

    const fetchData = async (orderBy) => {
        try {
            const response = await axios.get(`http://localhost:8080/pedidos/datas/hoje`, {
                headers: {
                    'accept': '*/*',
                }
            });

            if (response.data && response.data.length > 0) {
                console.log("pedido + VENDIDA RESPOSTA: " + response.data[0]);
            } else {
                console.log("Nenhuma pedido encontrada.");
            }

            setPedido(response.data || []);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    const fetchByName = async (name) => {
        try {
            const response = await axios.get(`http://localhost:8080/pedidos/filtro-nome/${name}`, {
                headers: {
                    'accept': '*/*',
                }
            });

            if (response.data) {
                console.log("Resultado da busca por nome:", response.data);
                setPedido(response.data || []);
            } else {
                console.log("Nenhuma pedido encontrada com esse nome.");
                setPedido([]);
            }
        } catch (error) {
            console.error('Erro ao buscar pedido pelo nome:', error);
        }
    };

    useEffect(() => {
        if (nomeBusca) {
            fetchByName(nomeBusca);
        } else {
            fetchData(filter);
        }
    }, [filter, nomeBusca]);

    const handleFilterChange = (orderBy) => {
        setFilter(orderBy);
    };

    const handleBuscaChange = (event) => {
        setNomeBusca(event.target.value);
    };

    return (
        <>
            <Sidebar />

            <div className={style['div-global']}>

                <div className={style['div-topo-busca-filtro']}>
                    <div className={style['div-caixa-busca']}>

                        {/* <BuscaPersonalizada nome={"Data de entrega"}
                            img={Calendario} />

                        <BuscaPersonalizada nome={"Nome do cliente"}
                            img={Cliente} /> */}

                        {/* <BuscaPersonalizada nome={"Nome da pedido"}
                            img={Lupa} /> */}

                    </div>

                    <div className="col-lg-5 justify-content-end display-flex">
                                    <a href="/cadastro-pedidos">
                                        <button type="button" className="btn btn-primary font-padrao">
                                            <i className="bi bi-plus-lg me-1"></i> Adicionar Pedido
                                        </button>
                                    </a>
                                </div>

                </div>

                <div className={style['dados-pedido']}>
                    {[...Array(pedido.length)].map((_, index) => (
                        <BarraData
                            diaSemana={pedido[index]}
                        />
                    ))}
                </div>

            </div>



        </>
    );
};

export default Pedidos;
