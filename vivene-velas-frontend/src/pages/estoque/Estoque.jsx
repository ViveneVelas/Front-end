import React from 'react';
import Cardestoque from '../../components/cardestoque/Cardestoque';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const Estoque = () => {
    return (
        <>
            <Header />
            <Sidebar />

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Estoque</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Estoque</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="search-bar col-lg-8">
                                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                                            <input type="text" name="query" placeholder="Buscar Vela Pelo Nome" title="Enter search keyword" />
                                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <button type="button" className="btn btn-primary"><i className="bi bi-filter me-1"></i> Filtrar</button>
                                </div>

                                <div className="col-lg-3">
                                    <button type="button" className="btn btn-primary"><i className="bi bi-plus-lg me-1"></i> Adicionar Vela</button>
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <Cardestoque
                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                    title="Vela de Cacau"
                                    quantity={70}
                                />
                                <Cardestoque
                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipPLKlqBN6N299tRvdKUvwkBfN1g07TSjPjl29ox=s680-w680-h510"
                                    title="Vela de Chocolate"
                                    quantity={70}
                                />
                                <Cardestoque
                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                    title="Vela de Lavanda"
                                    quantity={70}
                                />
                                <Cardestoque
                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipPLKlqBN6N299tRvdKUvwkBfN1g07TSjPjl29ox=s680-w680-h510"
                                    title="Vela de Framboesa"
                                    quantity={70}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Estoque;
