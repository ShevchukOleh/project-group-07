import React, { useState } from 'react';
import { Formik } from 'formik';
import LoginTemplate from './LoginTemplate';
import { validationSchemaLogin } from '../JS/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useNavigate } from 'react-router-dom';
import {
  selectError,
  selectIsLoggedIn,
} from 'store/createSlices/userAuth/userSelectors';
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogined = useSelector(selectIsLoggedIn);
  // const getError = useSelector(selectError);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const handleShowPassword = () => {
    setShowPassword(prevShow => !prevShow);
  };
  const objErr = {
    objError: loginError,
  };
  const handleSubmit = async (values, formikBag) => {
    console.log('submitted:', values);
    await dispatch(loginUser(values));
    if (!isLogined) {
      console.log('Wrong Log In');
      setLoginError('Incorrect email or password');
      return;
    } else {
      navigate('/home');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchemaLogin}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <LoginTemplate
          loginError={objErr}
          formikProps={formikProps}
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
        />
      )}
    </Formik>
  );
};

export default LoginForm;
