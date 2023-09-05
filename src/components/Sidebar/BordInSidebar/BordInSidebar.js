import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { OneBoard } from '../Sidebar.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';
import { EditIcon, ImgIcon, ImgBox } from './BordInSidebar.styled';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
// import Layout from 'components/Layout/Layout';
import ModalEditFormDialog from 'components/Modals/ModalEditBoard/ModalEditBoard';

export const BordInSidebar = ({ filteredItems }) => {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  // const boardsInSidebar = useSelector(state => state.board.boards);
  // const collect = useSelector(state => state);
  // console.log(collect);
  // console.log(boardsInSidebar);

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [editBoard, setIsEditBoard] = useState('')
  const handleOpenEditModal = () => {
  setIsOpenEditModal(true)
  }

  const handleCloseEditModal = () => {
     setIsOpenEditModal(false)
  }
  
  const handleSubmit = () => {
    console.log(editBoard)
  }

  const handleDeleteBoard = id => {
    const previousPath = '/home';
    dispatch(deleteBoard(id)).then(() => {
      dispatch(getAllBoards());
      navigation(`${previousPath}`);
    });
  };

  const handleItemClick = (index, title) => {
    setSelectedItem(index);
  };

  const boardIndicationColor = theme.themeSet.sidebarBoardIndication;

  return (
    <div>
      {filteredItems.map((board, index) => (
        <Link
          onClick={() => handleItemClick(index, board.title)}
          style={{ textDecoration: 'none' }}
          key={index}
          to={`/home/${board.title}`}
        >
          <OneBoard
            color={boardIndicationColor}
            isSelected={selectedItem === index}
          >
            {/* <div key={index} onClick={() => handleItemClick(index)}>
           <OneBoard
             color={boardIndicationColor}
             isSelected={selectedItem === index}
        > */}

            <ImgBox>
              <ImgIcon src={board.icon.icon_src} alt="icon" width={18} />
            </ImgBox>

            <div style={{ flex: 1, fontSize: '14px' }}>{board.title}</div>

            <EditIcon className="icon edit">
              
             <FiEdit2 size={16}
              onClick={handleOpenEditModal}/>
            </EditIcon>

            <div className="icon delete">
              <AiOutlineDelete
                size={16}
                onClick={() => handleDeleteBoard(board._id)}
              />
            </div>
                        
            <ModalEditFormDialog
            handleSubmit={handleSubmit}
            board={board._id}
            closeEditModal={handleCloseEditModal}
            isOpenEditModal={isOpenEditModal}
            setEditBoard={setIsEditBoard}
            editBoard={editBoard}
            />   
            
          </OneBoard>
        </Link>
      ))}
    </div>
  );
};
