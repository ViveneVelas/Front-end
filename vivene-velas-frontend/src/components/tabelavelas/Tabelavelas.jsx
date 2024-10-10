import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Tabelavelas = () => {
    const [dados, setDados] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const pedidoResponse = await axios.get('http://localhost:8080/pedidos/top-cinco-pedidos', {
            headers: {
              'accept': '*/*',
            },
          });
    
          const responseData = pedidoResponse.data;

          // Coloca o objeto dentro de um array
          const dataArray = Array.isArray(responseData) ? responseData : [responseData];
          
          setDados(dataArray);
          console.log(pedidoResponse.data)
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      };
    
      fetchData();
    }, []);

    return (
        <>
            <div className="table-container card">
                <h5 className="">Pedidos próximos do vencimento</h5>
                <table className="tabela-vendas">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Nome do Cliente</th>
                            <th scope="col">Quantidade de Velas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(dados) && dados.length > 0 ? (
                            dados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.dataPedido}</td>
                                    <td>{item.nomeCliente}</td>
                                    <td>{item.qtdVelas}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">Nenhum dado disponível</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tabelavelas;
