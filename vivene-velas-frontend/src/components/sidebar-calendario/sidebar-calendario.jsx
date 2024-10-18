import React from 'react';
import './sidebar-calendario.css';

const SidebarEventos = ({ dia, eventos, onEventClick }) => {
    return (
        <div className='sidebar-eventos'>
            <h4>{dia && new Date(dia).toLocaleDateString()}</h4>
            <ul>
                {eventos.length > 0 ? (
                    eventos.map((evento) => (
                        <div className='div_pedidos_geral'>
                            <h5>Entrega</h5>
                            <h6>
                                Nome do Cliente: {evento.clienteNome}
                            </h6>
                            {/* <br />
                            <div className="pedido_card">
                                <div className='margin_card'>

                                    <div className="pedido_header">
                                        <p>Pedido</p>
                                    </div>
                                    <div className="pedido_itens">
                                        {evento.listaDeVelas.map((vela, index) => (
                                            <div key={index}>
                                                <p>{index + 1}: {vela.nomeVela} - Quantidade: {vela.qtdVela}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pedido_preco">
                                    Preço: R$  {evento.preco}
                                </div>
                            </div> */}

                        </div>
                    ))
                ) : (
                    <li>Nenhum evento para este dia</li>
                )}
            </ul>
        </div>
    );
};


export default SidebarEventos;
