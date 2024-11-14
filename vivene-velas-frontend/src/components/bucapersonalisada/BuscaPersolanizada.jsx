import React from "react";
import style from "./BuscaPersolanizada.module.css";

const BuscaPersonalizada = ({ valor, nome, img, tipo, onChange }) => {
    return (
        <div className={style["form-group"]}>
            <input
                type={tipo}
                id="ipt_nome"
                className={style["form-input"]}
                required
                placeholder=""
                value={valor}
                onChange={onChange}  // Adicionando onChange
            />
            <label htmlFor="ipt_nome" className={style["form-label"]}>{nome}</label>
            <img src={img} alt="" className={style["input-icon"]} />
        </div>
    );
};

export default BuscaPersonalizada;
