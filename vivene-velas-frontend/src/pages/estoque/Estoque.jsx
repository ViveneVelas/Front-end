import React, { useState } from 'react';
import CardeLote from '../../components/cardelote/CardeLote';
import Sidebar from '../../components/sidebar/Sidebar';
import Busca from '../../components/busca/Busca';
import Filtrar from '../../components/filtrarBusca/Filtrar';
import style from './Estoque.module.css'
import AdicionarLote from '../../components/adicionarLote/AdicionarLote'



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

    return (
        <>
            <Sidebar />

            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className={style['div-caixa-busca']}>
                                <Busca />
                                <Filtrar />

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

                                                <CardeLote
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    qtd={70}
                                                    qrCode={"010-2-09_10_2024"}
                                                    descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                                />

                                                <CardeLote
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    qtd={70}
                                                    qrCode={"010-2-09_10_2024"}
                                                    descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                                />

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

                                            <CardeLote
                                                imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                title="Vela de Cacau"
                                                qtd={70}
                                                qrCode={"010-2-09_10_2024"}
                                                descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                            />

                                            <CardeLote
                                                imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                title="Vela de Cacau"
                                                qtd={70}
                                                qrCode={"010-2-09_10_2024"}
                                                descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                            />

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
