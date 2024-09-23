import React, { useState } from 'react';
const CustomTollbar = ({ label, onView, onNavigate, views }) => {
    const [itemText, setItemText] = useState('month');
    return (
        <div className="toolbar-container">
            <div className="dirtop">
                <div className="toolbar-navegation" style={{ marginLeft: '15px' }}>
                    <button className='btn btn-sm mr-2 text-secondary' onClick={() => onNavigate('PREV')} style={{ marginLeft: '15px' }}><i class="bi bi-caret-left"></i></button>
                    <p>
                    {label}
                    </p>
                    <button className='btn btn-sm mr-2 text-secondary' onClick={() => onNavigate('NEXT')}><i class="bi bi-caret-right"></i></button>
                </div>
                <div className="dropdown">
                    <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle="dropdown" aria-expanded="false">
                        Mensal
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                        {views.map((view, index) => (
                            <div kay={index}>
                                <li>
                                    <button className='dropdown-item' onClick={() => onView(view) + setItemText(view)}>{view}</button>
                                </li>
                                {index === 2 && <hr className='dropdown-divider'></hr>}
                            </div>
                        ))}
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default CustomTollbar;
