import React from 'react';
import './Shedule.css';

const Shedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-top">
        <div className="card dentist">
          <h4>Dentist 🦷</h4>
          <p>09:00-11:00</p>
          <span>Dr. Cameron Williamson </span>
        </div>
        <div className="card physiotherapy">
          <h4>Physiotherapy Appointment 💪</h4>
          <p>11:00-12:00</p>
          <span>Dr. Kevin Djones </span>
        </div>
      </div>

      <h3 className="schedule-heading">The Upcoming Schedule</h3>

      <div className="schedule-day">
        <p className="day-label">On Thursday</p>
        <div className="schedule-events">
          <div className="event-card">
            <h5>Health checkup complete <span className="logo">🩺</span></h5>
            <p>11:00 AM</p>
          </div>
          <div className="event-card">
            <h5>Ophthalmologist <span className="logo">👁️</span></h5>
            <p>14:00 PM</p>
          </div>
        </div>
      </div>

      <div className="schedule-day">
        <p className="day-label">On Saturday</p>
        <div className="schedule-events">
          <div className="event-card event-card2 ">
            <h5>Cardiologist <span className="logo">❤️</span></h5>
            <p>12:00 AM</p>
          </div>
          <div className="event-card event-card2 ">
            <h5>Neurologist <span className="logo">🧠</span></h5>
            <p>16:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
