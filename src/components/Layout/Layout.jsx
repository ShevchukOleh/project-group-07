import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { AppBar } from 'components/AppBar';
import { Container } from './Layout.styled';
import BackDrop from 'components/BackDrop/BackDrop';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// import FormDialog from 'components/ModalBoard/ModalBoard';

import { useDispatch, useSelector } from 'react-redux';
// import Board from 'components/Board/Board';
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
import EmptyBoardsBaner from 'components/Board/EmptyBoardsBaner/EmptyBoard';

const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { boardName } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);

  const isTablet = useMediaQuery({ minWidth: 325, maxWidth: 1439 });

  const hideModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    dispatch(getAllBoards());
    dispatch(getBackgroundBoard());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllCardsSequentially = boardId => async dispatch => {
    try {
      const columnResponse = await dispatch(getAllColums(boardId));

      const allColumn = columnResponse.payload;

      for (const column of allColumn) {
        await dispatch(getAllCards({ boardId, columnId: column._id }));
      }
    } catch (error) {}
  };
  useEffect(() => {
    const board = boards.find(board => board.title === boardName);
    const boardId = board?._id;
    if (boardId) {
      dispatch(getAllCardsSequentially(boardId));
    }
  }, [dispatch, boards, boardName]);
  return (
    <Container>
      {!isTablet && <Sidebar setIsShowModal={setIsShowModal} />}
      <div>
        <AppBar />
        <Suspense fallback={null}>
          {boards.length > 0 ? <Outlet /> : <EmptyBoardsBaner />}
        </Suspense>
      </div>
      {isShowModal && (
        <BackDrop isShowModal={isShowModal} hideModal={hideModal}></BackDrop>
      )}
    </Container>
  );
};

export default Layout;
