import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-radius: 8px;
  padding: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.inputBgColor;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.inputColor;
  }};
`;