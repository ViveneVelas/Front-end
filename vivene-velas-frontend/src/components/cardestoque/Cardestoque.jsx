import React from 'react';

const Cardestoque = ({ imgSrc, title, quantity }) => {
    return (
        <div className="col-lg-3">
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-descr d-flex align-items-center">
                        <button type="button" className="btn btn-plus"><i className="bi bi-dash-lg"></i></button>
                        <div className="card-num mx-2">{quantity}</div>
                        <button type="button" className="btn btn-plus"><i className="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardestoque;