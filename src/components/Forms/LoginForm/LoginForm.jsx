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
const LoginForm = () => {
  const dispatch = useDispatch();
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
          <LinkFormButtonNav activeClassName="active" to="/registration">
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
