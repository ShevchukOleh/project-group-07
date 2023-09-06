import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './AuthForms/RegistrationForm/RegistrationForm';
import LoginForm from './AuthForms/LoginForm/LoginForm';
import '../styles/fonts.css';
import 'modern-normalize/modern-normalize.css';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './Routes/PublicRoute/PublicRoute';
import AuthForms from './AuthForms/AuthForms';
import Board from './Board/Board';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { getTheme } from 'constants';
import EmptyBoardsBaner from './Board/EmptyBoardsBaner/EmptyBoard';
import { lazy } from 'react';
const Layout = lazy(() => import('./Layout'));
export const App = () => {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  const isLoggedInWithToken = useSelector(selectToken);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route element={<PublicRoute isLoggedIn={isLoggedInWithToken} />}>
          <Route path="/welcome" element={<WelcomePage />} end />
          <Route path="/auth" element={<AuthForms />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="registration" element={<RegistrationForm />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute isLoggedIn={isLoggedInWithToken} />}>
          <Route path="home" element={<Layout />}>
            <Route index element={<EmptyBoardsBaner />} />
            <Route path=":boardName" element={<Board />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/welcome" replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
};
