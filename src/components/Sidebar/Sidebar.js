import React, { useEffect, useState } from 'react';
import plant from '../../images/cup.png';
import { BordInSidebar } from './BordInSidebar';
import { BiHelpCircle } from 'react-icons/bi';
import {
  Block,
  HelpBlock,
  LogOutBlock,
  HelpText,
  NewBoardText,
  BlockContainer,
  BlockContainerCreate,
  InputContainer,
  LogoText,
  Logo,
  LogoContainer,
  SidebarContainer,
  BlockContainerBoard,
  BlockLink,
  ContainerAside,
  PlusIcon,
  CreateButton,
  PlantImg,
  Helpbutton,
} from './Sidebar.styled';
import ModalForm from './NeedHelp/NeedHelpModal';
import FormDialog from '../ModalBoard/ModalBoard';

// import { useDispatch } from 'react-redux';
// import { createBoard } from '../../store/AsyncThunk/asyncThunkBoards';
// import { useNavigate } from 'react-router';

import { logoutUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import SideBarSearch from './SideBarSearch/SideBarSearch';
import { selectBoards } from 'store/createSlices/board/boardSelectors';
import { getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';
// import { createBoard } from 'store/AsyncThunk/asyncThunkBoards';

export const Sidebar = ({ setIsShowModal }) => {
  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);
  const boardsInSidebar = useSelector(selectBoards);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBoardOpen, setIsModalBoardOpen] = useState(false);
  const [boardsList, setBoardsList] = useState(boardsInSidebar); //collection boards
  const [filteredItems, setFilteredItems] = useState(boardsList); //search

  const openModal = () => {
    setIsModalOpen(true);
  };
  // ===============================search
  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  useEffect(() => {
    setBoardsList(boardsInSidebar);
  }, [boardsInSidebar]);
  // =============================search
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalBoard = () => {
    setIsShowModal(false);
    setIsModalBoardOpen(false);
  };
  const handleLogOut = () => {
    dispatch(logoutUser(userToken ?? ''));
  };
  const isBoard = true;

  return (
    <ContainerAside>
      <ModalForm />

      <SidebarContainer>
        <Block>
          <LogoContainer>
            <Logo />
            <LogoText>Task Pro</LogoText>
          </LogoContainer>

          <InputContainer>
            <SideBarSearch
              setFilteredItems={setFilteredItems}
              boardsList={boardsList}
            />
          </InputContainer>

          <BlockContainerCreate>
            <NewBoardText>
              Create a<br />
              new board
            </NewBoardText>

            <FormDialog
              isShowModal={isModalBoardOpen}
              hideModal={closeModalBoard}
            />
            {/* <CreateButton
              onClick={() => {
                setIsShowModal(true);
                // dispatch(
                //   createBoard({
                //     title: 'hello',
                //     icon: '434343434343',
                //   })
                // );
              }}
            >
              <PlusIcon>+</PlusIcon>
            </CreateButton> */}
            <CreateButton
              onClick={() => {
                setIsShowModal(true);
                setIsModalBoardOpen(true);
                // dispatch(
                //   createBoard({
                //     title: 'Some title',
                //     icon: '64eb3c2a8408f19231b21fc5',
                //     background: '64eb2ce10d0d1b1e0a8b9bb2',
                //   })
                // );
              }}
              sx={{
                minWidth: '40px',
                height: '36px',
                marginLeft: '8px',
              }}
            >
              <PlusIcon>+</PlusIcon>
            </CreateButton>
          </BlockContainerCreate>
        </Block>

        {isBoard ? (
          <BlockContainerBoard>
            <BordInSidebar filteredItems={filteredItems} />
          </BlockContainerBoard>
        ) : (
          <></>
        )}

        <Block>
          <BlockContainer marginBottom={24}>
            <PlantImg src={plant} alt="plant" />

            <HelpText>
              If you need help with{' '}
              <BlockLink
                href="http://www.google.com"
                style={{ textDecoration: 'none' }}
              >
                TaskPro
              </BlockLink>
              , check out our support resources or <br /> reach out to our
              <br />
              customer support team.
            </HelpText>

            <HelpBlock>
              <ModalForm isModalOpen={isModalOpen} closeModal={closeModal} />
              <Helpbutton onClick={openModal}>
                <BiHelpCircle size={20} />
                <p style={{ margin: '0', marginLeft: '8px' }}> Need help?</p>
              </Helpbutton>
            </HelpBlock>
          </BlockContainer>

          <LogOutBlock onClick={handleLogOut}>
            <svg width={32} height={32} style={{ marginRight: '14px' }}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#logout`} />
            </svg>
            Log Out
          </LogOutBlock>
        </Block>
      </SidebarContainer>
    </ContainerAside>
  );
};
