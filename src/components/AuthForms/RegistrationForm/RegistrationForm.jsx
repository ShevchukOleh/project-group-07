import React from 'react';
import RegistrationTemplate from './RegistrationTemplate';
import { Formik } from 'formik';
import { validationSchemaRestration } from '../JS/validationSchema';
import { registerUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, formikBag) => {
    await dispatch(registerUser(values));
    console.log('submitted:', values);
    navigate('/home');
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchemaRestration}
      onSubmit={handleSubmit}
    >
      {formikProps => <RegistrationTemplate formikProps={formikProps} />}
    </Formik>
  );
};

export default RegistrationForm;
