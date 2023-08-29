import React from 'react';
import {
  TextForm,
  TextFieldCustum,
  TextFormSubmitButton,
  IconPassowordWrapper,
  // FormButtonLink,
} from '../FormUi/FormUi.styled';
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';
import ErrorComponent from '../FormUi/ErrorComponent/ErrorComponent';
const LoginTemplate = ({ formikProps, showPassword, handleShowPassword }) => (
  <TextForm onSubmit={formikProps.handleSubmit}>
    <div>
      <TextFieldCustum
        type="text"
        name="email"
        value={formikProps.values.email}
        onChange={formikProps.handleChange}
        placeholder="Enter your email"
        autoComplete="on"
      />
      <ErrorComponent name="email" />
    </div>

    <div style={{ position: 'relative', width: '100%' }}>
      <TextFieldCustum
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={formikProps.values.password}
        onChange={formikProps.handleChange}
        placeholder="Create a password"
        autoComplete="on"
        minLength={8}
        maxLength={64}
      />
      <IconPassowordWrapper onClick={handleShowPassword}>
        {showPassword ? (
          <RiEyeCloseLine style={{ color: '#fff', fontSize: '18px' }} />
        ) : (
          <RiEyeLine style={{ color: '#fff', fontSize: '18px' }} />
        )}
      </IconPassowordWrapper>
      <ErrorComponent name="password" />
    </div>
    <TextFormSubmitButton type="submit">Log In Now</TextFormSubmitButton>
  </TextForm>
);

export default LoginTemplate;
