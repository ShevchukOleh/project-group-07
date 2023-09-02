import React from 'react';
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

const ModalForm = ({ isNeedHelpModal, needHelpModalShow }) => {
  const initialValues = {
    email: '',
    comment: '',
  };

  const handleSubmit = values => {
    if (values.email && values.comment) {
      console.log(values);
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
              <IconClose />
            </CloseBtn>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <StyledTextArea
                  component="textarea"
                  name="comment"
                  placeholder="Comment"
                  required
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
