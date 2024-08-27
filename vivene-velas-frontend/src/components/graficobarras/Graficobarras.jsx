import React from 'react';
import Chart from 'react-apexcharts';

const Graficobarras = () => {
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
      categories: ['Café', 'Chocolate', 'Lavanda', 'Framboesa'],
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
    data: [44, 55, 57, 5]
  }];

  return (
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Velas Mais Vendidas</h5>
          <Chart options={options} series={series} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
};

export default Graficobarras;
