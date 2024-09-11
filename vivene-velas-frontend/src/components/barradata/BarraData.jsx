import React, { useState } from 'react';
import Style from './BarraData.module.css'

const BarraData = ({ diaSemana, data}) => {

    const[aberto, setAberto] = useState(false)

    const barraAberta = () => setAberto(!aberto)

    return (
        <>
            <div >

                <div className={Style['div-data']}>
                    <div>
                    <span>Dia de hoje</span> <span> - </span> <span>DATA</span>
                    </div>
                    {aberto ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                    
                </div>
                    <div className={Style['estilo-hr']} />
            </div>
        </>
    );
};

export default BarraData;