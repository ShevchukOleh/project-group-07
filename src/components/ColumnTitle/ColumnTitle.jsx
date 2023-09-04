import React, { useState } from 'react';
import { ColumnTitleStyle, OpenModalBtn } from './ColumnTitle.styled';
import { FiTrash, FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteColumn,
  editColumnById,
} from 'store/AsyncThunk/asyncThunkBoards';
import ModalEditColumn from 'components/Modals/ModalEditCulmn/ModalEditColumn';
import Dialog from '@mui/material/Dialog';
import {
  // selectError,
  selectLoading,
} from 'store/createSlices/board/boardSelectors';
import LoaderComponent from 'components/Loader/Loader';
import { theme } from '../../constants';

export default function ColumnTitle(params) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editColumn, setEditColumn] = useState('');

  const requestData = {
    boardId: params.boardId,
    columnId: params.columnId,
  };

  const openModal = () => {
    setOpenEditModal(!openEditModal);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editColumn) {
      dispatch(editColumnById({ requestData, title: editColumn }));
      setEditColumn('');
      setOpenEditModal(!openEditModal);
    }
  };

  return (
    <ColumnTitleStyle>
      <p className="titleColumn">{params.text}</p>

      <div style={{ display: 'flex', gap: 5 }}>
        <OpenModalBtn onClick={openModal}>
          <FiEdit2
            style={{
              cursor: 'pointer',
              color: `${theme?.themeSet?.cardPriorityIcon}`,
            }}
          />
        </OpenModalBtn>

        <Dialog open={openEditModal} onClose={openModal} style={{}}>
          <ModalEditColumn
            handleSubmit={handleSubmit}
            setEditColumn={setEditColumn}
            editColumn={editColumn}
            setOpenEditModal={setOpenEditModal}
          />
        </Dialog>

        {isLoading && <LoaderComponent />}
        <FiTrash
          onClick={() => dispatch(deleteColumn(requestData))}
          style={{
            cursor: 'pointer',
            color: `${theme?.themeSet?.cardPriorityIcon}`,
          }}
        />
      </div>
    </ColumnTitleStyle>
  );
}
