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

const IconClose = styled.svg`
  width: 18px;
  height: 18px;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  padding: 24px;
  border-radius: 8px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 18px;
  font-weight: 500;
  margin: 0;
`;

const ModalButton = styled.button`
  background-color: #bedbb0;
  color: #161616;
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
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 16px;
  padding: 8px;
`;

const StyledTextArea = styled(Field)`
  width: 100%;
  height: 120px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 16px;
  padding: 8px;
  resize: none;
`;

export {
  StyledTextArea,
  StyledInput,
  ModalButton,
  ModalTitle,
  ModalContent,
  ModalOverlay,
  IconClose,
};
