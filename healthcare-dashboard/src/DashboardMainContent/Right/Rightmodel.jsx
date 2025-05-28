import React from 'react'
import './Rightmodel.css'
import Calenderview from '../CalendarView/Calenderview'
import Shedule from '../Shedule/Shedule'

const Rightmodel = () => {
  return (
    <div className='right-model'>
        <Calenderview/>
        <Shedule/>
    </div>
  )
}

export default Rightmodel