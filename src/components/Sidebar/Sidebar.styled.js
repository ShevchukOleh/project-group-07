import styled from '@emotion/styled';
import BoltIcon from '@mui/icons-material/Bolt';

const ContainerAside = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: ${props => {
    return props?.theme?.themeSet?.sidebarBg;
  }};

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    float: left;
    width: 260px;
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

const Logo = styled(BoltIcon)`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${props => {
    return props?.theme?.themeSet?.sidebarLogoBg;
  }};
  fill: ${props => {
    return props?.theme?.themeSet?.sidebarLogo;
  }};
`;

const LogoText = styled.p`
  margin-left: 8px;
  margin: 0;
  color: ${props => {
    return props?.theme?.themeSet?.sidebarText;
  }};
  font-weight: 600;
  font-size: 16px;
`;

const InputContainer = styled.div`
  margin-top: 40px;
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
  background-color: ${props => {
    return props?.theme?.themeSet?.sidebarCreateConBg;
  }};
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid
    ${props => {
      return props?.theme?.themeSet?.sidebarCreateConBorder;
    }};
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
  position: relative;
  font-size: 14px;
  font-weight: 500;
  padding: 22px 20px 22px 24px;
  display: flex;
  align-items: center;
  transition: background-color, color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${props =>
    props.isSelected
      ? props?.theme?.themeSet?.sidebarBlock
      : props?.theme?.themeSet?.sidebarBg};
  color: ${props =>
    props.isSelected
      ? props?.theme?.themeSet?.sidebarText
      : props?.theme?.themeSet?.sidebarTextWitoutHover};

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.sidebarBlock;
    }};
    color: ${props => {
      return props?.theme?.themeSet?.sidebarText;
    }};

    .icon {
      color: ${props => {
        return props?.theme?.themeSet?.sidebarTextWitoutHover;
      }};
      opacity: 1;
      transition: opacity 300ms;
    }
  }

  .icon {
    opacity: ${props => (props.isSelected ? 1 : 0)};
    transition: opacity 0.3s;

    &:hover.delete {
      /* transform: scale(2); */
      color: rgb(209 92 92);
    }
    &:hover.edit {
      /* transform: scale(2); */
      color: rgb(104 177 39);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 4px;
    background-color: ${props => props.color};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: scaleX(${props => (props.isSelected ? 1 : 0)});
    transition: transform 0.3s;
  }

  /* &:hover:before {
    transform: scaleX(1);
  } */
`;

const BlockContainer = styled.div`
  width: 212px;
  padding: 20px;
  background-color: ${props => {
    return props?.theme?.themeSet?.sidebarBlock;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.sidebarText;
  }};
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media (max-width: 375px) {
    width: 197px;
    padding: 14px;
  }
`;

const BlockLink = styled.a`
  color: ${props => {
    return props?.theme?.themeSet?.sidebarBlockLink;
  }};
`;

const NewBoardText = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${props => {
    return props?.theme?.themeSet?.sidebarText;
  }};
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
  color: ${props => {
    return props?.theme?.themeSet?.sidebarText;
  }};
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
  color: ${props => {
    return props?.theme?.themeSet?.sidebarText;
  }};

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
  Logo,
  LogoContainer,
  SidebarContainer,
  BlockContainerBoard,
  Block,
  BlockLink,
  OneBoard,
  ContainerAside,
  
  PlantImg,
  Helpbutton,
};
