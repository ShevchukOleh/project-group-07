import {
  StyledBaseBtn,
  StyledIconBox,
  StyledAddIcon,
  StyledBtnLabel,
} from './BaseBtn.styled';

export const BaseBtn = ({ label, onClick, type }) => (
  <StyledBaseBtn onClick={onClick} type={type}>
    {label !== 'Send' && (
      <StyledIconBox>
        <StyledAddIcon />
      </StyledIconBox>
    )}

    <StyledBtnLabel>{label}</StyledBtnLabel>
  </StyledBaseBtn>
);
