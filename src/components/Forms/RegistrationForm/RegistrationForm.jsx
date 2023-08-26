import React, { useState } from 'react';
import {
  FormContainer,
  LinkFormWrapper,
  LinkFormButtonNav,
  ContainerEntry,
} from '../FormUi/FormUi.styled';
import { useLocation } from 'react-router-dom';
import RegistrationUI from './RegistrationTemplate';
import { currentLink } from '../JS/currentColor';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const location = useLocation();
  const isCurrentRegistrationRoute = location.pathname === '/registration';
  const isCurrentLoginRoute = location.pathname === '/login';

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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

        <RegistrationUI
          handleSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </FormContainer>
    </ContainerEntry>
  );
};

export default RegistrationForm;
