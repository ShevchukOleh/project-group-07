import styled from '@emotion/styled';
import { Field } from 'formik';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';

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

const CloseBtn = styled(Button)`
  padding: 0;
  min-width: 18px;
  height: 18px;
  position: absolute;
  top: 10px;
  right: 8px;
`;

const IconClose = styled(CloseOutlinedIcon)`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props?.theme?.themeSet?.modalHelpTitle;
  }};
`;

const ModalContent = styled.div`
  position: relative;
  width: 400px;
  padding: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBorder;
  }};
  border-radius: 8px;
   background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpBg;
  }};
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
  height: 50px;
  border: none;
  border-radius: 8px;
  margin-top: 24px;
  cursor: pointer;
`;

const StyledInput = styled(Field)`
  width: 100%;
  height: 40px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-radius: 4px;
  margin-top: 16px;
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
  IconClose,
  CloseBtn,
};
