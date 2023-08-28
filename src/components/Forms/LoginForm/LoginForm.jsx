import React, { useEffect, useState } from 'react';
import {
  ContainerEntry,
  FormContainer,
  LinkFormWrapper,
  LinkFormButtonNav,
} from '../FormUi/FormUi.styled';
import { Formik } from 'formik';
import LoginTemplate from './LoginTemplate';
import { validationSchemaLogin } from '../JS/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(prevShow => !prevShow);
  };

  const handleSubmit = async (values, formikBag) => {
    console.log('submitted:', values);
    await dispatch(loginUser(values));
    navigate('/dashboard');
  };

  return (
    <ContainerEntry>
      <FormContainer>
        <LinkFormWrapper>
          <LinkFormButtonNav activeclassname="active" to="/registration">
            Registration
          </LinkFormButtonNav>
          <LinkFormButtonNav to="/login">Log In </LinkFormButtonNav>
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
