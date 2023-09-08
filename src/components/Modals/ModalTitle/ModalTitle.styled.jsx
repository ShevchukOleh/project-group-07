import styled from '@emotion/styled';

export const StyledModalTitle = styled.h2`
  margin: 0;
  margin-bottom: ${props => {
    return props?.children !== 'Filters' ? '24px' : '14px';
  }};
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpTitle;
  }};
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  cursor: default;
`;
