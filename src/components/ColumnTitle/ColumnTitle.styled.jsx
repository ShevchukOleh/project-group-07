import styled from '@emotion/styled';

export const ColumnTitleStyle = styled.div`
  position: relative;
  width: 334px;
  margin-bottom: 8px;
  padding: 18px 60px 17px 20px;
  background-color: ${props => {
    return props?.theme?.themeSet?.cardBg;
  }};
  border-radius: 8px;

  & p {
    margin: 0;
    padding: 0;
  }

  & .titleColumn {
    color: ${props => {
      return props?.theme?.themeSet?.boardTitle;
    }};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
  }
`;
