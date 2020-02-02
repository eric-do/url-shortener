import React from 'react';
import Month from './Month.jsx';
import Styled from 'styled-components';

const Calendar = props => {
  const currDate = new Date();
  return (
    <div>
      This is the calendar
      <Month date={currDate}/>
    </div>
  )
}

export default Calendar;
