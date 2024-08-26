import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Cardvela from '../../components/cardvela/Cardvela';
import Busca from '../../components/busca/Busca';

const Vela = () => {
    return (
        <>
            <Sidebar />
            <main id="main" className="main">

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="div-filtros col-lg-12">
                                <div className='div-one col-lg-5'>
                                    <div className="col-lg-7">
                                        <Busca />
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="button" className="btn btn-secondary"><i className="bi bi-filter me-1"></i> Filtrar</button>
                                    </div>
                                </div>

                                <div className="col-lg-3 justify-content-end display-flex">
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

                                                />
                                                <Cardvela

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
