import styled from 'styled-components';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';

const drawerWidth = 260;

const CustomDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    background-color: #ffffff;
  }
  @media (max-width: 375px) {
    width: 225px;
    & .MuiDrawer-paper {
      width: 225px;
    }
  }
`;

const SidebarContainer = styled.div`
  height: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Block = styled.div`
  padding: 24px 24px 0;
  @media (max-width: 375px) {
    padding: 14px 14px 0;
  }
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const LogoText = styled.p`
  margin-left: 8px;
  color: black;
  margin: 0;
  font-weight: 600;
  font-size: 16px;
`;

const InputContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 8px;
  font-size: 12px;
`;

const StyledInput = styled.h2`
  font-size: 12px;
  color: #161616;
  opacity: 50%;
`;

const BlockContainerCreate = styled.div`
  display: flex;
  width: 212px;
  background-color: #ffffff;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: 1px solid rgba(22, 22, 22, 0.1);
  border-bottom: 1px solid rgba(22, 22, 22, 0.1);
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  @media (max-width: 375px) {
    width: 197px;
  }
`;

const BlockContainerBoard = styled.div`
  overflow-y: auto;
  max-height: 200px;
`;

const OneBoard = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 22px;
  display: flex;
  align-items: center;
  color: rgba(22, 22, 22, 0.5);
  background-color: #ffffff;

  &:hover {
    background-color: #f6f6f7;
    color: #121212;
  }
`;

const BlockContainer = styled.div`
  width: 172px;
  padding: 20px;
  background-color: #f6f6f7;
  color: #161616;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media (max-width: 375px) {
    width: 169px;
    padding: 14px;
  }
`;

const NewBoardText = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const HelpText = styled(Typography)``;

const LogOutBlock = styled.div`
  display: flex;
  font-size: 16px;
  color: #161616;
  font-weight: 600;
  align-items: center;
  margin-top: 24px;
`;

const HelpBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  margin-top: 18px;
`;

export {
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
  CustomDrawer,
  BlockContainerBoard,
  Block,
  OneBoard,
};