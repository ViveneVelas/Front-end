import React from 'react';
import Chart from 'react-apexcharts';

const Grafico = () => {
  const options = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    markers: {
      size: 4
    },
    colors: ['#4154f1', '#2eca6a'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  };

  const series = [{
    name: 'Vendas',
    data: [31, 40, 28, 51, 42, 82, 56],
  }, {
    name: 'Metas',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];

  return (
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Metas x Vendas</h5>
          <Chart options={options} series={series} type="area" height={350} />
        </div>
      </div>
    </div>
  );
};

export default Grafico;
