import React, { useState } from 'react';
import { ColumnTitleStyle } from './ColumnTitle.styled';
import { FiTrash, FiEdit2 } from 'react-icons/fi';

import { theme } from '../../constants';

import { useDispatch } from 'react-redux';
import {
  deleteColumn,
  editColumnById,
} from 'store/AsyncThunk/asyncThunkBoards';


export default function ColumnTitle(params) {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editColumn, setEditColumn] = useState('');

  const requestData = {
    boardId: params.boardId,
    columnId: params.columnId,
  };
  // const openModal = () => {
  //   setOpenEditModal(!openEditModal);
  // };
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

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          gap: '8px',
        }}
      >
        <FiEdit2
          style={{
            cursor: 'pointer',
            color: `${theme?.themeSet?.cardPriorityIcon}`,
          }}
        />

      {/* <div style={{ display: 'flex', gap: 5 }}>
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
        {isLoading && <LoaderComponent />} */}
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
