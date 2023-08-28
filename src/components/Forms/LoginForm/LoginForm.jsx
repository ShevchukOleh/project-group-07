import React, { useEffect, useState } from 'react';
import {
  ContainerEntry,
  FormContainer,
  LinkFormWrapper,
  LinkFormButtonNav,
} from '../FormUi/FormUi.styled';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import LoginTemplate from './LoginTemplate';
import { currentLink } from '../JS/currentColor';
import { validationSchemaLogin } from '../JS/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
const LoginForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isCurrentRegistrationRoute = location.pathname === '/registration';
  const isCurrentLoginRoute = location.pathname === '/login';
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(prevShow => !prevShow);
  };

  const handleSubmit = (values, formikBag) => {
    console.log('submitted:', values);
    dispatch(loginUser(values));
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
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchemaLogin}
          onSubmit={handleSubmit}
        >
          {formikProps => (
            <LoginTemplate
              formikProps={formikProps}
              handleShowPassword={handleShowPassword}
              showPassword={showPassword}
            />
          )}
        </Formik>
      </FormContainer>
    </ContainerEntry>
  );
};

export default LoginForm;
