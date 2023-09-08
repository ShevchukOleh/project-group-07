import { StyledCloseBtn, StyledCloseIcon } from './CloseBtn.styled';

export const CloseBtn = ({ onClick }) => (
  <StyledCloseBtn onClick={onClick}>
    <StyledCloseIcon />
  </StyledCloseBtn>
);
