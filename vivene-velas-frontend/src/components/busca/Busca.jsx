import React from "react";

const Busca = () => {
    return (
        <>
            <div className="col-md-3 col-12 mb-3">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Buscar vela pelo nome" aria-label="Buscar vela pelo nome" />
                    <span className="input-group-text"><i className="bi bi-search"></i></span>
                </div>
            </div>
        </>
    );
};

export default Busca;
