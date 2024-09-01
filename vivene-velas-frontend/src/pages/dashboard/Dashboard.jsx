import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/sidebar/Sidebar';
import Grafico from '../../components/grafico/Grafico';
import Graficobarras from '../../components/graficobarras/Graficobarras';
import Cardkpi from '../../components/cardkpi/Cardkpi';
import Tabelavendas from '../../components/tabelavendas/Tabelavendas';
import Tabelavelas from '../../components/tabelavelas/Tabelavelas';

function Dashboard() {
  const [qtd, setQtd] = useState(null);
  const [vela, setVela] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [quantidadeResponse, velaResponse] = await Promise.all([
          axios.get('http://localhost:8080/vendas/semanal/quantidade', {
            headers: {
              'accept': '*/*',
            },
          }),
          axios.get('http://localhost:8080/velas/maisvendida', {
            headers: {
              'accept': '*/*',
            },
          })
        ]);
        console.log("VELA + VENDIDA RESPOSTA: "+velaResponse.data[0].nomeVela)

        setQtd(quantidadeResponse.data);
        setVela(velaResponse.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Sidebar />

      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <Cardkpi
                  velaVendia={vela[0].nomeVela}
                  qtd={qtd}
                />
              </div>
              <div className="col-lg-12 row">
                <div className='col-lg-8'>
                  <Grafico />
                </div>
                
                <div className="col-lg-4">
                  <Tabelavelas />
                </div>
              </div>
              <div className="col-lg-12 row">
                <div className="col-lg-4">
                  <Tabelavendas />
                </div>
                <Graficobarras />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
