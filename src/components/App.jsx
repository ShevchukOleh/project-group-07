import { Navigate, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './Forms/RegistrationForm/RegistrationForm';
import LoginForm from './Forms/LoginForm/LoginForm';
import Layout from './Layout';
import '../styles/fonts.css';
import 'modern-normalize/modern-normalize.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/createSlices/userAuth/userSelectors';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './Routes/PublicRoute/PublicRoute';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute isLoggedIn={isLoggedIn}>
            <WelcomePage />
          </PublicRoute>
        }
      />

      <Route
        path="registration"
        element={
          <PublicRoute isLoggedIn={isLoggedIn}>
            <RegistrationForm />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute isLoggedIn={isLoggedIn}>
            <LoginForm />
          </PublicRoute>
        }
      />
      <Route
        path="dashboard"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Layout />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="registration" replace={true} />} />
    </Routes>
  );
};
