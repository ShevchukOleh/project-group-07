import React, { useState } from 'react';
import { ColumnTitleStyle, OpenModalBtn } from './ColumnTitle.styled';
import { FiTrash, FiEdit2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {
  deleteColumn,
  editColumnById,
} from 'store/AsyncThunk/asyncThunkBoards';
import ModalEditColumn from 'components/Modals/ModalEditCulmn/ModalEditColumn';
import Dialog from '@mui/material/Dialog';
export default function ColumnTitle(params) {
  const dispatch = useDispatch();
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
      dispatch(editColumnById({ params, title: editColumn }));
      setEditColumn('');
    }
  };
  return (
    <ColumnTitleStyle>
      <p className="titleColumn">{params.text}</p>
      <div style={{ display: 'flex', gap: 5 }}>
        <OpenModalBtn onClick={openModal}>
          <FiEdit2 style={{ color: 'rgba(16, 16, 16, 0.5)' }} />
        </OpenModalBtn>
        <Dialog open={openEditModal} onClose={openModal}>
          <ModalEditColumn
            handleSubmit={handleSubmit}
            setEditColumn={setEditColumn}
            editColumn={editColumn}
            setOpenEditModal={setOpenEditModal}
          />
        </Dialog>
        <FiTrash
          onClick={() => dispatch(deleteColumn(requestData))}
          style={{ cursor: 'pointer', color: 'rgba(16, 16, 16, 0.5)' }}
        />
      </div>
    </ColumnTitleStyle>
  );
}
