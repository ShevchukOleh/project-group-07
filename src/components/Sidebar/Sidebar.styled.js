import styled from '@emotion/styled';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import { Input } from '@mui/material';

const drawerWidth = 260;

export const CustomDrawer = styled(Drawer)`
  display: none;
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    background-color: #121212;
    padding: 24px;
  }
`;

export const ContainerAside = styled.aside`
  display: none;
  float: left;
  background-color: #fff;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 260px;
    height: 770px;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 770px;
  padding: 24px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const LogoText = styled(Typography)`
  margin-left: 8px;
  color: #161616;
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #ccc;
`;

export const BlockContainerCreate = styled.div`
  display: flex;
  width: 212px;
  background-color: #F6F6F7;
  color: #161616;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
`;

export const BlockContainer = styled.div`
  width: 212px;
  padding: 20px;
  background-color: #F6F6F7;
  color: #161616;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
`;

export const NewBoardText = styled(Typography)`
  display: block;
  margin-bottom: 0px;
`;

export const HelpText = styled(Typography)`
  margin-bottom: 0px;
`;

export const LogOutBlock = styled.div`
  display: flex;
  font-size: 16px;
  color: #161616;
  align-items: center;
`;

export const ExtraPadding = styled.div`
  padding-bottom: 50px;
`;

export const HelpBlock = styled.div`
  display: flex;
  align-items: center;
`;
