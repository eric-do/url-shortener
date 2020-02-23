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
import { getMonthAsMatrix, getZeroIndexMonth } from '../../Utils/calender.js';

const MonthWrapper = styled.div`
  width: 300px;
`;
const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MonthLabel = styled.div`
  display: flex;
  justify-content: center;
`;

const WeekdayLabel = styled.div`
  width: 14.29%;
  width: calc(100% / 7);
  border: 1px solid black;
`;

const Month = ({ date }) => {
  const month = getMonthAsMatrix(date);

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

  const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
  ]

  return (
    <MonthWrapper>
      <MonthLabel>{ months[getZeroIndexMonth(date)] }</MonthLabel>
      <WeekWrapper>
        {
          days.map(day => <WeekdayLabel>{ day }</WeekdayLabel>)
        }
      </WeekWrapper>
      {
        month.map(week => (
          <WeekWrapper>
            {
              week.map(day => <Day day={day} /> )
            }
          </WeekWrapper>
        ))
      }

    </MonthWrapper>
  )
}

export default Month
