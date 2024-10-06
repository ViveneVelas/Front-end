import React, { useState } from 'react';
import Cardestoque from '../../components/cardestoque/Cardestoque';
import Sidebar from '../../components/sidebar/Sidebar';
import Busca from '../../components/busca/Busca';
import Filtrar from '../../components/filtrarBusca/Filtrar';
import style from './Estoque.module.css'


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

                                    <div>

                                        <div onClick={toggleCardsCasa} className={style['div-data']}>
                                            <div>
                                                <h5>Casa</h5>
                                            </div>
                                            {showCardsCasa ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                                        </div>
                                        <div className={style['estilo-hr']} />

                                    </div>

                                    {showCardsCasa && (
                                        <div className="col-md-3 col-12 mb-3">
                                            <div className="card add-card text-center p-4">
                                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                                    <h1 className="display-1 text-plus">+</h1>
                                                    <p>Adicionar lote de velas</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {showCardsCasa && (
                                        <div className="col-md-9 col-12">
                                            <div className="row">
                                                <Cardestoque
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    qtd={70}
                                                    dtValidade={"10/09/2005"}
                                                    descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                                />
                                                <Cardestoque
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    qtd={70}
                                                    dtValidade={"10/09/2005"}
                                                    descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                                />
                                                <Cardestoque
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    qtd={70}
                                                    dtValidade={"10/09/2005"}
                                                    descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                                />
                                                <Cardestoque
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    qtd={70}
                                                    dtValidade={"10/09/2005"}
                                                    descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">

                                    <div>
                                        <div onClick={toggleCardsEstudio} className={style['div-data']}>
                                            <div>
                                                <h4>Estúdio</h4>
                                            </div>
                                            {showCardsEstudio ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                                        </div>
                                        <div className={style['estilo-hr']} />
                                    </div>
                                </div>
                                {showCardsEstudio && (
                                    <div className="col-md-3 col-12 mb-3">
                                        <div className="card add-card text-center p-4">
                                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                                <h1 className="display-1 text-plus">+</h1>
                                                <p>Adicionar lote de velas</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {showCardsEstudio && (
                                    <div className="col-md-9 col-12">
                                        <div className="row">
                                            <Cardestoque
                                                imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                title="Vela de Cacau"
                                                qtd={70}
                                                dtValidade={"10/09/2005"}
                                                descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                            />
                                            <Cardestoque
                                                imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                title="Vela de Cacau"
                                                qtd={70}
                                                dtValidade={"10/09/2005"}
                                                descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                            />
                                            <Cardestoque
                                                imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                title="Vela de Cacau"
                                                qtd={70}
                                                dtValidade={"10/09/2005"}
                                                descr={"Vela com aroma de Laranja com pote comprido, e com tampa. O pavio é do tipo...."}
                                            />
                                            <Cardestoque
                                                imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                title="Vela de Cacau"
                                                qtd={70}
                                                dtValidade={"10/09/2005"}
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
