import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tabelavendas = () => {
  const [dados, setDados] = useState([]); // Variável global para 'nome'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const velaResponse = await axios.get('http://localhost:8080/clientes/clientes-mais-compras', {
          headers: {
            'accept': '*/*',
          },
        });

        setDados(velaResponse.data); // Atualiza o estado 'velas'
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="table-container card">
        <h5>Clientes Mais Assíduos </h5>
        <table className="tabela-vendas">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade de vendas</th>
            </tr>
          </thead>
          <tbody>
            
            {[...Array(dados.length)].map((_, index) => (
              <tr key={dados[index]}>
                <td>{dados[index].nomeCliente}</td>
                <td>{dados[index].numPedidos}</td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabelavendas;
