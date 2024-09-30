import React from 'react';
import Chart from 'react-apexcharts';
import styel from "./Grafico.module.css"

const Grafico = () => {
  const lineData = [12, 10, 15, 20, 13, 18]; // Dados da linha
  const barData = [15, 8, 18, 10, 16, 14]; // Dados das barras

  // Gerando as cores das barras dinamicamente
  const barColors = barData.map((barValue, index) => {
    // console.log("BAR VALUE " + barValue + "  Value Index" + lineData[index])
    if (barValue > lineData[index]) {
      return "#E43939"
    } else {
      return '#64D82D'; // Verde se maior, vermelho se menor
    }
  });

  const chartOptions = {
    chart: {
      type: 'line',
      height: '100%',
      toolbar: {
        show: false
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
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: [0, 4],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    fill: {
      opacity: 1,
      colors: ["#64D82D"], // Aplicando as cores dinâmicas aqui
    },
    yaxis: {
      title: {
        text: 'Quantidade'
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} vendas`;
        }
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '70%'
          }
        },
      }
    }]
  };

  const chartSeries = [{
    name: 'Vendas',
    type: 'bar',
    data: barData,
  }, {
    name: 'Meta',
    type: 'line',
    data: lineData,
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
