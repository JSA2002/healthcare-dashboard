import React from 'react'
import MainContent from './Middle/MainContent'
import Rightmodel from './Right/Rightmodel'
import './Dash.css' // Assuming you have a CSS file for styling



const Dashboardoverview = () => {
  return (
    <div className='dashboard-overview'>
        <div><MainContent/></div>
        <div><Rightmodel/></div>
        
        
    </div>
  )
}

export default Dashboardoverview