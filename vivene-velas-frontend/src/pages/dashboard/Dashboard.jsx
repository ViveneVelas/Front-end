import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar';
import Grafico from '../../components/grafico/Grafico';
import Graficobarras from '../../components/graficobarras/Graficobarras';
import Cardkpi from '../../components/cardkpi/Cardkpi';
import Tabelavendas from '../../components/tabelavendas/Tabelavendas';
import Tabelavelas from '../../components/tabelavelas/Tabelavelas';
import style from "./Dashboard.module.css"

function Dashboard() {
  const navigate = useNavigate();

  const [qtd, setQtd] = useState(null);
  const [vela, setVela] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [quantidadeResponse, velaResponse] = await Promise.all([
          axios.get('http://98.84.38.39:8080/velas/maisvendida', {
            headers: {
              'accept': '*/*',
            },
          }),
          axios.get('http://98.84.38.39:8080/velas/maisvendida', {
            headers: {
              'accept': '*/*',
            },
          })
        ]);
        //console.log("VELA + VENDIDA RESPOSTA: " + velaResponse.data[0])

        // setQtd(quantidadeResponse.data);
        setQtd(velaResponse.data[0].qtd);
        setVela(velaResponse.data[0].nomeVela);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Sidebar />

      <div className={style['div_pagina']}>

        {/* KPIS */}
        <div className='div_kpis'>
          <Cardkpi
            velaVendia={vela}
            qtd={qtd}
          />
        </div>

        {/* Gráfico e tabela 1 */}
        <div className={style['div_grafico_tabela']}>

          <div className={style['div_grafico']}>
            <Grafico />
          </div>



          <div className={style['div_tabela']}>
            <Tabelavendas />

          </div>
        </div>

        {/* Gráfico e tabela 2 */}
        <div className={style['div_grafico_tabela']}>


          <div className={style['div_tabela']}>
            <Tabelavelas />
          </div>
          <div className={style['div_grafico']}>
            <Graficobarras />
          </div>

        </div>


      </div>
    </>
  );
};

export default Dashboard;
