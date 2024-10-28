import React from 'react';
import style from './CheckBox.module.css'

const CheckBox = ({ valor }) => {
    return (
        <>
            <div className={style["div-check-box"]}>
                <input type="checkbox" id='casa' className={style["check-box"]} />
                <label For="casa">{valor}</label>
            </div>

        </>
    );
};

export default CheckBox