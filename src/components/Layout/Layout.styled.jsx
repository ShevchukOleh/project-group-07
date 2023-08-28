import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 320px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;

  @media screen and (min-width: 320px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;