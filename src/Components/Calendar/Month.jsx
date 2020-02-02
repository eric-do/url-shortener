// Calendar receives month/year
// Month calendar renders <Day />
// Render calendar 5 rows, 7 cols each row
  // All days before/after current month should be inactive
  // Get current date
  //  All days before current day should be inactive
  //  All days equal to or greater than current day should be active

import React from 'react';
import Day from './Day.jsx';
import styled from 'styled-components';

const MonthWrapper = styled.div``;
const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Month = ({ date }) => {
  const currentMonth = date.getMonth();
  const months = [
    'January', 
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August', 
    'September',
    'November',
    'December'
  ];

  return (
    <MonthWrapper>
      { months[currentMonth] }
      <WeekWrapper>
        <Day /><Day /><Day /><Day /><Day /><Day /><Day />
      </WeekWrapper>
    </MonthWrapper>
  )
}

export default Month
