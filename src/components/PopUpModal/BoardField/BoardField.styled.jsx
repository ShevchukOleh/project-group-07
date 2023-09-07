import styled from '@emotion/styled';

export const BoardFieldStyle = styled.div`
  min-height: 21px;
  position: relative;
  width: 99px;
  margin-bottom: 8px;
  color: #161616;
  font-size: 14px;
  letter-spacing: -0.28px;

  :last-child {
    margin-bottom: 0px;
  }

  & .iconPopUp {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    cursor: pointer;
  }

  .firstElement {
    color: #bedbb0;
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  .firstElement.iconPopUp {
    pointer-events: none;
    cursor: auto;
  }
`;
