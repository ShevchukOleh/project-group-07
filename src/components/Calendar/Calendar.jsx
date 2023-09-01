import React, { useState } from 'react';
import {
  CalendarCell,
  CalendarDay,
  CalendarContainer,
  CalendarHeader,
  LineInHeader,
  CalendarTable,
  CalendarWeekName,
  CalendarTitle,
  ButtonIcon,
} from './CalendarStyled/Calendar.styled';
import {
  generateCalendar,
  handleNextMonth,
  handlePrevMonth,
} from './Calendar-js/generateCalendar';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Calendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const calendar = generateCalendar(year, month);
  const handleDateClick = day => {
    const monthName = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    }).format(new Date(year, month, day));

    console.log(`Today, ${monthName} ${day}`);
  };
  return (
    <CalendarContainer>
      <CalendarHeader>
        <ButtonIcon
          onClick={() => handlePrevMonth(setYear, setMonth, month, year)}
        >
          <IoIosArrowBack size={12} />
        </ButtonIcon>
        <CalendarTitle>
          {`${
            new Date(year, month)
              .toLocaleString('en-US', {
                month: 'long',
              })
              .charAt(0)
              .toUpperCase() +
            new Date(year, month)
              .toLocaleString('en-US', {
                month: 'long',
              })
              .slice(1)
          }  ${year} `}
        </CalendarTitle>

        <ButtonIcon
          onClick={() => handleNextMonth(setYear, setMonth, month, year)}
        >
          <IoIosArrowForward size={12} />
        </ButtonIcon>
      </CalendarHeader>
      <LineInHeader />
      <CalendarTable>
        <thead>
          <CalendarWeekName>
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
              <CalendarDay key={day}>{day}</CalendarDay>
            ))}
          </CalendarWeekName>
        </thead>
        <tbody>
          {calendar.map((week, rowIndex) => (
            <tr key={rowIndex}>
              {week.map((cell, cellIndex) => (
                <CalendarCell
                  key={cellIndex}
                  day={cell.day}
                  prevMonth={cell.prevMonth}
                  weekend={cell.weekend}
                  today={
                    cell.day &&
                    year === today.getFullYear() &&
                    month === today.getMonth() &&
                    cell.day === today.getDate()
                  }
                  lastMonth={cell.prevMonth && cell.day !== today.getDate()}
                  onClick={() =>
                    cell.day && handleDateClick(cell.day, today.month)
                  }
                >
                  {cell.day && cell.day}
                </CalendarCell>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default Calendar;
