const { Outlet } = require('react-router-dom');
const {
  FormContainer,
  ContainerEntry,
  LinkFormWrapper,
  LinkFormButtonNav,
} = require('./FormUi/FormUi.styled');

const Auth = () => {
  return (
    <ContainerEntry>
      <FormContainer>
        <LinkFormWrapper>
          <LinkFormButtonNav activeclassname="active" to="registration">
            Registration
          </LinkFormButtonNav>
          <LinkFormButtonNav to="login">Log In </LinkFormButtonNav>
        </LinkFormWrapper>
        <Outlet />
      </FormContainer>
    </ContainerEntry>
  );
};
export default Auth;
