import { Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './Forms/RegistrationForm/RegistrationForm';
import LoginForm from './Forms/LoginForm/LoginForm';
import { Layout } from './Layout';
//import { TasksPage } from 'pages/TasksPage';

import '../styles/fonts.css';
import 'modern-normalize/modern-normalize.css';

export const App = () => {
  return true ? (
    <Layout />
  ) : (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="registration" element={<RegistrationForm />} />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  );
};
