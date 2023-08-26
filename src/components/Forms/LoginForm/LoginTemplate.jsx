import React from 'react';
import {
  TextForm,
  TextFieldCustum,
  TextFormSubmitButton,
  IconPassowordWrapper,
} from '../FormUi/FormUi.styled';
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';
import ErrorComponent from '../FormUi/ErrorComponent/ErrorComponent';
const LoginTemplate = ({ formikProps, showPassword, handleShowPassword }) => (
  <TextForm onSubmit={formikProps.handleSubmit}>
    <TextFieldCustum
      type="text"
      name="email"
      value={formikProps.values.email}
      onChange={formikProps.handleChange}
      placeholder="Enter your email"
      required
      autoComplete="on"
    />
    <ErrorComponent />
    <div style={{ position: 'relative', width: '100%' }}>
      <TextFieldCustum
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={formikProps.values.password}
        onChange={formikProps.handleChange}
        placeholder="Create a password"
        required
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,64}$"
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
      <ErrorComponent />
    </div>

    {/* <FormButtonLink to="/login"> */}
    <TextFormSubmitButton type="submit">Log In Now</TextFormSubmitButton>
    {/* </FormButtonLink> */}
  </TextForm>
);

export default LoginTemplate;
