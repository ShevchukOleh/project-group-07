import React from 'react';
import { OneBoard } from './Sidebar.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';

export const BordInSidebar = () => {
  const dispatch = useDispatch();
  const boardsInSidebar = useSelector(state => state.board.boards);

  // const [boards, setBoards] = useState(boardsInSidebar);

  console.log(boardsInSidebar);

  const handleDeleteBoard = id => {
    dispatch(deleteBoard(id)).then(() => {
      dispatch(getAllBoards());
    });
  };

  // const handleDragStart = (e, index) => {
  //   e.dataTransfer.setData('text/plain', index);
  // };

  // const handleDragOver = (e, index) => {
  //   e.preventDefault();
  // };

  // const handleDrop = (e, dropIndex) => {
  //   const draggedIndex = e.dataTransfer.getData('text/plain');
  //   const updatedBoards = [...boards];
  //   const [draggedBoard] = updatedBoards.splice(draggedIndex, 1);
  //   updatedBoards.splice(dropIndex, 0, draggedBoard);
  //   setBoards(updatedBoards);
  // };

  return (
    <div className="board-list">
      {boardsInSidebar.map((board, index) => (
        <div
          key={index}
          className="board"
          draggable
          // onDragStart={e => handleDragStart(e, index)}
          // onDragOver={e => handleDragOver(e, index)}
          // onDrop={e => handleDrop(e, index)}
        >
          <OneBoard>
            <div style={{ marginRight: '16px' }}>
              <div>{/* <img src={board.icon.icon_src} alt="icon" /> */}</div>
              {/* {board.icon} */}
              {/* <svg width={18} height={18}>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-IconProject`}
                />
              </svg> */}
            </div>
            <div style={{ flex: 1 }}>{board.title}</div>
            <div style={{ marginRight: '8px' }}>
              <FiEdit2 />
            </div>
            <div>
              <AiOutlineDelete onClick={() => handleDeleteBoard(board._id)} />
            </div>
          </OneBoard>
        </div>
      ))}
    </div>
  );
};
