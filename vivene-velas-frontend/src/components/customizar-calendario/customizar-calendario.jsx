import React, { useState } from 'react';
import style from './customizar-calendario.module.css'

const CustomTollbar = ({ label, onView, onNavigate, views }) => {
    const [itemText, setItemText] = useState('month');
    console.log(label);

    function ajusteString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function ajusteNome(str) {
        if(str == 'month'){
            return 'Mensal'
        }else if(str == 'week'){
            return 'Semanal'
        }else if(str == 'day'){
            return 'Diario'
        }else{
            return 'Agenda'
        }
    }

    return (
        <div className="toolbar-container">
            <div className={style["toolbar-navegation"]}>

                <div className={style["toolbar-navegation"]}>
                    <button className='btn btn-sm mr-2 text-secondary' onClick={() => onNavigate('PREV')}><i class="bi bi-chevron-up"></i></button>
                    <button className='btn btn-sm mr-2 text-secondary' onClick={() => onNavigate('NEXT')}><i class="bi bi-chevron-down"></i></button>
                </div>
                <h1 className='mesAno'>{ajusteString(label)}</h1>
            </div>

            <div className="dirtop">
                <div className="dropdown">
                    <select name="" id="" className='btn btn-secondary dropdown-toggle'>
                        {views.map((view, index) => (
                            <option kay={index}>
                                <li>
                                    <button className='dropdown-item' onClick={() => onView(view) + setItemText(view)}>{ajusteNome(view)}</button>
                                </li>
                                {index === 2 && <hr className='dropdown-divider'></hr>}
                            </option>
                        ))}
                    </select>
                    {/* <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle="dropdown" aria-expanded="false">
                        {itemText}
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        {views.map((view,index) =>(
                            <div kay={index}>
                                <li>
                                    <button className='dropdown-item' onClick={()=>onView(view)+ setItemText(view)}>{view}</button>
                                </li>
                                {index === 2 &&<hr className='dropdown-divider'></hr>}
                            </div>
                        ))}
                    </ul> */}
                </div>

            </div>

        </div>
    )
}

export default CustomTollbar;
