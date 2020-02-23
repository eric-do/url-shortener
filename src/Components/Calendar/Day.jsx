import React, { useState } from "react";
import styled from 'styled-components';

const DayWrapper = styled.div`
  width: 14.29%;
  width: calc(100% / 7);
  height: 0;
  padding-bottom: calc(100% / 7);
  border: 1px solid black;
  background: ${props => props.isActive ? "green" : "white" };
`;

const Day = ({ day, currentDate }) => {
  const dayIsIncCurrentMonth = day !== 0;
  const [isActive, setActive] = useState(dayIsIncCurrentMonth ? day.getDate() === currentDate.getDate() : false);

  return (
    <DayWrapper isActive={isActive} onClick={() => setActive(!isActive)} >
      { dayIsIncCurrentMonth ? day.getDate() : '' }
    </DayWrapper>
  )
}

export default Day
