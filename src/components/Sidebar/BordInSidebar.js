import React from 'react';
import { Route, Link, Outlet } from 'react-router-dom';
import { OneBoard } from './Sidebar.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';
import { EditIcon, ImgIcon, ImgBox } from './BordInSidebar.styled';
import Layout from 'components/Layout/Layout';

export const BordInSidebar = () => {
  const dispatch = useDispatch();
  const boardsInSidebar = useSelector(state => state.board.boards);
  // const collect = useSelector(state => state);
  // console.log(collect);
  // console.log(boardsInSidebar);

  const handleDeleteBoard = id => {
    dispatch(deleteBoard(id)).then(() => {
      dispatch(getAllBoards());
    });
  };

  const boardColor = 'green';

  return (
    <div>
      {boardsInSidebar.map((board, index) => (
        <Link
          style={{ textDecoration: 'none' }}
          key={index}
          to={`/home/:${board.title}`}
        >
          <OneBoard color={boardColor}>
            <ImgBox>
              <ImgIcon src={board.icon.icon_src} alt="icon" width={18} />
            </ImgBox>
            <div style={{ flex: 1, fontSize: '14px' }}>{board.title}</div>
            <EditIcon className="icon">
              <FiEdit2 size={16} />
            </EditIcon>
            <div className="icon">
              <AiOutlineDelete
                size={16}
                onClick={() => handleDeleteBoard(board._id)}
              />
            </div>
          </OneBoard>
        </Link>
      ))}
    </div>
  );
};
