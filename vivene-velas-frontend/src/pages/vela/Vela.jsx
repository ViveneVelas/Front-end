import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Cardvela from '../../components/cardvela/Cardvela';
import Busca from '../../components/busca/Busca';
import velaPng from "../../img/vela.png"

const Vela = () => {
    return (
        <>
            <Sidebar />
            <main id="main" className="main">

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="div-filtros col-lg-12">
                                <div className='div-one col-lg-6'>
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
                                <div className="">
                                    <div className="card-body">
                                        <div className="news">
                                            <div className=" col-lg-12 coln">
                                                <Cardvela
                                                    id={1}
                                                    img={velaPng}
                                                    dias={"7"}
                                                    titulo={"Vela de Cacau"}
                                                    descricao={"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."}
                                                />
                                                <Cardvela
                                                    id={2}
                                                    img={velaPng}
                                                    dias={"7"}
                                                    titulo={"Vela de Cacau"}
                                                    descricao={"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."}
                                                />
                                                <Cardvela
                                                    id={3}
                                                    img={velaPng}
                                                    dias={"7"}
                                                    titulo={"Vela de Cacau"}
                                                    descricao={"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."}
                                                />
                                                <Cardvela
                                                    id={4}
                                                    img={velaPng}
                                                    dias={"7"}
                                                    titulo={"Vela de Cacau"}
                                                    descricao={"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."}
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
