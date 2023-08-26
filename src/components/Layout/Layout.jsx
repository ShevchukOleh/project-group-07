import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar }  from '../Sidebar/Sidebar';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
