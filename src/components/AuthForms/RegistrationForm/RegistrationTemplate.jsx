import React from 'react';
import {
  TextForm,
  TextFieldCustum,
  // FormButtonLink,
  TextFormSubmitButton,
  IconPassowordWrapper,
  ContainerErrorIcon,
} from '../FormUi/FormUi.styled';
import { ErrorComponent } from '../FormUi/ErrorComponent/ErrorComponent';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

const RegistrationTemplate = ({
  formikProps,
  showPassword,
  handleShowPassword,
}) => (
  <TextForm onSubmit={formikProps.handleSubmit}>
    <div>
      <TextFieldCustum
        id="name"
        name="name"
        value={formikProps.values.name}
        onChange={formikProps.handleChange}
        placeholder="Enter your name"
      />
      <ErrorComponent name="name" />
    </div>

    <div>
      <TextFieldCustum
        type="email"
        id="email"
        name="email"
        value={formikProps.values.email}
        onChange={formikProps.handleChange}
        placeholder="Enter your email"
      />
      <ErrorComponent name="email" />
    </div>
    <div>
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
      <ContainerErrorIcon>
        <IconPassowordWrapper onClick={handleShowPassword}>
          {showPassword ? (
            <RiEyeCloseLine style={{ color: '#fff', fontSize: '18px' }} />
          ) : (
            <RiEyeLine style={{ color: '#fff', fontSize: '18px' }} />
          )}
        </IconPassowordWrapper>
        <ErrorComponent name="password" />
      </ContainerErrorIcon>
    </div>

    <TextFormSubmitButton type="submit">Register Now</TextFormSubmitButton>
  </TextForm>
);

export default RegistrationTemplate;
