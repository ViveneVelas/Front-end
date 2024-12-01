import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Pedidos.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import BarraData from '../../components/barradata/BarraData';
import BuscaPersonalizada from '../../components/bucapersonalisada/BuscaPersolanizada';
import BuscaPersonalizadaData from '../../components/bucapersonalisada/BuscaPersolanizadaData';
import Lupa from '../../img/lupaIcon.svg';
import Calendario from '../../img/calendarioMarromIcon.svg';
import Cliente from '../../img/clienteIcon.svg';

const Pedidos = () => {
    const [pedido, setPedido] = useState([]);
    const [nomeBusca, setNomeBusca] = useState('');
    const [nomeVela, setNomeVela] = useState('');
    const [dataBusca, setDataBusca] = useState('');

    const fetchData = async () => {
        try {
            const queryParams = [];
            if (nomeVela) queryParams.push(`nomeVela=${nomeVela}`);
            if (dataBusca) queryParams.push(`data=${dataBusca}`);
            if (nomeBusca) queryParams.push(`nomeCliente=${nomeBusca}`);

            const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
            const response = await axios.get(`http://44.204.200.174:8080/pedidos/filtro${queryString}`, {
                headers: {
                    'accept': '*/*',
                }
            });

            if (response.data && response.data.length > 0) {
                console.log("Pedido + VENDIDA RESPOSTA: ", response.data[0]);
            } else {
                console.log("Nenhuma pedido encontrada.");
            }

            setPedido(response.data || []);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [nomeBusca, nomeVela, dataBusca]);    

    const handleBuscaChange = (event) => {
        setNomeBusca(event.target.value);
        fetchData()
    };

    const handleDateChange = (event) => {
        setDataBusca(event.target.value);
        fetchData()
    };

    const handleNomeVelaChange = (event) => {
        setNomeVela(event.target.value);
        fetchData()
    };

    return (
        <>
            <Sidebar />

            <div className={style['div-global']}>
                <div className={style['div-topo-busca-filtro']}>
                    <div className={style['div-caixa-busca']}>
                        <BuscaPersonalizadaData
                            nome="Data de entrega"
                            img={Calendario}
                            tipo="text"
                            valor={dataBusca}
                            onChange={handleDateChange}
                        />

                        <BuscaPersonalizada
                            nome="Nome do cliente"
                            img={Cliente}
                            tipo="text"
                            valor={nomeBusca}
                            onChange={handleBuscaChange}
                        />

                        <BuscaPersonalizada
                            nome="Nome da Vela"
                            img={Lupa}
                            tipo="text"
                            valor={nomeVela}
                            onChange={handleNomeVelaChange}
                        />

                    </div>

                    <div className="col-lg-1 justify-content-end display-flex">
                        <a href="/cadastro-pedidos">
                            <button type="button" className="btn btn-primary font-padrao">
                                <i className="bi bi-plus-lg me-1"></i> Adicionar Pedido
                            </button>
                        </a>
                    </div>
                </div>

                <div className={style['dados-pedido']}>
                    {pedido.map((item, index) => (
                        <BarraData
                            key={index}
                            diaSemana={item}
                            nome={nomeBusca}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Pedidos;
