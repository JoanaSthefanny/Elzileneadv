import React from 'react';
import './Times.css';

const horarios = [
  { dias: 'Segunda, quarta e sexta', horario: 'Das 8:00 às 12:00' },
  { dias: 'Terça e quinta', horario: 'Das 14:00 às 17:00' }
];

const Times = () => {
  return (
    <div className="times">
      <h2>Horários</h2>
      {horarios.map((item, index) => (
        <div key={index}>
          <p className='days'>{item.dias}</p>
          <p className='hours'>{item.horario}</p>
        </div>
      ))}
    </div>
  );
};

export default Times;