import { Navigate, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './Forms/RegistrationForm/RegistrationForm';
import LoginForm from './Forms/LoginForm/LoginForm';
import { Layout } from './Layout';
import '../styles/fonts.css';
import 'modern-normalize/modern-normalize.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/createSlices/userAuth/userSelectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="registration" element={<RegistrationForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Layout />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="login" replace={true} />} />
    </Routes>
  );
};
