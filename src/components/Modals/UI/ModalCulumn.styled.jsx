import styled from '@emotion/styled';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const ColumnModalContainer = styled.div`
  height: 221px;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBg;
  }};
  width: 335px;
  padding: 24px;
  position: relative;
  border-radius: 5px;
  border: 1px solid
    ${props => {
      return props?.theme?.themeSet?.modalHelpBorder;
    }};

  @media screen and (min-width: 480px) {
    width: 350px;
  }
`;

const ColumnModalTitle = styled.h3`
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpTitle;
  }};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  margin-top: 0;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

const ColumnModalForm = styled.form`
  max-width: 302px;
  border-radius: 8px;
`;

const ColumnModalFormInput = styled.input`
  border-radius: 8px;
  border: 1px solid
    ${props => {
      return props?.theme?.themeSet?.inputOtherBorder;
    }};
  outline: none;
  opacity: 0.4;
  width: 100%;
  color: ${props => {
    return props?.theme?.themeSet?.inputColor;
  }};
  padding: 14px 0 14px 18px;
  background-color: ${props => {
    return props?.theme?.themeSet?.inputBgColor;
  }};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 24px;

  ::placeholder {
    color: ${props => {
      return props?.theme?.themeSet?.inputPlaceholder;
    }};
  }

  &:hover {
    border: 1px solid
      ${props => {
        return props?.theme?.themeSet?.inputOtherHover;
      }};
  }
`;

const ColumnModalFormBtn = styled.button`
  display: flex;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  gap: 5px;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendBg;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendText;
  }};
  width: 100%;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
  }
`;

const IconPlusWrapper = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${props => {
    return props?.theme?.themeSet?.boxIconBg;
  }};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconCrossWrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
`;

const IconPlus = styled(AiOutlinePlus)`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props?.theme?.themeSet?.iconFill;
  }};
`;

const IconClose = styled(AiOutlineClose)`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props?.theme?.themeSet?.modalHelpTitle;
  }};

  &:hover {
    transform: scale(1.1);
    fill: red;
  }
`;

export {
  ColumnModalContainer,
  ColumnModalTitle,
  ColumnModalForm,
  ColumnModalFormInput,
  ColumnModalFormBtn,
  IconPlusWrapper,
  IconCrossWrapper,
  IconPlus,
  IconClose,
};
