import styled from 'styled-components';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
// import { Input } from '@mui/material';

const drawerWidth = 260;

const CustomDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    background-color: #ffffff;
  }
  @media (max-width: 375px) {
    width: 197px;
    & .MuiDrawer-paper {
      width: 197px;
    }
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 375px) {
  }
`;

const Block = styled.div`
  padding: 24px;
  @media (max-width: 375px) {
    padding: 14px;
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

  @media (max-width: 375px) {
  }
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
  height: 200px;
  overflow-y: auto;
`;

const OneBoard = styled.div`
  font-size: 12px;
  padding: 22px;
  display: flex;
  align-items: center;

  background-color: #ffffff;

  &:hover {
    background-color: #f6f6f7;
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
  margin-bottom: 18px;
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
