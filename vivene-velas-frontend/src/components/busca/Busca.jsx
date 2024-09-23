import React from "react";

const Busca = () => {
    return (
        <>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Buscar vela pelo nome" aria-label="Buscar vela pelo nome" />
                <span className="input-group-text"><i className="bi bi-search"></i></span>
            </div>
        </>
    );
};

export default Busca;
