import React from 'react';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  StyledTextArea,
  StyledInput,
  ModalTitle,
  ModalContent,
  ModalOverlay,
} from './NeedHelpModal.styled';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { useSelector } from 'react-redux';
import { submitHelp } from 'store/AsyncThunk/asyncThunkBoards';
import { useDispatch } from 'react-redux';
import { CloseBtn } from 'components/Buttons/CloseBtn';
import { BaseBtn } from 'components/Buttons/BaseBtn';

const ModalForm = ({
  isNeedHelpModal,
  needHelpModalShow,
  setisNeedHelpModal,
}) => {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  const [focusInput, setFocusInput] = useState(false);
  const [focusComment, setFocusComment] = useState(false);

  const inputBorderColor = inputStatus =>
    inputStatus
      ? theme?.themeSet?.inputBorderFocus
      : theme?.themeSet?.inputBorder;

  const initialValues = {
    email: '',
    message: '',
  };

  const handleSubmit = values => {
    if (values.email && values.message) {
      console.log(values);
      setisNeedHelpModal(false);
      dispatch(submitHelp({ values }));
    }
  };
  const dispatch = useDispatch();

  return (
    <div>
      {isNeedHelpModal && (
        <ModalOverlay onClick={needHelpModalShow} id="backdropNeedHelp">
          <ModalContent>
            <ModalTitle>Need Help</ModalTitle>
            <CloseBtn onClick={needHelpModalShow} />

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
                  name="message"
                  placeholder="Comment"
                  required
                  onFocus={() => setFocusComment(true)}
                  onBlur={() => setFocusComment(false)}
                  style={{ borderColor: inputBorderColor(focusComment) }}
                />
                <BaseBtn onClick={handleSubmit} label={'Send'} />
              </Form>
            </Formik>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ModalForm;
