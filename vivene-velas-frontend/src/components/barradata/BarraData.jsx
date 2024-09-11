import React, { useState } from 'react';
import Style from './BarraData.module.css'
import CardPedido from '../card-pedido/CardPedido';

const BarraData = ({ diaSemana, data }) => {

    const [aberto, setAberto] = useState(false)

    const barraAberta = () => setAberto(!aberto)

    return (
        <>
            <div className={Style['div-pedido']}>

                <div>
                    <div className={Style['div-data']} onClick={barraAberta}>
                        <div>
                            <span>Dia de hoje</span> <span> - </span> <span>DATA</span>
                        </div>
                        {aberto ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                    </div>
                    <div className={Style['estilo-hr']} />
                </div>

                <div className={Style['div-card-pedido']}>

                    {aberto ? <CardPedido /> : null}

                </div>

            </div>
        </>
    );
};

export default BarraData;