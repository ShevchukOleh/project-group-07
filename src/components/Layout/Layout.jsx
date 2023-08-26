import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from 'components/SideBar';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <SideBar />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
