import React, { useState, useEffect } from "react";
import "./sidebar-calendario.css";

const SidebarEventos = ({ dia, eventos }) => {
    const [eventosComStatus, setEventosComStatus] = useState([]);

    useEffect(() => {
        // Atualiza os estilos para cada evento
        const atualizarStatus = () => {
            const novosEventos = eventos.map((evento) => {
                let estilo;
                console.log(evento.status);
                if (evento.titulo == "Pedido - Não Iniciado") {
                    estilo = "nao-iniciado";
                } else if (evento.titulo == "Pedido - Andamento") {
                    estilo = "em-andamento";
                } else {
                    estilo = "concluido";
                }

                console.log(estilo);
                
                return { ...evento, estilo }; // Adiciona a classe ao evento
            });
            setEventosComStatus(novosEventos);
        };

        atualizarStatus();
    }, [eventos]); // Executa apenas quando os eventos mudarem

    return (
        <div className="sidebar-eventos">
            <h4>{dia && new Date(dia).toLocaleDateString()}</h4>
            <ul>
                {eventosComStatus.length > 0 ? (
                    eventosComStatus.map((evento, index) => (
                        <div key={index} className={`div_pedidos_geral ${evento.estilo}`}>
                            <h5>{evento.titulo}</h5>
                            <h6>Nome do Cliente: {evento.clienteNome}</h6>
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
