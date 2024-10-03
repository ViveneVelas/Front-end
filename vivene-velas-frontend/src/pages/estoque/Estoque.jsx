import React, { useState } from 'react';
import Cardestoque from '../../components/cardestoque/Cardestoque';
import Sidebar from '../../components/sidebar/Sidebar';
import Busca from '../../components/busca/Busca';

const Estoque = () => {
    const [showCardsCasa, setShowCardsCasa] = useState(false);
    const [showCardsEstudio, setShowCardsEstudio] = useState(false);

    const toggleCardsCasa = () => {
        setShowCardsCasa(!showCardsCasa);
    };
    const toggleCardsEstudio = () => {
        setShowCardsEstudio(!showCardsEstudio);
    };
    
    return (
        <>
            <Sidebar />

             <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <div className="row">
                                    <div className="col-md-3 col-12 mb-3">
                                        <Busca />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h4 className='sub-title-h4'>Casa</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <hr className="flex-grow-1" />
                                        <button onClick={toggleCardsCasa} className="btn btn-show">
                                            {showCardsCasa ? <i class="bi bi-chevron-up" /> : <i class="bi bi-chevron-down" />}
                                        </button>
                                    </div>
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
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <h4 className='sub-title-h4'>Estudio</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <hr className="flex-grow-1" />
                                        <button onClick={toggleCardsEstudio} className="btn btn-show">
                                            {showCardsEstudio ? <i class="bi bi-chevron-up" /> : <i class="bi bi-chevron-down" />}
                                        </button>
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
