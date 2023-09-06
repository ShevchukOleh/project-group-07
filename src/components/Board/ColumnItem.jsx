import { useEffect, useState } from 'react';

const { default: BoardCard } = require('components/BoardCard/BoardCard');
const { default: ColumnTitle } = require('components/ColumnTitle/ColumnTitle');
const ColumnItem = ({ column, boardId, columnCards }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(columnCards[column._id]);
  }, [columnCards, column._id]);
  return (
    <>
      <ColumnTitle
        boardId={boardId}
        columnId={column._id}
        text={column.title}
      />
      <div className="containerColumnCard">
        {cards &&
          cards.map(card => (
            <BoardCard
              key={card._id}
              boardId={boardId}
              columnId={column._id}
              card={card}
            />
          ))}
      </div>
    </>
  );
};
export default ColumnItem;
