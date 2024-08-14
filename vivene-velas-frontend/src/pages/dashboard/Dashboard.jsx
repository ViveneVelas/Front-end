import React from 'react';
import './Dashboard.module.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Grafico from '../../components/grafico/Grafico';
import Graficobarras from '../../components/graficobarras/Graficobarras';

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* Cards */}
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="col-xxl-3 col-md-6">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">KPI 1</h5>
                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar"></i>
                          </div>
                          <div className="ps-3">
                            <h6>50%</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Gráficos e Tabelas */}
              <div className="col-lg-12 row">
                <Grafico />
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Velas em Vencimento</h5>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Vela de Morango</td>
                            <td>8</td>
                            <td>2016-05-25</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Vela de Chocolate</td>
                            <td>3</td>
                            <td>2014-12-05</td>
                          </tr>
                          {/* Adicione mais linhas conforme necessário */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outra linha de gráficos/tabelas */}
              <div className="col-lg-12 row">
                <Graficobarras />
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Principais Clientes</h5>
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade de Compras</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Bárbara Barbato</td>
                            <td>18</td>
                          </tr>
                          {/* Adicione mais linhas conforme necessário */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
