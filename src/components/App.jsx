// import Sidebar from './Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import RegistrationForm from './Forms/RegistrationForm/RegistrationForm';
import LoginForm from './Forms/LoginForm/LoginForm';
import '../styles/fonts.css'
import 'modern-normalize/modern-normalize.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
      {/* <Sidebar /> */}

      {/* <Layout /> */}
    </div>
  );
};
