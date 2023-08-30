import React, { useState } from 'react';
import RegistrationTemplate from './RegistrationTemplate';
import { Formik } from 'formik';
import { validationSchemaRestration } from '../JS/validationSchema';
import { registerUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/createSlices/userAuth/userSelectors';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogined = useSelector(selectIsLoggedIn);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(prevShow => !prevShow);
  };
  const handleSubmit = async (values, formikBag) => {
    await dispatch(registerUser(values));
    console.log('submitted:', values);
    if (!isLogined) {
      console.log('Wrong Registration');
      return;
    } else {
      navigate('/home');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchemaRestration}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <RegistrationTemplate
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
          formikProps={formikProps}
        />
      )}
    </Formik>
  );
};

export default RegistrationForm;
