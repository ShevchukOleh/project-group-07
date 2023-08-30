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
  const [showSidebar, setShowSidebar] = useState(null);
  const bodyEl = document.querySelector('body');
  bodyEl.onresize = function () {
    if (bodyEl.clientWidth <= 1439) setShowSidebar(false);
    if (bodyEl.clientWidth > 1439) setShowSidebar(true);
  };

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
      {showSidebar && <Sidebar setIsShowModal={setIsShowModal} />}
      <div>
        <AppBar />
        <Board setIsShowModal={setIsShowModal} />
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isShowModal && (
        <FormDialog
          isShowModal={isShowModal}
          hideModal={hideModal}
        ></FormDialog>
      )}
    </Container>
  );
};

export default Layout;
