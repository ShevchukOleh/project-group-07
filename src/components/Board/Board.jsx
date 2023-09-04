import { useDispatch, useSelector } from 'react-redux';
import {
  selectBoards,
  selectBackgrounds,
  selectColumns,
  // selectLoading,
  // selectError,
} from 'store/createSlices/board/boardSelectors';
import { useParams } from 'react-router-dom';

import ButtonCreate from 'components/ButtonCreate/ButtonCreate';
import { BoardStyle } from './Board.styled';
import BoardCard from 'components/BoardCard/BoardCard';
import ColumnTitle from 'components/ColumnTitle/ColumnTitle';
import CardFormDialog from 'components/CardModal/CardModal';
import { FiltersModal } from 'components/FiltersModal';

import { useState } from 'react';

import { theme } from '../../constants';
import { createColumn } from 'store/AsyncThunk/asyncThunkBoards';
import { Dialog } from '@mui/material';
import ModalAddColumn from 'components/Modals/ModalAddColumn/ModalAddColumn';

export default function Board() {
  const boards = useSelector(selectBoards);
  const columns = useSelector(selectColumns);
  const backgrounds = useSelector(selectBackgrounds);
  const { boardName } = useParams();
  const [isModalCardOpen, setIsModalCardOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [addColumn, setAddColumn] = useState('');

  const dispatch = useDispatch();
  // const isError = useSelector(selectError);
  const openModalCard = () => {
    setIsModalCardOpen(true);
  };
  const closeModalCard = () => {
    setIsModalCardOpen(false);
  };
  const openModal = () => {
    setOpenAddModal(!openAddModal);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (addColumn) {
      dispatch(createColumn({ boardId, title: addColumn }));
      setAddColumn('');
      setOpenAddModal(!openAddModal);
    }
  };
  const board = boards.find(board => board.title === boardName);

  const backgroundId = board?.background?._id;
  const boardId = board?._id;

  const background = backgrounds.find(
    background => background._id === backgroundId
  );

  const backgroundSrc = background?.background_lg_src || '';

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
      {boards.length !== 0 && (
        <div className="containerColumns">
          {columns.map(column => {
            return (
              <div key={column._id} className="containerOneColumn">
                <ColumnTitle
                  boardId={boardId}
                  columnId={column._id}
                  text={`${column.title}`}
                />
                <div className="containerColumnCard">
                  <BoardCard />
                </div>

                <ButtonCreate text="Add another card" onClick={openModalCard} />

                <CardFormDialog
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

      {boards.length === 0 && (
        <div className="emptyBoard">
          Before starting your project, it is essential to create a board to
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </div>
      )}
    </BoardStyle>
  );
}
