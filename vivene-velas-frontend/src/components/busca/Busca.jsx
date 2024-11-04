import React from "react";
import style from "./Busca.module.css";
import lupa from "../../img/lupaIcon.svg";

const Busca = ({ onChange }) => {
    return (
        <>
            <div className={style['div-busca-input']}>
                <input 
                    type="text" 
                    placeholder='Buscar vela pelo nome' 
                    className={style['input']} 
                    onChange={onChange} // Adiciona o evento onChange
                />
                <i><img src={lupa} alt="Lupa" /></i>
            </div>
        </>
    );
};

export default Busca;
