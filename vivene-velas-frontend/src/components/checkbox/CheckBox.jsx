import React from 'react';
import style from './CheckBox.module.css';

const CheckBox = ({ valor, isChecked, onChange }) => {
    return (
        <div className={style["div-check-box"]}>
            <input
                type="checkbox"
                id={valor}
                className={style["check-box"]}
                checked={isChecked}
                onChange={onChange}
            />
            <label className={style["label"]} htmlFor={valor}>{valor}</label>
        </div>
    );
};

export default CheckBox;
