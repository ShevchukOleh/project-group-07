import { StyledCloseBtn, StyledCloseIcon } from './CloseBtn.styled';

export const CloseBtn = ({ onClick }) => (
  <StyledCloseBtn type="button" onClick={onClick}>
    <StyledCloseIcon />
  </StyledCloseBtn>
);
