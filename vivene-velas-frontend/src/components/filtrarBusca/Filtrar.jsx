import React from "react";
import style from "./Filtrar.module.css"


const Filtrar = () => {
    return (
        <>
            <div >
                <button className={style['botao-filtrar']}>
                    <i class="bi bi-filter"></i>
                    Filtrar
                </button>
            </div>
            
        </>     
    );
};

export default Filtrar;
