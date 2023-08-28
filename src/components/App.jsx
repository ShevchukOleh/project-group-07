import { Navigate, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './Forms/RegistrationForm/RegistrationForm';
import LoginForm from './Forms/LoginForm/LoginForm';
import { Layout } from './Layout';
//import { TasksPage } from 'pages/TasksPage';
import '../styles/fonts.css';
import 'modern-normalize/modern-normalize.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/createSlices/userAuth/userSelectors';
export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Layout />
  ) : (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="registration" element={<RegistrationForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
