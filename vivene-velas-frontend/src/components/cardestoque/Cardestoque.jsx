import React from 'react';

const Cardestoque = ({ imgSrc, title, qtd, dtValidade, descr }) => {
    return (
        <>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="card h-100 d-flex flex-row">
                    <div className="col-5 p-0">
                        <img src={imgSrc} className="img-fluid" alt="Vela de Laranja" />
                    </div>
                    <div className="col-7 d-flex flex-column p-3">
                        <h5 className="card-title">Vela de Laranja</h5>
                        <p className="card-text">Vela com aroma de laranja com pote comprido, e com tampa...</p>
                        <p className="card-text"><strong>Data de Validade:</strong> 24/11/2024</p>
                        <p className="card-text"><strong>Quantidade de velas:</strong> 70</p>
                        <a href="#" className="btn btn-primary mt-auto">Vender Vela</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cardestoque;