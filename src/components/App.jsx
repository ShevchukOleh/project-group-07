import { Navigate, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './AuthForms/RegistrationForm/RegistrationForm';
import LoginForm from './AuthForms/LoginForm/LoginForm';
import Layout from './Layout';
import '../styles/fonts.css';
import 'modern-normalize/modern-normalize.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/createSlices/userAuth/userSelectors';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './Routes/PublicRoute/PublicRoute';
import AuthForms from './AuthForms/AuthForms';
export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      <Route
        path="/welcome"
        element={
          <PublicRoute isLoggedIn={isLoggedIn}>
            <WelcomePage />
          </PublicRoute>
        }
      />
      <Route
        path="/auth"
        element={
          <PublicRoute isLoggedIn={isLoggedIn}>
            <AuthForms />
          </PublicRoute>
        }
      >
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Route>
      <Route
        path="home"
        element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Layout />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to="/auth/registration" replace={true} />}
      />
    </Routes>
  );
};
