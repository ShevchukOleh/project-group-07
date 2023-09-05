import React from 'react';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  StyledTextArea,
  StyledInput,
  ModalButton,
  ModalTitle,
  ModalContent,
  ModalOverlay,
  IconClose,
  CloseBtn,
} from './NeedHelpModal.styled';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useSelector } from 'react-redux';

const ModalForm = ({
  isNeedHelpModal,
  needHelpModalShow,
  setisNeedHelpModal,
}) => {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme;
  const theme = getTheme(currentTheme);

  const [focusInput, setFocusInput] = useState(false);
  const [focusComment, setFocusComment] = useState(false);

  const inputBorderColor = inputStatus =>
    inputStatus
      ? theme?.themeSet?.inputBorderFocus
      : theme?.themeSet?.inputBorder;

  const initialValues = {
    email: '',
    comment: '',
  };

  const handleSubmit = values => {
    if (values.email && values.comment) {
      console.log(values);
      setisNeedHelpModal(false);
    } else {
      alert('Sorry');
    }
  };

  return (
    <div>
      {isNeedHelpModal && (
        <ModalOverlay onClick={needHelpModalShow} id="backdropNeedHelp">
          <ModalContent>
            <ModalTitle>Need Help</ModalTitle>
            <CloseBtn>
              <IconClose onClick={needHelpModalShow} />
            </CloseBtn>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onFocus={() => setFocusInput(true)}
                  onBlur={() => setFocusInput(false)}
                  style={{ borderColor: inputBorderColor(focusInput) }}
                />
                <StyledTextArea
                  component="textarea"
                  name="comment"
                  placeholder="Comment"
                  required
                  onFocus={() => setFocusComment(true)}
                  onBlur={() => setFocusComment(false)}
                  style={{ borderColor: inputBorderColor(focusComment) }}
                />
                <ModalButton type="submit">Send</ModalButton>
              </Form>
            </Formik>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ModalForm;
