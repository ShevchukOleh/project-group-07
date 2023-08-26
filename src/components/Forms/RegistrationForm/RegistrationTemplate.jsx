import {
  TextFieldCustum,
  TextForm,
  FormButtonLink,
  TextFormSubmitButton,
} from "../FormUi/FormUi.styled";
const RegistrationUI = ({ handleSubmit, formData, handleInputChange }) => (
  <TextForm onSubmit={handleSubmit}>
    <TextFieldCustum
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Enter your name"
      required
    />
    <TextFieldCustum
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Enter your email"
      required
    />
    <TextFieldCustum
      type="text"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      placeholder="Create a password"
      required
    />
    <FormButtonLink to="/login">
      <TextFormSubmitButton type="submit">Register Now</TextFormSubmitButton>
    </FormButtonLink>
  </TextForm>
);
export default RegistrationUI;
