import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Bars } from 'components/Bars';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Bars />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
