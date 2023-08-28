import React from 'react';
import {
  TextForm,
  TextFieldCustum,
  FormButtonLink,
  TextFormSubmitButton,
} from '../FormUi/FormUi.styled';
import ErrorComponent from '../FormUi/ErrorComponent/ErrorComponent';

const RegistrationTemplate = ({ formikProps }) => (
  <TextForm onSubmit={formikProps.handleSubmit}>
    <TextFieldCustum
      id="name"
      name="name"
      value={formikProps.values.name}
      onChange={formikProps.handleChange}
      placeholder="Enter your name"
      required
    />
    <ErrorComponent name="name" />

    <TextFieldCustum
      type="email"
      id="email"
      name="email"
      value={formikProps.values.email}
      onChange={formikProps.handleChange}
      placeholder="Enter your email"
      required
    />
    <ErrorComponent name="email" />

    <TextFieldCustum
      type="text"
      id="password"
      name="password"
      value={formikProps.values.password}
      onChange={formikProps.handleChange}
      placeholder="Create a password"
      pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,64}$"
      required
    />
    <ErrorComponent name="password" />

    <TextFormSubmitButton type="submit">Register Now</TextFormSubmitButton>
  </TextForm>
);

export default RegistrationTemplate;
