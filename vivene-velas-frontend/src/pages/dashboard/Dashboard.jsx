import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Grafico from '../../components/grafico/Grafico';
import Graficobarras from '../../components/graficobarras/Graficobarras';
import Cardkpi from '../../components/cardkpi/Cardkpi';

function Dashboard() {
  return (
    <>
      <Sidebar />

      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <Cardkpi
                  titulo={"Vela mais vendida"}
                  conteudo={"Vela de Laranja"}
                />
                <Cardkpi
                  titulo={"Vela mais vendida"}
                  conteudo={"Vela de Laranja"}
                />
                <Cardkpi
                  titulo={"Vela mais vendida"}
                  conteudo={"Vela de Laranja"}
                />
                <Cardkpi
                  titulo={"Vela mais vendida"}
                  conteudo={"Vela de Laranja"}
                />
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
