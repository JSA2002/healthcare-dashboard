// src/components/MainContent/MainContent.jsx
import React from 'react';
import './MainContent.css';
import Header from '../Header/Header';
import AnatomySection from '../Bodyhealth/AnatomySection';
import ActivitySection from '../ActivityFeed/ActivitySection';




export default function MainContent() {
  return (
    <div className='main-content'>
      <Header />
      <AnatomySection/>
      <ActivitySection />
    </div>
  );
}
