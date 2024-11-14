import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./Tabelavendas.module.css"
import { useNavigate } from 'react-router-dom'

const Tabelavendas = () => {
  const navigate = useNavigate();
  const [nomeArquivo, setNomeArquivo] = useState('top-5-clientes-mais-compras');
  const [dados, setDados] = useState([]);
  const [arquivo, setArquivo] = useState(null); // Novo estado para o arquivo

  useEffect(() => {
    const fetchData = async () => {
      try {
        const velaResponse = await axios.get('http://localhost:8080/clientes/clientes-mais-compras', {
          headers: { 'accept': '*/*' },
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
          headers: { 'accept': 'application/octet-stream' },
          responseType: 'blob',
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${nomeArquivo}.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao baixar o TXT:', error);
    }
  };

  // Função para lidar com o upload do arquivo
  const uploadArquivo = async () => {
    if (!arquivo) {
      console.error("Nenhum arquivo selecionado");
      return;
    }
  
    try {
      // Ler o arquivo como ArrayBuffer para obter o conteúdo em bytes
      const reader = new FileReader();
      reader.readAsArrayBuffer(arquivo);
  
      reader.onload = async () => {
        const arrayBuffer = reader.result;
        const byteArray = new Uint8Array(arrayBuffer);
  
        // Enviar o array de bytes no corpo da requisição
        const response = await axios.post(
          'http://localhost:8080/clientes/arq-ler/clientes-mais-compras',
          byteArray, // Envia diretamente como byte array
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
  
        console.log("Arquivo enviado com sucesso:", response.data);
        setDados(response.data); // Atualiza a tabela com os dados recebidos
      };

      navigate('/dashboard');
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }
  };
  

  return (
    <>
      <div className="table-container card">
        <div className={style['div-titulo-botao']}>
          <h5>Clientes com mais compras</h5>
          <button onClick={downloadTXT}><i className="bi bi-file-earmark-arrow-down"></i> Baixar TXT</button>
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
        <br />
        <div className={style['div-titulo-botao']}>
          <input
            type="file"
            accept=".txt"
            onChange={(e) => setArquivo(e.target.files[0])}
          />
          <button onClick={uploadArquivo}><i className="bi bi-file-earmark-arrow-down"></i> Enviar Arquivo</button>
        </div>

      </div>
    </>
  );
};

export default Tabelavendas;
