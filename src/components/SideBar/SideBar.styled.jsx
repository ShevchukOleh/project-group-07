import styled from 'styled-components';

export const Container = styled.aside`
  display: none;
  float: left;
  background-color: #e6e6b1;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 260px;
    height: 770px;
  }
`;
