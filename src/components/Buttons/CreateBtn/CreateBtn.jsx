import { StyledCreateBtn, StyledAddIcon } from './CreateBtn.styled';

export const CreateBtn = ({ onClick }) => (
  <StyledCreateBtn onClick={onClick}>
    <StyledAddIcon />
  </StyledCreateBtn>
);
