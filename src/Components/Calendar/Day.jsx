// Day component receives date
// If date > current date, mark active
// If date <= current date, mark inactive

import React from 'react';
import styled from 'styled-components';

const DayWrapper = styled.div`
  width: 14.29%;
  width: calc(100% / 7);
  border: 1px solid black;
`;

const Day = ({ curDate, calDate }) => {
  // const isActive = calDate.getDate() > curDate.getDate() ? true : false;
  return (
    <DayWrapper>
      Day
    </DayWrapper>
  )
}

export default Day
