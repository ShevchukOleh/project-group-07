import styled from '@emotion/styled';

export const Container = styled.div`
  /* min-width: 320px; */
  /* display: flex; */
  /* margin-left: auto;
  margin-right: auto; */

  @media screen and (min-width: 320px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1439px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
