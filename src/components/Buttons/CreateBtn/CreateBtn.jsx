import { StyledCreateBtn, StyledAddIconBig } from './CreateBtn.styled';

export const CreateBtn = ({ onClick }) => (
  <StyledCreateBtn onClick={onClick}>
    <StyledAddIconBig />
  </StyledCreateBtn>
);
