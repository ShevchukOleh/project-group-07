import React, { useEffect, useState } from 'react';
import plant from '../../images/cup.png';
import { BordInSidebar } from './BordInSidebar/BordInSidebar';
import { BiHelpCircle } from 'react-icons/bi';
import { CreateBtn } from 'components/Buttons/CreateBtn';
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
  PlantImg,
  Helpbutton,
} from './Sidebar.styled';
import { logoutUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';
import SideBarSearch from './SideBarSearch/SideBarSearch';
import { selectBoards } from 'store/createSlices/board/boardSelectors';
import { getAllBoards } from 'store/AsyncThunk/asyncThunkBoards';
import FormDialog from 'components/Modals/ModalBoard/ModalBoard';
import ModalForm from 'components/Modals/NeedHelp/NeedHelpModal';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);
  const boardsInSidebar = useSelector(selectBoards);
  const [isCreateOpenModal, setCreateOpenModal] = useState(false);
  const [isNeedHelpModal, setisNeedHelpModal] = useState(false);
  const [boardsList, setBoardsList] = useState(boardsInSidebar);
  const [filteredItems, setFilteredItems] = useState(boardsInSidebar);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  useEffect(() => {
    setBoardsList(boardsInSidebar);
  }, [boardsInSidebar, filteredItems]);

  const createOpenModalShow = () => {
    setCreateOpenModal(!isCreateOpenModal);
  };

  const needHelpModalShow = e => {
    if (
      e.target.id === 'backdropNeedHelp' ||
      e.target.tagName === 'svg' ||
      e.target.tagName === 'path'
    ) {
      setisNeedHelpModal(!isNeedHelpModal);
    }
  };
  
  const handleLogOut = () => {
    dispatch(logoutUser(userToken ?? ''));
  };

  return (
    <ContainerAside>
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
              createOpenModalShow={createOpenModalShow}
              isCreateOpenModal={isCreateOpenModal}
            />
            <CreateBtn onClick={() => setCreateOpenModal(!isCreateOpenModal)} />
          </BlockContainerCreate>
        </Block>

        {filteredItems ? (
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
              <ModalForm
                isNeedHelpModal={isNeedHelpModal}
                needHelpModalShow={needHelpModalShow}
                setisNeedHelpModal={setisNeedHelpModal}
              />
              <Helpbutton onClick={() => setisNeedHelpModal(!isNeedHelpModal)}>
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
