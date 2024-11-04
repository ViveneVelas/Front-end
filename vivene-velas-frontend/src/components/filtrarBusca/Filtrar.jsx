import React from 'react';
import style from "./Filtrar.module.css";

const Filtrar = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
        const orderBy = event.target.value;
        onFilterChange(orderBy);
    };

    return (
        <div className="col-lg-4">
            <select className={style['btn-filtrar']} onChange={handleFilterChange}>
                <option disabled selected value='id'>Ordenar</option>
                <option value="nome">Nome</option>
                <option value="id">Data de Criação</option>
            </select>
        </div>
    );
};

export default Filtrar;
