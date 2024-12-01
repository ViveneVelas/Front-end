  import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import style from "./Graficobarras.module.css"

const Graficobarras = () => {
  const [velas, setVela] = useState([]);
  const [nome, setNome] = useState([]); 
  const [qtd, setQtd] = useState([]);
  const [nomeArquivo, setNomeArquivo] = useState('top-5-velas-mais-vendidas');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const velaResponse = await axios.get('http://44.204.200.174:8080/velas/top-mais-vendidas', {
          headers: {
            'accept': '*/*',
          },
        });
        // console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data[0].totalVendido);
        // console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data[0].nomeVela);
        // console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data.length);

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
    }
  }, [velas]);

  const downloadCSV = async () => {
    try {
      const response = await axios.post(
        'http://44.204.200.174:8080/velas/arq-criar/top-cinco-velas',
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
      link.setAttribute('download', `${nomeArquivo}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Erro ao baixar o CSV:', error);
    }
  };


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
    <div className={style["grafico"]}>
      <div>
        <div className="card-body">
          <div className={style['div-titulo-botao']}>
          <h5>Velas Mais Vendidas</h5>
          <button onClick={downloadCSV}><i class="bi bi-file-earmark-arrow-down"></i>Baixar CSV </button>
          </div>
          <div className={style['div-grafico']}>
            <Chart options={options} series={series} type="bar" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graficobarras;
