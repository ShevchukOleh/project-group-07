import styled from '@emotion/styled';

const ColumnTitleStyle = styled.div`
  position: relative;
  width: 334px;
  margin-bottom: 8px;
  padding: 18px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    margin: 0;
    padding: 0;
  }
  & .titleColumn {
    color: #161616;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
  }
`;

const OpenModalBtn = styled.div`
  cursor: pointer;
`;
export { ColumnTitleStyle, OpenModalBtn };
