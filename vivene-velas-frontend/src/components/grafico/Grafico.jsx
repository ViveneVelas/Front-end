import axios from 'axios';
import Chart from 'react-apexcharts';
import styel from "./Grafico.module.css";
import React, { useEffect, useState } from 'react';

const Grafico = () => {
  const [barData, setBarData] = useState([]);  // Para armazenar os dados das vendas (barras)
  const [lineData, setLineData] = useState([]);  // Para armazenar os dados das metas (linha)
  const [data, setData] = useState([]);  // Para armazenar os meses

  const fetchData = async () => {
    try {
      // Fazendo requisições para pegar metas e vendas
      const metaResponse = await axios.get('http://localhost:8080/metas/ultima-meta', {
        headers: {
          'accept': '*/*',
        },
      });

      const vendaResponse = await axios.get('http://localhost:8080/pedidos/quantidade-vendas', {
        headers: {
          'accept': '*/*',
        },
      });

      // const reverseArray = () => {
      //   setArray([...array].reverse());
      // };|

      // Mapeando os dados para o gráfico de vendas
      const vendas = vendaResponse.data.map(item => item.qtdPedidosConcluidos);
    
      // Filtrando apenas meses referente as Datas das metas | Adicionando 1 para deixar os meses corretos 
      const datas = metaResponse.data.map(item => new Date(item.dataInicio+1).toLocaleString('pt-BR', { month: 'short' })); 

      // Atualizando o estado com os dados de vendas e datas
      setBarData(vendas.reverse());
      setData(datas.reverse());

      // Mapeando os dados para o gráfico de metas
      const metas = metaResponse.data.map(item => item.qtdVendas);
      setLineData(metas.reverse());

    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      type: 'line',
      height: '100%',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    colors: ['#8b0000'], // Cor da linha
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: [0, 4],  // Definindo espessura da linha (metas) e das barras (vendas)
    },
    xaxis: {
      categories: data,  // Apenas os meses no eixo X
    },
    fill: {
      opacity: 1,
      colors: "#64D82D",  // Cor da Barra
    },
    yaxis: {
      title: {
        text: 'Quantidade',
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} vendas`;
        },
      },
    },
    responsive: [{
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '70%',
          },
        },
      },
    }],
  };

  const chartSeries = [{
    name: 'Vendas',
    type: 'bar',
    data: barData,  // Dados de vendas (barras)
    color: "#64D82D",
  }, {
    name: 'Meta',
    type: 'line',
    data: lineData,  // Dados de metas (linha)
    color: "#8b0000",
  }];

  return (
    <div className={styel["grafico"]}>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h5 style={{ margin: 0 }}>Quantidade de vendas por meta</h5>
          <button style={{ border: 'none', background: 'none', color: '#8b0000', fontSize: '14px', cursor: 'pointer' }}>
            Adicionar meta +
          </button>
        </div>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height="350"
        />
      </div>
    </div>
  );
};

export default Grafico;
