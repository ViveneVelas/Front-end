import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './calendario.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Sidebar from '../../components/sidebar/Sidebar';
import EventModal from '../../components/evento-calendario/evento-calendario';
import CustomTollbar from '../../components/customizar-calendario/customizar-calendario';
import SidebarEventos from '../../components/sidebar-calendario/sidebar-calendario';
import axios from 'axios';

const DragAndDropCalendar = withDragAndDrop(Calendar);

function Calendario() {
  const [eventos, setEventos] = useState([])
  const [eventoSelecionado, SeteventoSelecionado] = useState(null);
  const [eventosFiltrados, setEventosFiltrados] = useState([])
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const sidebarRef = useRef(null);
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    //Deletar evento no banco
    axios.delete('http://44.204.200.174:8080/pedidos/' + eventId, {
      headers: {
        'accept': 'application/json'
      }
    });

    // Logica para tirar evento do quadro
    const updatedEvents = eventos.filter((event) => event.id !== eventId);
    setEventos(updatedEvents);
    SeteventoSelecionado(null);
  };

  const handleEventUpdate = (updatedEvent) => {
    axios.delete('http://44.204.200.174:8080/pedidos/' + updatedEvent, {
      headers: {
        'accept': 'application/json'
      }
    });
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

    const fetchPedidos = async () => {

      try {
        const response = await axios.get('http://44.204.200.174:8080/pedidos/calendario', {
          headers: {
            'accept': 'application/json'
          }
        });
        console.log(response.data);

        setEventos(response.data); // Armazena os dados retornados no estado
        setEventosFiltrados(response.data); // Armazena os dados retornados no estado
        setPedidos("------------- Passei Aqui -------------"); // Armazena os dados retornados no estado
        console.log(response.data);
        
      } catch (err) {
        setError('Erro ao carregar pedidos');
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  moment.locale('pt-br');
  const localizer = momentLocalizer(moment);
  console.log(localizer);


  return (
    <>
      <Sidebar />
      <main id="main" className="main tela-calendar">

        <div className='conteudo-principal'>
          <div className='calendario'>
            <DragAndDropCalendar
              defaultDate={moment().toDate()}
              defaultView='month'
              events={eventos}
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
