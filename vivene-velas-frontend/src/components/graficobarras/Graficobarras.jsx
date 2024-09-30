import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import styel from "./Graficobarras.module.css"

const Graficobarras = () => {
  const [velas, setVela] = useState([]);
  const [nome, setNome] = useState([]); 
  const [qtd, setQtd] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const velaResponse = await axios.get('http://localhost:8080/velas/top-mais-vendidas', {
          headers: {
            'accept': '*/*',
          },
        });
        console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data[0].totalVendido);
        console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data[0].nomeVela);
        console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data.length);

        setVela(velaResponse.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (velas.length > 0) {
      const novoNome = [];
      const novoQtd = [];
      for (let cont = 0; cont < velas.length; cont++) {
        novoQtd[cont] = velas[cont].totalVendido;
        novoNome[cont] = velas[cont].nomeVela;
      }

      setNome(novoNome); // Atualiza o estado 'nome'
      setQtd(novoQtd); // Atualiza o estado 'soma'

      console.log("NOMES:", novoNome);
      console.log("SOMAS:", novoQtd);
    }
  }, [velas]);


  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    colors: ["#F7AF9D"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#F7AF9D']
    },
    xaxis: {
      categories: nome,
    },
    yaxis: {
      title: {
        text: 'Qtd de velas vendidas'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return  val
        }
      }
    }
  };

  const series = [{
    name: 'Net Profit',
    data: qtd
  }];

  return (
    <div className={styel["grafico"]}>
      <div>
        <div className="card-body">
          <h5>Velas Mais Vendidas</h5>
          <Chart options={options} series={series} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
};

export default Graficobarras;
