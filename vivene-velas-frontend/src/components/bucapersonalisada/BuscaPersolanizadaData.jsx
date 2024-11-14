import React from "react";
import style from "./BuscaPersolanizada.module.css";

const BuscaPersonalizadaData = ({ valor, nome, img, tipo, onChange }) => {
    const formatarData = (value) => {
        // Remove tudo que não é número
        const cleanedValue = value.replace(/\D/g, '');
        
        // Adiciona as barras conforme necessário
        if (cleanedValue.length <= 2) return cleanedValue;
        if (cleanedValue.length <= 4) return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`;
        return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}/${cleanedValue.slice(4, 8)}`;
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = tipo === "text" ? formatarData(inputValue) : inputValue; // Formata apenas se for tipo "text"
        onChange({ ...event, target: { ...event.target, value: formattedValue } });
    };

    return (
        <div className={style["form-group"]}>
            <input
                type={tipo}
                id="ipt_nome"
                className={style["form-input"]}
                required
                placeholder=""
                value={valor}
                onChange={handleChange}  // Aplica a formatação personalizada
            />
            <label htmlFor="ipt_nome" className={style["form-label"]}>{nome}</label>
            <img src={img} alt="" className={style["input-icon"]} />
        </div>
    );
};

export default BuscaPersonalizadaData;
