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
} from './NeedHelpModal.styled';

const ModalForm = ({ isModalOpen, closeModal }) => {
  const initialValues = {
    email: '',
    comment: '',
  };

  const handleSubmit = values => {
    if (values.email && values.comment) {
      closeModal();
      console.log(values);
    } else {
      alert('Sorry');
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {isModalOpen && (
        <ModalOverlay onClick={handleBackdropClick}>
          <ModalContent>
            <ModalTitle>Need Help</ModalTitle>
            <IconClose>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-x-close`}
                fill="black"
              />
            </IconClose>
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
