import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Cardvela from '../../components/cardvela/Cardvela';

const Vela = () => {
    return (
        <>
            <Sidebar />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Velas Gerais</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Velas Gerais</li>
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
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Velas Gerais</h5>

                                        <div className="news">
                                            <div className="row col-lg-12 coln">
                                                <Cardvela
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipPLKlqBN6N299tRvdKUvwkBfN1g07TSjPjl29ox=s680-w680-h510"
                                                    title="Vela de Café"
                                                    description="É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao examinar seu layout. O ponto de usar Lorem Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui'."
                                                />
                                                <Cardvela
                                                    imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                    title="Vela de Cacau"
                                                    description="É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao examinar seu layout. O ponto de usar Lorem Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário de 'Conteúdo aqui, conteúdo aqui'."
                                                />
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
