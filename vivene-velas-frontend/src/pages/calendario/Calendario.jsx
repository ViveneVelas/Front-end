import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';

function getTodoList(date) {
    const day = date.getDate();
    const n = 10
    switch (day) {
      case n:
        return [
          { time: '10:30', title: 'Vela Morango' },
          { time: '12:00', title: 'Vela Chocolate' }
        ];
      case 15:
        return [
          { time: '09:30 pm', title: 'Products Introduction Meeting' },
          { time: '12:30 pm', title: 'Client entertaining' },
          { time: '02:00 pm', title: 'Product design discussion' },
          { time: '05:00 pm', title: 'Product test and acceptance' },
          { time: '06:30 pm', title: 'Reporting' },
          { time: '10:00 pm', title: 'Going home to walk the dog' }
        ];
      default:
        return [];
    }
  }

const Calendario = () => {
    function renderCell(date) {
        const list = getTodoList(date);
        const displayList = list.filter((item, index) => index < 2);
    
        if (list.length) {
          const moreCount = list.length - displayList.length;
          const moreItem = (
            <li>
              <Whisper
                placement="top"
                trigger="click"
                speaker={
                  <Popover>
                    {list.map((item, index) => (
                      <p key={index}>
                        <b>{item.time}</b> - {item.title}
                      </p>
                    ))}
                  </Popover>
                }
              >
                <a>{moreCount} more</a>
              </Whisper>
            </li>
          );
    
          return (
            <ul className="calendar-todo-list">
              {displayList.map((item, index) => (
                <li key={index}>
                  <Badge /> <b>{item.time}</b> - {item.title}
                </li>
              ))}
              {moreCount ? moreItem : null}
            </ul>
          );
        }
    
        return null;
      }
    
    return (
        <>
            <Sidebar />

            <main id="main" className="main">
                <Calendar bordered renderCell={renderCell} />;           
            </main>
        </>
    );
};

export default Calendario;


