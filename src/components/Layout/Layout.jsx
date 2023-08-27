import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';
import BackDrop from 'components/BackDrop/BackDrop';
import { useState } from 'react';
import FormDialog from 'components/ModalBoard/ModalBoard';


export const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const hideModal = () => {
    setIsShowModal(false);
  };
  return (
    <Container>
      <Sidebar setIsShowModal={setIsShowModal} />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isShowModal && <BackDrop hideModal={hideModal}></BackDrop>};
      <FormDialog></FormDialog>
    </Container>
  );
};
