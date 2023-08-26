import {
  TextFieldCustum,
  TextForm,
  FormButtonLink,
  TextFormSubmitButton,
  IconPassowordWrapper,
} from "../FormUi/FormUi.styled";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

const LoginUI = ({
  handleSubmit,
  formData,
  handleInputChange,
  showPassword,
  handleShowPassword,
}) => (
  <TextForm onSubmit={handleSubmit}>
    <TextFieldCustum
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Enter your email"
      required
    />
    <div style={{ position: "relative", width: "100%" }}>
      <TextFieldCustum
        type={showPassword ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Create a password"
        required
      />
      <IconPassowordWrapper onClick={handleShowPassword}>
        {showPassword ? (
          <RiEyeCloseLine style={{ color: "#fff", fontSize: "18px" }} />
        ) : (
          <RiEyeLine style={{ color: "#fff", fontSize: "18px" }} />
        )}
      </IconPassowordWrapper>
    </div>
    <FormButtonLink to="/login">
      <TextFormSubmitButton type="submit">Log In Now</TextFormSubmitButton>
    </FormButtonLink>
  </TextForm>
);

export default LoginUI;
