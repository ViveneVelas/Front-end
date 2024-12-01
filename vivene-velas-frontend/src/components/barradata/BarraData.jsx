import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Style from './BarraData.module.css';
import CardPedido from '../card-pedido/CardPedido';

const BarraData = ({ diaSemana, nome }) => {
    const [data, setData] = useState('');
    const [aberto, setAberto] = useState(false);
    const [array, setArray] = useState([]);

    const formatarData = (dateString) => {
        const [year, month, day] = dateString.split("-");
        setData(`${day}/${month}/${year}`);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/pedidos/filtro/data/now?data=${diaSemana}&nomeCliente=${nome}`, {
                headers: {
                    'accept': '*/*',
                }
            });

            if (response.data && response.data.length > 0) {
                console.log("pedido + VENDIDA RESPOSTA:", response.data[0]);
            } else {
                console.log("Nenhum pedido encontrado.");
            }

            setArray(response.data || []);
            formatarData(diaSemana); // Atualiza a data formatada após a resposta
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    useEffect(() => {
        console.log("DIA DE AGR:", diaSemana, "NOME:", nome);
        fetchData();
    }, [diaSemana, nome]); // Inclua 'nome' para escutar alterações    

    const barraAberta = () => setAberto(!aberto);

    return (
        <div className={Style['div-pedido']}>
            <div>
                <div className={Style['div-data']} onClick={barraAberta}>
                    <div>
                        <span>{data}</span>
                    </div>
                    <i 
                        className={`bi ${aberto ? 'bi-chevron-down' : 'bi-chevron-up'} ${Style['icone-animado']}`} 
                    ></i>
                </div>
                <div className={Style['estilo-hr']} />
            </div>

            <div className={Style['div-card-pedido']}>
                {aberto &&
                    array.map((item, index) => (
                        <CardPedido
                            key={`card-pedido-${index}`}
                            id={`card-pedido-${index}`}
                            entrega={item.tipoEntrega}
                            valor={item.preco}
                            nomeCliente={item.clienteNome}
                            st={item.status}
                        />
                    ))}
            </div>
        </div>
    );
};

export default BarraData;
