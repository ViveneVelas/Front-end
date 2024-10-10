import React from 'react';
import './sidebar-calendario.css'; // Estilos para a barra lateral

const SidebarEventos = ({ dia, eventos, onEventClick }) => {
    return (
        <div className='sidebar-eventos'>
            <h4>Eventos do Dia {dia && new Date(dia).toLocaleDateString()}</h4>
            <ul>
                {eventos.length > 0 ? (
                    eventos.map((evento) => (
                        <li key={evento.id} onClick={() => onEventClick(evento)}>
                            <strong>{evento.titulo}</strong>
                            <p>{evento.clienteNome}</p>
                            <p>{evento.preco}</p>
                            <p>Início: {new Date(evento.start).toLocaleTimeString()}</p>
                            <p>Fim: {new Date(evento.end).toLocaleTimeString()}</p>
                        </li>
                    ))
                ) : (
                    <li>Nenhum evento para este dia</li>
                )}
            </ul>
        </div>
    );
};

export default SidebarEventos;
