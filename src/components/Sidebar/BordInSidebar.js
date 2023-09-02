import React, { useState } from 'react';
import { OneBoard } from './Sidebar.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteBoard, getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';
import { EditIcon, ImgIcon, ImgBox } from './BordInSidebar.styled';

export const BordInSidebar = ({ filteredItems }) => {
  const dispatch = useDispatch();
  // const boardsInSidebar = useSelector(state => state.board.boards);
  // const collect = useSelector(state => state);
  // console.log(collect);
  // console.log(boardsInSidebar);

  const handleDeleteBoard = id => {
    dispatch(deleteBoard(id)).then(() => {
      dispatch(getAllBoards());
    });
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = index => {
    setSelectedItem(index);
  };

  const boardIndicationColor = '#BEDBB0';

  return (
    <div>
      {filteredItems.map((board, index) => (
        <div key={index} onClick={() => handleItemClick(index)}>
          <OneBoard
            color={boardIndicationColor}
            isSelected={selectedItem === index}
          >
            <ImgBox>
              <ImgIcon src={board.icon.icon_src} alt="icon" width={18} />
            </ImgBox>
            <div style={{ flex: 1, fontSize: '14px' }}>{board.title}</div>
            <EditIcon className="icon">
              <FiEdit2 size={16} color="rgba(22, 22, 22, 0.5)" />
            </EditIcon>
            <div className="icon">
              <AiOutlineDelete
                size={16}
                color="rgba(22, 22, 22, 0.5)"
                onClick={() => handleDeleteBoard(board._id)}
              />
            </div>
          </OneBoard>
        </div>
      ))}
    </div>
  );
};
