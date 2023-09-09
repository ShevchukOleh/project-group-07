import styled from '@emotion/styled';
import { Field } from 'formik';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  width: 335px;
  padding: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBorder;
  }};
  border-radius: 4px;
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBg;
  }};

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 18px;
  font-weight: 500;
  margin: 0;
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpTitle;
  }};
`;

const ModalButton = styled.button`
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendBg;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendText;
  }};
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  height: 50px;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
  }
`;

const StyledInput = styled(Field)`
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-radius: 4px;
  padding: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.inputBgColor;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.inputColor;
  }};
`;

const StyledTextArea = styled(Field)`
  width: 100%;
  height: 120px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 8px;
  resize: none;
  background-color: ${props => {
    return props?.theme?.themeSet?.inputBgColor;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.inputColor;
  }};
`;

export {
  StyledTextArea,
  StyledInput,
  ModalButton,
  ModalTitle,
  ModalContent,
  ModalOverlay,
};
