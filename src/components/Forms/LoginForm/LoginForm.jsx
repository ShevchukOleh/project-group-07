import React, { useState } from 'react';
import {
  FormContainer,
  LinkFormWrapper,
  LinkFormButtonNav,
  ContainerEntry,
} from '../FormUi/FormUi.styled';

import { useLocation } from 'react-router-dom';
import LoginUI from './LoginTemplate';
import { currentLink } from '../JS/currentColor';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const location = useLocation();
  const isCurrentRegistrationRoute = location.pathname === '/registration';
  const isCurrentLoginRoute = location.pathname === '/login';
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(prevShow => !prevShow);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
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
        <LoginUI
          handleSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
        />
      </FormContainer>
    </ContainerEntry>
  );
};

export default LoginForm;
