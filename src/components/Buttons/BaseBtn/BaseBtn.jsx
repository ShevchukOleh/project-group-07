import {
  StyledBaseBtn,
  StyledIconBox,
  StyledAddIcon,
  StyledBtnLabel,
} from './BaseBtn.styled';

export const BaseBtn = ({ label, onClick }) => (
  <StyledBaseBtn onClick={onClick}>
    {label !== 'Send' && (
      <StyledIconBox>
        <StyledAddIcon />
      </StyledIconBox>
    )}

    <StyledBtnLabel>{label}</StyledBtnLabel>
  </StyledBaseBtn>
);
