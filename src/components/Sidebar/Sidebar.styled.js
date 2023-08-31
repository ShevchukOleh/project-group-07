import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const ContainerAside = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    float: left;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
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
  color: #161616;
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
  color: #161616;
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(22, 22, 22, 0.1);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 375px) {
    width: 197px;
  }
`;

const BlockContainerBoard = styled.div`
  overflow-y: auto;
  max-height: 100%;
  min-height: 110px;
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
  width: 212px;
  padding: 20px;
  background-color: #f6f6f7;
  color: #161616;
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media (max-width: 375px) {
    width: 197px;
    padding: 14px;
  }
`;

const NewBoardText = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const HelpText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400px;

  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

const LogOutBlock = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  font-size: 16px;
  color: #161616;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  margin-top: 24px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HelpBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  margin-top: 18px;
`;

const PlusIcon = styled.p`
  color: black;
  font-size: 26px;
  margin: 0;
`;

const CreateButton = styled(Button)`
  min-width: 40px;
  height: 36px;
  margin-left: 8px;
  background-color: #bedbb0;
`;

const PlantImg = styled.img`
  width: 54px;
  height: 78px;
  margin-bottom: 14px;
`;

const Helpbutton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: inherit;
  padding: 0;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: blue;
    transform: scale(1.1);
  }

  &:active {
    color: darkgray;
  }
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
  BlockContainerBoard,
  Block,
  OneBoard,
  ContainerAside,
  PlusIcon,
  CreateButton,
  PlantImg,
  Helpbutton,
};
