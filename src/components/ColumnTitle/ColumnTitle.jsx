import React from 'react';
import { ColumnTitleStyle } from './ColumnTitle.styled';
import { FiTrash, FiEdit2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'store/AsyncThunk/asyncThunkBoards';
import { theme } from '../../constants';

export default function ColumnTitle(params) {
  const dispatch = useDispatch();
  const requestData = {
    boardId: params.boardId,
    columnId: params.columnId,
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
