import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabelaPedidos = () => {
    const [dados, setDados] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const pedidoResponse = await axios.get('http://44.204.200.174/pedidos/top-cinco-pedidos', {
            headers: {
              'accept': '*/*',
            },
          });
    
          const responseData = pedidoResponse.data;
          
          // Coloca o objeto dentro de um array
          const dataArray = Array.isArray(responseData) ? responseData : [responseData];

          setDados(dataArray);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      };
    
      fetchData();
    }, []);

    return (
        <>
            <div className="table-container card">
                <h5 className="">Pedidos próximos ao vencimento</h5>
                <table className="tabela-vendas">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Nome do Cliente</th>
                            <th scope="col">Quantidade de Velas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((item, index) => (
                            <tr key={index}>
                                <td>{item.dataPedido}</td>
                                <td>{item.nomeCliente}</td>
                                <td>{item.qtdVelas}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TabelaPedidos;
