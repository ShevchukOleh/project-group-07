import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';
import BackDrop from 'components/BackDrop/BackDrop';
import { useState } from 'react';
// import FormDialog from 'components/ModalBoard/ModalBoard';

import { useDispatch, useSelector } from 'react-redux';
import Board from 'components/Board/Board';
import { getAllBoards } from '../../store/AsyncThunk/asyncThunkBoards';
import { selectBoards } from 'store/createSlices/board/boardSelectors';


const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const hideModal = () => {
    setIsShowModal(false);
  };
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  console.log('boards: ', boards);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);
  return (
    <Container>
      <Sidebar setIsShowModal={setIsShowModal} />
      <div>
        <AppBar />
        <Board setIsShowModal={setIsShowModal} />
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isShowModal && <BackDrop isShowModal={isShowModal} hideModal={hideModal}></BackDrop>};
    </Container>
  );
};

export default Layout;
