import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Cardvela from '../../components/cardvela/Cardvela';
import Busca from '../../components/busca/Busca';
import Filtrar from '../../components/filtrarBusca/Filtrar';

const Vela = () => {
    const [vela, setVela] = useState([]);
    const [filter, setFilter] = useState('id');
    const [nomeBusca, setNomeBusca] = useState('');
    const [loading, setLoading] = useState(true); // Estado de carregamento

    const fetchData = async (orderBy) => {
        setLoading(true); // Ativa o carregamento antes da requisição
        try {
            const response = await axios.get(`http://localhost:8080/velas/filtro/${orderBy}`, {
                headers: {
                    'accept': '*/*',
                }
            });

            if (response.data && response.data.length > 0) {
                console.log("VELA + VENDIDA RESPOSTA: " + response.data[0]);
            } else {
                console.log("Nenhuma vela encontrada.");
            }

            setVela(response.data || []);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        } finally {
            setLoading(false); // Desativa o carregamento após a resposta
        }
    };

    const fetchByName = async (name) => {
        setLoading(true); // Ativa o carregamento antes da requisição
        try {
            const response = await axios.get(`http://localhost:8080/velas/filtro-nome/${name}`, {
                headers: {
                    'accept': '*/*',
                }
            });

            if (response.data) {
                console.log("Resultado da busca por nome:", response.data);
                setVela(response.data || []);
            } else {
                console.log("Nenhuma vela encontrada com esse nome.");
                setVela([]);
            }
        } catch (error) {
            console.error('Erro ao buscar vela pelo nome:', error);
        } finally {
            setLoading(false); // Desativa o carregamento após a resposta
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
           <Sidebar> </Sidebar>
            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12 testeNow">
                            <div className="div-filtros col-lg-12">
                                <div className='div-one col-lg-7'>
                                    <div className="col-lg-7">
                                        <Busca onChange={handleBuscaChange} />
                                    </div>
                                    <Filtrar onFilterChange={handleFilterChange} />
                                    </div>
                                <div className="col-lg-5 justify-content-end display-flex">
                                    <a href="/cadastro-velas">
                                        <button id="adicionar-vela" type="button" className="btn btn-primary font-padrao">
                                            <i className="bi bi-plus-lg me-1"></i> Adicionar Vela
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="">
                                    <div className="card-body">
                                        <div className="news">
                                            <div className="col-lg-12 coln">
                                                {loading ? (
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Carregando...</span>
                                                    </div>
                                                ) : (
                                                    vela.map((item, index) => (
                                                        <Cardvela
                                                            key={index}
                                                            img={item.imagem}
                                                            id={item.id}
                                                            titulo={item.nome}
                                                            descricao={item.descricao}
                                                            preco={item.preco}
                                                            tamanho={item.tamanho}
                                                        />
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="footer-mobile">
                <button type="button" className="btn btn-arrow">
                    <i className="bi bi-arrow-left"></i>
                </button>
                <a href="/cadastro-velas">
                    <button type="button" className="btn btn-primary">
                        <i className="bi bi-plus-lg"></i> Adicionar Vela
                    </button>
                </a>
            </div>
        </>
    );
};

export default Vela;
