import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Style from './BarraData.module.css'
import CardPedido from '../card-pedido/CardPedido';

const BarraData = ({ diaSemana }) => {

    useEffect(() => {
        const fetchData = async (orderBy) => {
            try {
                const response = await axios.get(`http://localhost:8080/pedidos/filtro?data=`+diaSemana, {
                    headers: {
                        'accept': '*/*',
                    }
                });
    
                if (response.data && response.data.length > 0) {
                    console.log("pedido + VENDIDA RESPOSTA: " + response.data[0]);
                } else {
                    console.log("Nenhuma pedido encontrada.");
                }
    
                setArray(response.data || []);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    // tipoVela, qtde, nomeCliente, qtdeCompra
    const [aberto, setAberto] = useState(false)
    const [array, setArray] = useState([])

    const barraAberta = () => setAberto(!aberto)

    return (
        <>
            <div className={Style['div-pedido']}>

                <div>
                    <div className={Style['div-data']} onClick={barraAberta}>
                        <div>
                            <span>{diaSemana}</span>
                        </div>
                        {aberto ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                    </div>
                    <div className={Style['estilo-hr']} />
                </div>

                <div className={Style['div-card-pedido']}>

                    {aberto && (array.map((item, index) => (

                        <CardPedido
                            id={`card-pedido-${index}`}
                            entrega={item.tipoEntrega}
                            valor={item.preco}
                            nomeCliente={item.clienteNome}
                            st={item.status}
                        />

                    ))


                    )}

                </div>

            </div>
        </>
    );
};

export default BarraData;