import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectBackgrounds,
} from 'store/createSlices/board/boardSelectors';
import { useParams } from 'react-router-dom';

import ButtonCreate from 'components/ButtonCreate/ButtonCreate';
import { BoardStyle } from './Board.styled';
import BoardCard from 'components/BoardCard/BoardCard';
import ColumnTitle from 'components/ColumnTitle/ColumnTitle';
import { FiltersModal } from 'components/FiltersModal';
import { theme } from '../../constants';

export default function Board({ setIsShowModal }) {
  const boards = useSelector(selectBoards);
  const backgrounds = useSelector(selectBackgrounds);
  const { boardName } = useParams();

  const board = boards.find(board => board.title === boardName) || boards[0];
  const backgroundId = board?.background;
  const background = backgrounds.find(
    background => background._id === backgroundId
  );
  const backgroundSrc = background?.background_lg_src || '';
  const backgroundStyle = backgroundSrc
    ? { backgroundImage: `url(${backgroundSrc})` }
    : { backgroundColor: theme?.themeSet?.boardBg };
  
  return (
    <BoardStyle style={backgroundStyle}>
      {boards.length !== 0 && (
        <div className="containerTitle">
          <h2 className="title">{board.title}</h2>
        </div>
      )}

      <div className="filtersPosition">
        <FiltersModal />
      </div>

      {boards.length !== 0 && (
        <div className="containerColumns">
          <div className="containerOneColumn">
            <ColumnTitle text={'To Do'} />
            <div className="containerColumnCard">
              <BoardCard />
            </div>
            <ButtonCreate
              text="Add another card"
              onClick={() => setIsShowModal(true)}
            />
          </div>
          <div className="containerOneColumn">
            <ColumnTitle text={'In progress'} />
            <div className="containerColumnCard">
              <BoardCard />
            </div>
            <ButtonCreate
              text="Add another card"
              onClick={() => setIsShowModal(true)}
            />
          </div>
          <div className="containerOneColumn">
            <ColumnTitle text={'Done'} />
            <div className="containerColumnCard">
              <BoardCard />
            </div>
            <ButtonCreate
              text="Add another card"
              onClick={() => setIsShowModal(true)}
            />
          </div>
          <div>
            <ButtonCreate
              text="Add another column"
              onClick={() => setIsShowModal(true)}
            />
          </div>
        </div>
      )}
      {boards.length === 0 && (
        <div className="emptyBoard">
          Before starting your project, it is essential to create a board to
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </div>
      )}
    </BoardStyle>
  );
}
