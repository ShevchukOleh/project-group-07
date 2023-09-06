import { useDispatch, useSelector } from 'react-redux';
import {
  selectBoards,
  selectBackgrounds,
  selectColumns,
  // selectAllCards,
  // selectLoading,
  selectAllColumnCards,
  filteredAllCards,
  // selectError,
} from 'store/createSlices/board/boardSelectors';
import { useLocation, useParams } from 'react-router-dom';

import ButtonCreate from 'components/ButtonCreate/ButtonCreate';
import { BoardStyle } from './Board.styled';
import CardFormDialog from 'components/CardModal/CardModal';
import { FiltersModal } from 'components/FiltersModal';

import { useEffect, useState } from 'react';
import { getTheme } from 'constants';
import { createColumn } from 'store/AsyncThunk/asyncThunkBoards';
import { Dialog } from '@mui/material';
import ModalAddColumn from 'components/Modals/ModalAddColumn/ModalAddColumn';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import ColumnItem from './ColumnItem';

export default function Board() {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  const boards = useSelector(selectBoards);
  const columns = useSelector(selectColumns);
  // const cards = useSelector(selectAllCards);
  const columnCards = useSelector(filteredAllCards);
  const backgrounds = useSelector(selectBackgrounds);
  const { boardName } = useParams();
  const location = useLocation();
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addColumn, setAddColumn] = useState('');
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [board, setBoard] = useState([]);
  const dispatch = useDispatch();
  const [columnList, setColumnList] = useState([]);

  // const isError = useSelector(selectError);
  const openModalCard = columnId => {
    setSelectedColumnId(columnId);
    // console.log('SelectedColumnId: ', selectedColumnId);
    setIsModalCardOpen(true);
  };
  const closeModalCard = () => {
    setIsModalCardOpen(false);
  };
  const openModal = () => {
    setOpenAddModal(!openAddModal);
  };
  useEffect(() => {
    setColumnList(columns);
  }, [columns]);
  const handleSubmit = e => {
    e.preventDefault();
    if (addColumn) {
      dispatch(createColumn({ boardId, title: addColumn }));
      setAddColumn('');
      setOpenAddModal(!openAddModal);
    }
  };
  useEffect(() => {
    const updatedBoard = boards?.find(board => board.title === boardName);
    if (updatedBoard) {
      setBoard(updatedBoard);
    }
  }, [boards, location.pathname, boardName]);
  const backgroundId = board?.background?._id;
  const boardId = board?._id;
  const background = backgrounds.find(
    background => background._id === backgroundId
  );

  // const backgroundSrc = background?.background_lg_src || '';

  // const backgroundStyle = backgroundSrc
  //   ? { backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover' }
  //   : { backgroundColor: theme?.themeSet?.boardBg };
  
  let backgroundSrc = '';
  const screenWidth = window.innerWidth;

  if (screenWidth <= 375) {
    backgroundSrc = background?.background_sm_src || '';
  } else if (screenWidth >= 768 && screenWidth <= 1439) {
    backgroundSrc = background?.background_lg_src || '';
  } else {
    backgroundSrc = background?.background_xxl_src || '';
  }

const backgroundStyle = backgroundSrc
  ? { backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover' }
  : { backgroundColor: theme?.themeSet?.boardBg };
  
  return (
    <BoardStyle style={backgroundStyle}>
      {boards.length !== 0 && (
        <div className="containerTitle">
          <h2 className="title">{board.title}</h2>
        </div>
      )}

      <div className="filtersPosition">
        <FiltersModal />
      </div>
      {boards.length > 0 && (
        <div className="containerColumns">
          {columnList.map(column => {
            return (
              <div key={column._id} className="containerOneColumn">
                <ColumnItem
                  column={column}
                  columnCards={columnCards}
                  boardId={boardId}
                />
                <ButtonCreate
                  columnId={column._id}
                  text="Add another card"
                  onClick={() => openModalCard(column._id)}
                />

                <CardFormDialog
                  boardId={boardId}
                  columnId={selectedColumnId}
                  isShowModal={isModalCardOpen}
                  hideModal={closeModalCard}
                />
              </div>
            );
          })}
          {/* <div className="containerOneColumn">
            <ColumnTitle text={'In progress'} />
            <div className="containerColumnCard">
              <BoardCard />
            </div>
            <ButtonCreate text="Add another card" onClick={openModalCard} />
          </div>
          <div className="containerOneColumn">
            <ColumnTitle text={'Done'} />
            <div className="containerColumnCard">
              <BoardCard />
            </div>
            <ButtonCreate text="Add another card" onClick={openModalCard} />
          </div> */}
          <div>
            <ButtonCreate text="Add another column" onClick={openModal} />
            {/* =========================modal */}
            <Dialog open={openAddModal} onClose={openModal}>
              <ModalAddColumn
                handleSubmit={handleSubmit}
                setAddColumn={setAddColumn}
                addColumn={addColumn}
                setOpenAddModal={setOpenAddModal}
              />
            </Dialog>
            {/* ===================modal */}
          </div>
        </div>
      )}
    </BoardStyle>
  );
}
