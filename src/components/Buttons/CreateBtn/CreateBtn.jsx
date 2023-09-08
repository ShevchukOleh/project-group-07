import { StyledCreateBtn, StyledAddIconBig } from './CreateBtn.styled';

export const CreateBtn = ({ onClick }) => (
  <StyledCreateBtn type="button" onClick={onClick}>
    <StyledAddIconBig />
  </StyledCreateBtn>
);
