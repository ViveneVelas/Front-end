import React from "react";

const Botao = ({nome},{icone}) => {
    return (
        <>
            <div className="col-md-2 col-12 mb-3">
                <button className="btn btn-primary w-100"><i className={icone}></i>{nome}</button>
            </div>
        </>
    );
};

export default Botao;
