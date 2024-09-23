import React, { useState } from 'react';
import Style from './BarraData.module.css'
import CardPedido from '../card-pedido/CardPedido';

const BarraData = ({diaSemana, data}) => {
    // tipoVela, qtde, nomeCliente, qtdeCompra
    const [aberto, setAberto] = useState(false)
    const [array, setArray] = useState([{tipoVela: 'Cacau', 
                                        qtde: '3',
                                        nomeCliente: "Carlinhos",
                                        qtdeCompra: "10"},
                                        {tipoVela: 'Morango Silvestre', 
                                            qtde: '1',
                                            nomeCliente: "Claudete",
                                            qtdeCompra: "10"},
                                        {tipoVela: 'Café', 
                                         qtde: '3',
                                         nomeCliente: "Claudete",
                                         qtdeCompra: "11"}])

    const barraAberta = () => setAberto(!aberto)

    return (
        <>
            <div className={Style['div-pedido']}>

                <div>
                    <div className={Style['div-data']} onClick={barraAberta}>
                        <div>
                            <span>08/09/2024</span> <span> - </span> <span>Domingo</span>
                        </div>
                        {aberto ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                    </div>
                    <div className={Style['estilo-hr']} />
                </div>

                <div className={Style['div-card-pedido']}>

                    {aberto && (array.map((item, index)=> (

                        <CardPedido 
                        id={`card-pedido-${index}`}
                        tipoVela={item.tipoVela}
                        qtde={item.qtde}
                        nomeCliente={item.nomeCliente}
                        qtdeCompra={item.qtdeCompra}
                    
                        /> 

                    ))
                      
                    
                    )}

                </div>

            </div>
        </>
    );
};

export default BarraData;