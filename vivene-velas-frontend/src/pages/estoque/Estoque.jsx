import React, { useEffect, useState } from 'react';
import CardeLote from '../../components/cardelote/CardeLote';
import Sidebar from '../../components/sidebar/Sidebar';
import Busca from '../../components/busca/Busca';
import style from './Estoque.module.css'
import AdicionarLote from '../../components/adicionarLote/AdicionarLote'
import axios from 'axios';

const Estoque = () => {
    const [showCardsCasa, setShowCardsCasa] = useState(false);
    const [showCardsEstudio, setShowCardsEstudio] = useState(false);

    const toggleCardsCasa = () => {
        setShowCardsCasa(!showCardsCasa);
    };
    const toggleCardsEstudio = () => {
        setShowCardsEstudio(!showCardsEstudio);
    };

    const barraAberta = () => setAberto(!aberto)
    const [aberto, setAberto] = useState(false)


    const [vela, setVela] = useState([]);
    const [velaE, setVelaE] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [velaResponse] = await Promise.all([
                    axios.get('http://localhost:8080/lotes/estudio', {
                        headers: {
                            'accept': '*/*',
                        },
                    })
                ]);

                setVelaE(velaResponse.data || []);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }

            try {
                const [velaResponse] = await Promise.all([
                    axios.get('http://localhost:8080/lotes/casa', {
                        headers: {
                            'accept': '*/*',
                        },
                    })
                ]);

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
                        <div className="col-lg-12 testeNow">

                            <div className={style['div-filtro']}>
                                <div className='div-one col-lg-7'>
                                    <div className="col-lg-7">
                                        <Busca />
                                    </div>
                                </div>

                                <div className="col-lg-5 justify-content-end display-flex">
                                    <a href="/cadastro-lote">
                                        <button type="button" className="btn btn-primary font-padrao" ><i className="bi bi-plus-lg me-1"></i> Adicionar Lote</button>
                                    </a>
                                </div>
                            </div>

                            <div className={style['div-info']}>
                                <div className={style['div-barra-local']}>

                                    <div className={style['div-barra-data']}>

                                        <div onClick={toggleCardsCasa} className={style['div-data']}>
                                            <div>
                                                <p>Casa</p>
                                            </div>
                                            {showCardsCasa ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                                        </div>
                                        <div className={style['estilo-hr']} />

                                    </div>

                                    {showCardsCasa && (
                                        <div className={style['div-velas-estoque']}>

                                            <AdicionarLote />

                                            <div className={style['div-card-lotes']}>

                                                {[...Array(vela.length)].map((_, index) => (
                                                    <CardeLote
                                                        imgSrc={vela[index].vela.imagem}
                                                        title={vela[index].vela.nome}
                                                        qtd={vela[index].quantidade}
                                                        qrCode={vela[index].qrCode}
                                                        descr={vela[index].vela.nome}
                                                    />
                                                ))}

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">

                                    <div className={style['div-barra-data']}>

                                        <div onClick={toggleCardsEstudio} className={style['div-data']}>
                                            <div>
                                                <p>Estúdio</p>
                                            </div>
                                            {showCardsEstudio ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                                        </div>
                                        <div className={style['estilo-hr']} />

                                    </div>
                                </div>
                                {showCardsEstudio && (
                                    <div className={style['div-velas-estoque']}>

                                        <AdicionarLote />

                                        <div className={style['div-card-lotes']}>

                                            {[...Array(velaE.length)].map((_, index) => (
                                                <CardeLote
                                                    imgSrc={velaE[index].vela.imagem}
                                                    title={velaE[index].vela.nome}
                                                    qtd={velaE[index].quantidade}
                                                    qrCode={velaE[index].qrCode}
                                                    descr={velaE[index].vela.nome}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Estoque;
