// src/components/Calenderview.jsx
import React from 'react';
import './CalendarView.css';

const calendarData = [
  { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
  { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'], selected: true ,highlight: '09:00'},
  { day: 'Wed', date: 27, times: ['12:00', null, '13:00'] },
  { day: 'Thurs', date: 28, times: ['10:00', '11:00', null], highlight: '11:00' },
  { day: 'Fri', date: 29, times: [ null,'14:00', '16:00'] },
  { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00']  },
  { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
];

const Calenderview = () => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="calendar-nav">
          <span className="arrow">{'←'}</span>
          <span className="arrow">{'→'}</span>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map(({ day, date, times, selected, highlight, range }, index) => (
          <div key={index} className={`calendar-column ${selected ? 'selected' : ''}`}>
            <div className="calendar-day">{day}</div>
            <div className="calendar-date">{date}</div>
            {times.map((time, i) => (
              <div
                key={i}
                className={`calendar-time ${
                  highlight === time ? 'highlight' : ''
                } ${range ? 'range' : ''}`}
              >
                {time || '—'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calenderview;
