import styled from 'styled-components';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import { Input } from '@mui/material';

const drawerWidth = 212;

const CustomDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    background-color: #121212;
    padding: 24px;
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
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const LogoText = styled(Typography)`
  margin-left: 8px;
  color: white;
`;

const InputContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 30px;
`;

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #ccc;
`;

const BlockContainerCreate = styled.div`
  display: flex;
  width: 212px;
  background-color: #151414;
  color: white;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
`;

const BlockContainer = styled.div`
  width: 172px;
  padding: 20px;
  background-color: #1f1f1f;
  color: white;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
`;

const NewBoardText = styled(Typography)`
  margin-bottom: 14px;
`;

const HelpText = styled(Typography)`
  margin-bottom: 18px;
`;

const LogOutBlock = styled.div`
  display: flex;
  font-size: 16px;
  color: white;
  align-items: center;
`;

const ExtraPadding = styled.div`
  padding-bottom: 50px;
`;

const HelpBlock = styled.div`
  display: flex;
  align-items: center;
`;

export {
  HelpBlock,
  ExtraPadding,
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
};
