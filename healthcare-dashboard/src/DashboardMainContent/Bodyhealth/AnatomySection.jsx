import React from 'react';
import './AnatomySection.css';
import anatomyImg from '../../assets/anatomy.png';
import { healthData } from '../../Data/healthData';

const AnatomySection = () => {
  return (
    <div className="anatomy-wrapper">
  {/* Header - Full Width */}
  <div className="anatomy-header">
    <div className="section-header">
      <h2>Dashboard</h2>
      <span className="week-selector">This Week ▾</span>
    </div>
  </div>

  {/* Flex Container */}
  <div className="anatomy-container">
    <div className="anatomy-left">
      <div className="anatomy-model-box">
        <img src={anatomyImg} alt="Human Anatomy" className="anatomy-image" />
        <div className="label heart">❤️ Healthy Heart</div>
        <div className="label leg">🦵 Healthy Leg</div>
      </div>
    </div>

    <div className="health-cards">
      {healthData.map(({ id, title, date, level, Icon }) => (
        <div className="health-card" key={id}>
         
          <div className="text">
            <div className='icon-title'>
                <Icon className="icon" />
            <h4>{title}</h4>
            </div>
             
            <p>Date: {date}</p>
            <div className={`barlev ${level}`} />
          </div>
        </div>
      ))}
      <p className='health-detail'>Detail  →</p>
    </div>
  </div>
</div>

  );
};

export default AnatomySection;
