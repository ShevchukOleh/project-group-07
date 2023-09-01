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
import {
  getAllBoards,
  getAllColums,
  getBackgroundBoard,
} from '../../store/AsyncThunk/asyncThunkBoards';
import {
  selectBoards,
  // selectColumns,
} from 'store/createSlices/board/boardSelectors';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 1439) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isShowModal, setIsShowModal] = useState(false);
  const hideModal = () => {
    setIsShowModal(false);
  };
  const dispatch = useDispatch();

  const boards = useSelector(selectBoards);
  // console.log('boards: ', boards);
  // const columns = useSelector(selectColumns);
  // console.log('columns: ', columns);

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBackgroundBoard());

    boards.length !== 0 && dispatch(getAllColums(boards[0]._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
        <BackDrop isShowModal={isShowModal} hideModal={hideModal}></BackDrop>
      )}
    </Container>
  );
};

export default Layout;
