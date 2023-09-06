import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { OneBoard } from '../Sidebar.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';
import { EditIcon, ImgIcon, ImgBox } from './BordInSidebar.styled';
import { getTheme } from 'constants';
import { editBoardById } from 'store/AsyncThunk/asyncThunkBoards';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
// import Layout from 'components/Layout/Layout';
import { selectBoards } from '../../../store/createSlices/board/boardSelectors';
import ModalEditFormDialog from 'components/Modals/ModalEditBoard/ModalEditBoard';
import { useParams } from 'react-router-dom';

export const BordInSidebar = ({ filteredItems }) => {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  // const navigate = useNavigate();
  const { boardName } = useParams();
  // const location = useLocation();
  const [boardEl, setBoardEl] = useState([]);
  // const token = useSelector(selectToken);
  const boardsArray = useSelector(selectBoards);

  useEffect(() => {
    const updatedBoard = boardsArray.find(board => board.title === boardName);
    if (updatedBoard) {
      setBoardEl(updatedBoard);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardsArray]);

  // const boardsInSidebar = useSelector(state => state.board.boards);
  // const collect = useSelector(state => state);
  // console.log(collect);
  // console.log(boardsInSidebar);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [editBoard, setIsEditBoard] = useState('');
  const [editBoardIcon, setIsEditBoardIcon] = useState('');
  const [editBoardImg, setIsEditBoardImg] = useState('');
  const [error, setError] = useState(false);

  const boardId = boardEl._id;
  const editBoardObject = {
    title: editBoard,
    icon: editBoardIcon,
    background: editBoardImg,
  };
  const handleOpenEditModal = () => {
    setIsOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setIsOpenEditModal(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (editBoard && editBoardIcon && editBoardImg) {
      dispatch(editBoardById({ boardId, editBoardObject }));
      dispatch(getAllBoards());
      navigation(`/home/${editBoard}`);
      setIsOpenEditModal(!isOpenEditModal);
      setIsEditBoard('');
      setIsEditBoardImg('');
      setIsEditBoardIcon('');
    } else {
      setError(!error);
    }
  };
  const handleChangeIcon = event => {
    const clickedId = event.currentTarget.getAttribute('data-icon-id');
    setIsEditBoardIcon(clickedId);
  };
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
  const takeIMG = _id => {
    setIsEditBoardImg(_id);
    console.log(_id);
  };
  const boardIndicationColor = theme.themeSet.sidebarBoardIndication;
  return (
    <div>
      {filteredItems.map((board, index) => (
        <div key={board._id}>
          <Link
            onClick={() => handleItemClick(index, board.title)}
            style={{ textDecoration: 'none' }}
            key={board._id}
            to={`/home/${board.title}`}
          >
            <OneBoard
              color={boardIndicationColor}
              isSelected={selectedItem === index}
            >
              <ImgBox>
                <ImgIcon src={board.icon.icon_src} alt="icon" width={18} />
              </ImgBox>

              <div style={{ flex: 1, fontSize: '14px' }}>{board.title}</div>

              <EditIcon className="icon edit" onClick={handleOpenEditModal}>
                <FiEdit2 size={16} />
              </EditIcon>

              <div className="icon delete">
                <AiOutlineDelete
                  size={16}
                  onClick={() => handleDeleteBoard(board._id)}
                />
              </div>
            </OneBoard>
          </Link>
          <ModalEditFormDialog
            error={error}
            handleSubmit={handleSubmit}
            board={board._id}
            closeEditModal={handleCloseEditModal}
            isOpenEditModal={isOpenEditModal}
            setEditBoard={setIsEditBoard}
            editBoard={editBoard}
            setIsEditBoardIcon={setIsEditBoardIcon}
            editBoardImg={editBoardImg}
            takeIMG={takeIMG}
            setIsOpenEditModal={setIsOpenEditModal}
            handleChangeIcon={handleChangeIcon}
          />
        </div>
      ))}
    </div>
  );
};
