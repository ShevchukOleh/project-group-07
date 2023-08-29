import LoaderComponent from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoading } from 'store/createSlices/userAuth/userSelectors';

const { Outlet } = require('react-router-dom');
const {
  FormContainer,
  ContainerEntry,
  LinkFormWrapper,
  LinkFormButtonNav,
} = require('./FormUi/FormUi.styled');

const Auth = () => {
  const isLoading = useSelector(selectLoading);
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
        {isLoading && <LoaderComponent />}
      </FormContainer>
    </ContainerEntry>
  );
};
export default Auth;
