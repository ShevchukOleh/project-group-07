import styled from '@emotion/styled';
import { AiOutlinePlus } from "react-icons/ai";


export const AddAvatar = styled.div`
    margin-top: 24px;
    margin-bottom: 25px; 
    display: flex; 
    justify-content: center;
`
export const IconPlusAvatar = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${props => {
        return props?.theme?.themeSet?.editProfileAvIconWrapBg;
    }};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 64px;
    left: 31px;
`
export const ModalButton = styled.button`
  background-color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendBg;
  }};
  color: ${props => {
    return props?.theme?.themeSet?.modalHelpSendText;
  }};
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  height: 50px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => {
      return props?.theme?.themeSet?.modalHelpSendHover;
    }};
  }
`
export const IconPlus = styled(AiOutlinePlus)`
  width: 10px;
  height: 10px;
  fill: black;
`;