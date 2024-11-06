import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./Tabelavendas.module.css"


const Tabelavendas = () => {
  const [nomeArquivo, setNomeArquivo] = useState('top-5-clientes-mais-compras');
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const velaResponse = await axios.get('http://localhost:8080/clientes/clientes-mais-compras', {
          headers: {
            'accept': '*/*',
          },
        });

        setDados(velaResponse.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const downloadTXT = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/clientes/arq-criar/clientes-mais-compras',
        null,
        {
          params: { nomeArq: nomeArquivo },
          headers: {
            'accept': 'application/octet-stream',
          },
          responseType: 'blob',
        }
      );

      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${nomeArquivo}.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Erro ao baixar o TXT:', error);
    }
  };

  return (
    <>
      <div className="table-container card">
        <div className={style['div-titulo-botao']}>
          <h5>Velas Mais Vendidas</h5>
          <button onClick={downloadTXT}><i class="bi bi-file-earmark-arrow-down"></i>Baixar TXT </button>
        </div>
        <table className="tabela-vendas">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade de vendas</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index}>
                <td>{item.nomeCliente}</td>
                <td>{item.numPedidos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabelavendas;
