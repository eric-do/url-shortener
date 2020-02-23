// Day component receives date
// If date > current date, mark active
// If date <= current date, mark inactive

import React from 'react';
import styled from 'styled-components';

const DayWrapper = styled.div`
  width: 14.29%;
  width: calc(100% / 7);
  height: 0;
  padding-bottom: calc(100% / 7);
  border: 1px solid black;
`;

const Day = ({ day }) => {
  // const isActive = calDate.getDate() > curDate.getDate() ? true : false;
  return (
    <DayWrapper>
      { day === 0 ? '' : day.getDate() }
    </DayWrapper>
  )
}

export default Day
