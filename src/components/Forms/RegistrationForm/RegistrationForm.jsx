import React from 'react';
import {
  FormContainer,
  LinkFormWrapper,
  LinkFormButtonNav,
  ContainerEntry,
} from '../FormUi/FormUi.styled';
import { useLocation } from 'react-router-dom';
import RegistrationTemplate from './RegistrationTemplate';
import { currentLink } from '../JS/currentColor';
import { Formik } from 'formik';
import { validationSchemaRestration } from '../JS/validationSchema';
const RegistrationForm = () => {
  const location = useLocation();
  const isCurrentRegistrationRoute = location.pathname === '/registration';
  const isCurrentLoginRoute = location.pathname === '/login';

  const handleSubmit = (values, formikBag) => {
    console.log('submitted:', values);
  };
  return (
    <ContainerEntry>
      <FormContainer>
        <LinkFormWrapper>
          <LinkFormButtonNav
            style={{
              color: currentLink(isCurrentRegistrationRoute),
            }}
            to="/registration"
          >
            Registration
          </LinkFormButtonNav>
          <LinkFormButtonNav
            style={{
              color: currentLink(isCurrentLoginRoute),
            }}
            to="/login"
          >
            Log In{' '}
          </LinkFormButtonNav>
        </LinkFormWrapper>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchemaRestration}
          onSubmit={handleSubmit}
        >
          {formikProps => <RegistrationTemplate formikProps={formikProps} />}
        </Formik>
      </FormContainer>
    </ContainerEntry>
  );
};

export default RegistrationForm;
