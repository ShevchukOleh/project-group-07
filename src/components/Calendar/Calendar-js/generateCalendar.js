const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const generateCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const days = daysInMonth(year, month);
  const prevMonthDays = new Date(year, month, 0).getDate();

  const calendar = [[]];

  let currentRow = 0;
  for (let i = 1 - firstDay; i <= days; i++) {
    if (!calendar[currentRow]) {
      calendar[currentRow] = [];
    }

    if (i <= 0) {
      calendar[currentRow].push({
        day: prevMonthDays + i,
        prevMonth: true,
        weekend: i % 7 === 6 || i % 7 === 0,
      });
    } else {
      const weekend = i % 7 === 6 || i % 7 === 0;
      calendar[currentRow].push({
        day: i,
        prevMonth: false,
        weekend: weekend,
      });
    }

    if (new Date(year, month, i).getDay() === 6) {
      currentRow++;
    }
  }

  return calendar;
};
const handlePrevMonth = (setYear, setMonth, month, year) => {
  if (month === 0) {
    setYear(year - 1);
    setMonth(11);
  } else {
    setMonth(month - 1);
  }
};
const handleNextMonth = (setYear, setMonth, month, year) => {
  if (month === 11) {
    setYear(year + 1);
    setMonth(0);
  } else {
    setMonth(month + 1);
  }
};
export { generateCalendar, handleNextMonth, handlePrevMonth };
