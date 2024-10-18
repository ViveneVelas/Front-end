import React, { useState, useEffect } from 'react';
import CardeLote from '../../components/cardelote/CardeLote';
import Sidebar from '../../components/sidebar/Sidebar';
import Busca from '../../components/busca/Busca';
import Filtrar from '../../components/filtrarBusca/Filtrar';
import style from './Estoque.module.css'
import AdicionarLote from '../../components/adicionarLote/AdicionarLote'
import axios from 'axios';

const Estoque = () => {
    const [showCardsCasa, setShowCardsCasa] = useState(false);
    const [showCardsEstudio, setShowCardsEstudio] = useState(false);
    const [lotesCasa, setLotesCasa] = useState([]);
    const [lotesEstudio, setLotesEstudio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const toggleCardsCasa = () => {
        setShowCardsCasa(!showCardsCasa);
    };
    const toggleCardsEstudio = () => {
        setShowCardsEstudio(!showCardsEstudio);
    };

    useEffect(() => {

        const fetchLotesCasa = async () => {
    
          try {
            const response = await axios.get('http://localhost:8080/lotes/casa', {
              headers: {
                'accept': 'application/json'
              }
            });
            console.log(response.data);
    
            setLotesCasa(response.data); // Armazena os dados retornados no estado
          } catch (err) {
            setError('Erro ao carregar Lotes');
          } finally {
            setLoading(false);
          }
        };
    
        fetchLotesCasa();

        const fetchLotesEstudio = async () => {
    
            try {
              const response = await axios.get('http://localhost:8080/lotes/estudio', {
                headers: {
                  'accept': 'application/json'
                }
              });
              console.log(response.data);
      
              setLotesEstudio(response.data); // Armazena os dados retornados no estado
            } catch (err) {
              setError('Erro ao carregar Lotes');
            } finally {
              setLoading(false);
            }
          };
      
          fetchLotesEstudio();
    
      }, []);

    const barraAberta = () => setAberto(!aberto)
    const [aberto, setAberto] = useState(false)

    return (
        <>
            <Sidebar />

            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className={style['div-caixa-busca']}>
                                <Busca />
                                <Filtrar />

                            </div>
                            <br />
                            <br />
                            <div className={style['div-info']}>
                                <div className={style['div-barra-local']}>

                                    <div>

                                        <div onClick={toggleCardsCasa} className={style['div-data']}>
                                            <div>
                                                <h4>Casa</h4>
                                            </div>
                                            {showCardsCasa ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                                        </div>
                                        <div className={style['estilo-hr']} />

                                    </div>

                                    {showCardsCasa && (
                                        <div className={style['div-velas-estoque']}>

                                            <AdicionarLote />

                                            <div className={style['div-card-lotes']}>
                                            
                                            {[...Array(lotesCasa.length)].map((_, index) => (
                                                    <CardeLote
                                                        key={index}
                                                        id={lotesCasa[index].id}
                                                        imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                        title={lotesCasa[index].vela.nome}
                                                        qtd={lotesCasa[index].quantidade}
                                                        qrCode={lotesCasa[index].qrCode}
                                                        descr={lotesCasa[index].vela.descricao}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <br />
                            <div className={style['div-info']}>
                                <div className={style['div-barra-local']}>

                                    <div>

                                        <div onClick={toggleCardsEstudio} className={style['div-data']}>
                                            <div>
                                                <h4>Estudio</h4>
                                            </div>
                                            {showCardsEstudio ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
                                        </div>
                                        <div className={style['estilo-hr']} />

                                    </div>

                                    {showCardsEstudio && (
                                        <div className={style['div-velas-estoque']}>

                                            <AdicionarLote />

                                            <div className={style['div-card-lotes']}>
                                            
                                            {[...Array(lotesEstudio.length)].map((_, index) => (
                                                    <CardeLote
                                                        key={index}
                                                        id={lotesEstudio[index].id}
                                                        imgSrc="https://lh3.googleusercontent.com/p/AF1QipM6ailoJrX6ZCIkFd0zmL2GnLcLZlcEgvQrFl0M=s680-w680-h510"
                                                        title={lotesEstudio[index].vela.nome}
                                                        qtd={lotesEstudio[index].quantidade}
                                                        qrCode={lotesEstudio[index].qrCode}
                                                        descr={lotesEstudio[index].vela.descricao}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Estoque;
