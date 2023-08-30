import React, { useState } from 'react';
import logo from '../../images/logo.png';
import plant from '../../images/cup.png';
// import circle from '../../images/help-circle.png';

import { BordInSidebar } from './BordInSidebar';
import {
  Block,
  HelpBlock,
  LogOutBlock,
  HelpText,
  NewBoardText,
  BlockContainer,
  BlockContainerCreate,
  StyledInput,
  InputContainer,
  LogoText,
  LogoImage,
  LogoContainer,
  SidebarContainer,
  BlockContainerBoard,
  ContainerAside,
  PlusIcon,
  CreateButton,
  PlantImg,
  Helpbutton,
} from './Sidebar.styled';
import ModalForm from './NeedHelp/NeedHelpModal';
import FormDialog from '../ModalBoard/ModalBoard'
import { useDispatch } from 'react-redux';
import { createBoard } from '../../store/AsyncThunk/asyncThunkBoards';
import { useNavigate } from 'react-router';

import { logoutUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';

export const Sidebar = ({ setIsShowModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalBoardOpen, setIsModalBoardOpen] = useState(false);
  const dispatch = useDispatch();

  const userToken = useSelector(selectToken);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalBoard = () => {
    setIsShowModal(false);
    setIsModalBoardOpen(false);
  }

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
            <LogoImage src={logo} alt="Logo" />
            <LogoText>Task Pro</LogoText>
          </LogoContainer>
          <InputContainer>
            <StyledInput> My board</StyledInput>
          </InputContainer>
          <BlockContainerCreate>
            <FormDialog
              isShowModal={isModalBoardOpen}
              hideModal={closeModalBoard} ></FormDialog>
            <NewBoardText>
              Create <br />a new board
            </NewBoardText>
            <CreateButton
              onClick={() => {
                setIsShowModal(true);
                setIsModalBoardOpen(true);
                dispatch(
                  createBoard({
                    title: 'Some title',
                    icon: '64eb3c2a8408f19231b21fc5',
                    background: '64eb2ce10d0d1b1e0a8b9bb2',
                  })
                );
              }}
              color="primary"
              sx={{
                minWidth: '40px',
                height: '36px',
                marginLeft: '8px',
                background: '#BEDBB0',
              }}
            >
              <PlusIcon>+</PlusIcon>
            </CreateButton>
          </BlockContainerCreate>
        </Block>
        {isBoard ? (
          <BlockContainerBoard>
            <BordInSidebar />
          </BlockContainerBoard>
        ) : (
          <></>
        )}
        <Block>
          <BlockContainer marginBottom={24}>
            <PlantImg src={plant} alt="plant" />
            <HelpText>
              If you need help with{' '}
              <a
                href="http://www.google.com"
                style={{ color: '#BEDBB0', textDecoration: 'none' }}
              >
                TaskPro
              </a>
              , check out our support resources or <br /> reach out to our
              <br />
              customer support team.
            </HelpText>
            <HelpBlock>
              <ModalForm isModalOpen={isModalOpen} closeModal={closeModal} />
              <Helpbutton onClick={openModal}>
                <svg width={20} height={20} style={{ marginRight: '8px' }}>
                  <use
                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-help-circle`}
                  />
                </svg>
                <p style={{ margin: '0' }}> Need help?</p>
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
