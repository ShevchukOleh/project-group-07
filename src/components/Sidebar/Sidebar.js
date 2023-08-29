import React, { useState } from 'react';
import Button from '@mui/material/Button';
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
  // CustomDrawer,
  BlockContainerBoard,
  ContainerAside,
} from './Sidebar.styled';
import ModalForm from './NeedHelp/NeedHelpModal';

import { useDispatch } from 'react-redux';
import { createBoard } from '../../store/AsyncThunk/asyncThunkBoards';

export const Sidebar = ({ setIsShowModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalAndBackdrop = () => {
    setIsShowModal(true);
    openModal();
  };

  const closeModalAdnBackdrop = () => {
    setIsShowModal(false);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isBoard = true;
  const dispatch = useDispatch();

  return (
    <ContainerAside>
      <ModalForm />
      {/* <CustomDrawer variant="permanent" anchor="left"> */}
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
            <NewBoardText>
              Create <br />a new board
            </NewBoardText>
            <Button
              onClick={() => {
                setIsShowModal(true);
                dispatch(
                  createBoard({
                    title: 'NewBoard',
                    icon: 'icon1',
                    background: 'default',
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
              <p style={{ color: 'black', fontSize: '26px', margin: '0' }}>+</p>
            </Button>
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
            <img
              src={plant}
              alt="plant"
              style={{ width: '54px', height: '78px', marginBottom: '14px' }}
            />
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
              <ModalForm
                isModalOpen={isModalOpen}
                closeModalAdnBackdrop={closeModalAdnBackdrop}
              />
              <button
                onClick={openModalAndBackdrop}
                style={{
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'inherit',
                  padding: '0',
                  cursor: 'pointer',
                }}
              >
                <svg width={20} height={20} style={{ marginRight: '8px' }}>
                  <use
                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-help-circle`}
                  />
                </svg>
                <p style={{ margin: '0' }}> Need help?</p>
              </button>
            </HelpBlock>
          </BlockContainer>
          <LogOutBlock>
            <svg width={32} height={32} style={{ marginRight: '14px' }}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#logout`} />
            </svg>
            Log Out
          </LogOutBlock>
        </Block>
      </SidebarContainer>
      {/* </CustomDrawer> */}
    </ContainerAside>
  );
};
