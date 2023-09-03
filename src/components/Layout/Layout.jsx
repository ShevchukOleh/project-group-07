import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';
import BackDrop from 'components/BackDrop/BackDrop';
import { useParams } from 'react-router-dom';

// import FormDialog from 'components/ModalBoard/ModalBoard';

import { useDispatch, useSelector } from 'react-redux';
import Board from 'components/Board/Board';
import {
  getAllBoards,
  getAllCards,
  getAllColums,
  getBackgroundBoard,
} from '../../store/AsyncThunk/asyncThunkBoards';
import {
  selectBoards,
  // selectColumns,
} from 'store/createSlices/board/boardSelectors';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { boardName } = useParams();

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

  const board =
    boards.find(board => `:${board.title}` === boardName) || boards[0];
  const boardId = board?._id;

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBackgroundBoard());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  ////////////////////////////////////////////////////////////////

  const getAllCardsSequentially = boardId => async dispatch => {
    try {
      const columnResponse = await dispatch(getAllColums(boardId));

      // Отримуємо масив карток з результату запиту до першої колонки
      const allColumn = columnResponse.payload;

      // Для кожної карти з масиву викликаємо запит до другої колонки
      for (const column of allColumn) {
        await dispatch(getAllCards({ boardId, columnId: column._id }));
      }

      // Додайте інші запити тут, якщо потрібно
    } catch (error) {
      // Обробка помилок
    }
  };
  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    dispatch(getAllCardsSequentially(boardId));
  }, [boardId, dispatch]);
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
