import styled from '@emotion/styled';

export const BoardFieldStyle = styled.div`
  min-height: 21px;
  position: relative;
  width: 99px;
  margin-bottom: 8px;
  color: #161616;
  font-size: 14px;
  letter-spacing: -0.28px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :last-child {
    margin-bottom: 0px;
  }
  :hover {
    color: #bedbb0;
  }

  & .iconPopUp {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
  }

  .localElement {
    color: #bedbb0;
    font-size: 14px;
    letter-spacing: -0.28px;
    cursor: auto;
  }

  .localElement.iconPopUp {
    pointer-events: none;
    cursor: auto;
  }
`;
