import React from "react";
import Month from "./Month.jsx";
import Styled from "styled-components";

const isLessThanMaxYear = (date, calendar) => {
  return (
    date.getYear() < calendar.maxYear.getYear() &&
    date.getMonth() < calendar.maxYear.getMonth() &&
    date.getDate() < calendar.maxYear.getDate()
  );
};

const Calendar = props => {
  const date = new Date();
  console.log(date);
  const maxYear = new Date(date.getFullYear() + 5, 11, 31);
  const maxDate = new Date(maxYear, date.getMonth, date.getDate);
  const calendar = { date, maxYear, maxDate, days: [] };
  
  while (isLessThanMaxYear(date, calendar)) {
    calendar.days.push({
      year: date.getYear(),
      month: date.getMonth(),
      date: date.getDate(),
      day: date.getDate()
    });
    
    date.setDate(date.getDate() + 1);
  }

  return (
    <div>
      This is the calendar
      <Month date={date} />
    </div>
  );
};

export default Calendar;
