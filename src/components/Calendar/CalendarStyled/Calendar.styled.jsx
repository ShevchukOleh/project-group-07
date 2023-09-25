import styled from '@emotion/styled';

const CalendarContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 233px;
  height: 254px;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #fff;
`;

const CalendarHeader = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
`;

const ButtonIcon = styled.div`
  cursor: pointer;
  color: #bedbb0;
  transition: color 0.3s linear;

  &:hover {
    color: #161616;
  }
`;

const LineInHeader = styled.span`
  background-color: rgba(22, 22, 22, 0.2);
  display: block;
  width: 100%;
  height: 1px;
  margin-bottom: 14px;
`;

const CalendarTitle = styled.span`
  color: #161616;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  width: 100%;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32p;
`;

const CalendarTable = styled.table`
  width: 100%;
`;

const CalendarWeekName = styled.tr`
  color: rgba(22, 22, 22, 0.5);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const CalendarDay = styled.th`
  color: rgba(22, 22, 22, 0.5);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
`;

const CalendarCell = styled.td`
  text-align: center;
  cursor: pointer;
  color: ${props => (props.prevMonth ? 'rgba(22, 22, 22, 0.20)' : '#161616')};
  font-family: Poppins;
  font-size: 14px;
  padding: 3px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  transition: border-radius 0.3s linear, background-color 0.3s linear;
  border-radius: ${props =>
    props.today ? '100px' : props.prevMonth ? '0' : '100px'};
  background-color: ${props =>
    props.today && !props.prevMonth ? '#bedbb0' : ''};

  &:hover {
    border-radius: 100px;
    background-color: #bedbb0;
  }
`;

export {
  CalendarCell,
  CalendarDay,
  CalendarWeekName,
  ButtonIcon,
  CalendarHeader,
  CalendarTitle,
  CalendarContainer,
  CalendarTable,
  LineInHeader,
};
