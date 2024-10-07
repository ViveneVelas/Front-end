import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './calendario.css';
import Sidebar from '../../components/sidebar/Sidebar';
import eventosPadrao from '../../components/eventosPadrao';
import EventModal from '../../components/evento-calendario/evento-calendario';
import CustomTollbar from '../../components/customizar-calendario/customizar-calendario';
import SidebarEventos from '../../components/sidebar-calendario/sidebar-calendario';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function Calendario() {
  const [eventos, setEventos] = useState(eventosPadrao);
  const [eventoSelecionado, SeteventoSelecionado] = useState(null);
  const [eventosFiltrados, setEventosFiltrados] = useState(eventosPadrao);
  const [diaSelecionado, setDiaSelecionado] = useState(null); // Estado para armazenar o dia selecionado
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para controlar a visibilidade do SidebarEventos
  const sidebarRef = useRef(null); // Ref para o contêiner do SidebarEventos

  const eventStyle = (event) => ({
    style: {
      backgroundColor: event.color,
    },
  });

  const handleEventClick = (evento) => {
    SeteventoSelecionado(evento);
  };

  const handleEventClose = () => {
    SeteventoSelecionado(null);
  };

  const handleEventDelete = (eventId) => {
    // Logica do banco
    const updatedEvents = eventos.filter((event) => event.id !== eventId);
    setEventos(updatedEvents);
    SeteventoSelecionado(null);
  };

  const handleEventUpdate = (updatedEvent) => {
    // Logica do banco
    const updatedEvents = eventos.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      }
      return event;
    });
    setEventos(updatedEvents);
    SeteventoSelecionado(null);
  };

  const handleDayClick = (slotInfo) => {
    setDiaSelecionado(slotInfo.start); 
    setSidebarVisible(true); 
  };

  const eventosDoDia = eventosFiltrados.filter((event) =>
    diaSelecionado && moment(event.start).isSame(diaSelecionado, 'day')
  );

  // Função para fechar o Sidebar quando clicar fora
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false); // Oculta o Sidebar
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Sidebar />
      <main id="main" className="main tela-calendar">

          <div className='conteudo-principal'>
            <div className='calendario'>
              <DragAndDropCalendar
                defaultDate={moment().toDate()}
                defaultView='month'
                events={eventosFiltrados}
                localizer={localizer}
                resizable
                onSelectEvent={handleEventClick}
                onSelectSlot={handleDayClick}
                selectable
                eventPropGetter={eventStyle}
                components={{
                  toolbar: CustomTollbar,
                }}
                className='calendar'
              />
            </div>

            {/* Adicione o div com ref ao redor do SidebarEventos */}
            {sidebarVisible && diaSelecionado && (
              <div ref={sidebarRef} style={{ position: 'relative' }}>
                <SidebarEventos
                  dia={diaSelecionado}
                  eventos={eventosDoDia}
                  onEventClick={handleEventClick}
                />
              </div>
            )}

            {eventoSelecionado && (
              <EventModal
                evento={eventoSelecionado}
                onClose={handleEventClose}
                onDelete={handleEventDelete}
                onUpdate={handleEventUpdate}
              />
            )}
          </div>
      </main>
    </>
  );
}

export default Calendario;
