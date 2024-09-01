import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Cardvela from '../../components/cardvela/Cardvela';
import Busca from '../../components/busca/Busca';
import velaPng from "../../img/vela.png"

const Vela = () => {
    const [vela, setVela] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [velaResponse] = await Promise.all([
                    axios.get('http://localhost:8080/velas', {
                        headers: {
                            'accept': '*/*',
                        },
                    })
                ]);

                if (velaResponse.data && velaResponse.data.length > 0) {
                    console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data[0]);
                } else {
                    console.log("Nenhuma vela encontrada.");
                }

                setVela(velaResponse.data || []);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <Sidebar />
            <main id="main" className="main">

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="div-filtros col-lg-12">
                                <div className='div-one col-lg-7'>
                                    <div className="col-lg-7">
                                        <Busca />
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="button" className="btn btn-secondary font-padrao"><i className="bi bi-filter me-1"></i> Filtrar</button>
                                    </div>

                                </div>

                                <div className="col-lg-3 justify-content-end display-flex">
                                    <button type="button" className="btn btn-primary font-padrao" ><i className="bi bi-plus-lg me-1"></i> Adicionar Vela</button>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="">
                                    <div className="card-body">
                                        <div className="news">
                                            <div className=" col-lg-12 coln">
                                                {[...Array(vela.length)].map((_, index) => (
                                                    <Cardvela
                                                        key={index}
                                                        id={vela[index].id}
                                                        img={velaPng}
                                                        titulo={vela[index].nome}
                                                        descricao={vela[index].descricao}
                                                        preco={vela[index].preco}
                                                        tamanho={vela[index].tamanho}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Vela;
