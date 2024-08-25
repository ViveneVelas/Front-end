import React from 'react';
import Cardestoque from '../../components/cardestoque/Cardestoque';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Botao from '../../components/botao/Botao';
import Busca from '../../components/busca/Busca';

const Estoque = () => {
    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="container my-4">
                                <div className="row">
                                    <Busca />
                                    <Botao
                                        nome="Filtrar"
                                        icone="bi bi-filter"
                                    />
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-md-3 col-12 mb-3">
                                    <div className="card add-card text-center p-4">
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                            <h1 className="display-1 text-plus">+</h1>
                                            <p>Adicionar lote de velas</p>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Estoque;
