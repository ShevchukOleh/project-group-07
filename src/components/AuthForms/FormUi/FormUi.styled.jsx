import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
const ContainerEntry = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #bedbb0);

  @media (min-width: 375px) {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 1440px;
  }
`;

const FormContainer = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #151515;
  border-radius: 8px;
  box-sizing: border-box;
  transition: width, height, 0.3s linear;
  position: relative;
  @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 473px;
    padding: 40px;
  }
`;
const LinkFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 14px;
  box-sizing: border-box;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    max-width: 473px;
  }
`;
const TextFormSubmitButton = styled.button`
  border-radius: 8px;
  padding: 14px 20px;
  background-color: #bedbb0;
  cursor: pointer;
  width: 100%;
  color: #161616;
  margin-top: 14px;
  font-size: 18px;
  font-family: 'poppins';
  font-weight: 500;
`;
const LinkFormButtonNav = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-family: inherit;
  text-decoration: none;
  font-weight: 500;
  line-height: normal;
  transition: color 0.3s linear;
  font-family: 'poppins';
  &.active {
    color: #ffffff;
  }
  &:active {
    color: inherit;
  }
`;
const TextFieldCustum = styled.input`
  height: 49px;
  padding: 5px 14px;
  outline: none;
  border-radius: 8px;
  width: 100%;
  border: 1px solid #bedbb0;
  font-family: inherit;
  background-color: #151515;
  font-size: 14px;
  color: #fff;
  box-sizing: border-box;
  font-family: 'poppins';
  font-weight: 400;
`;
const TextForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;

const FormButtonLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  color: #161616;
  font-weight: 500;
  font-size: 14px;
`;
const IconPassowordWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  margin-top: -33px;
`;
const ContainerErrorIcon = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
export {
  FormContainer,
  LinkFormWrapper,
  LinkFormButtonNav,
  ContainerErrorIcon,
  TextForm,
  TextFieldCustum,
  TextFormSubmitButton,
  FormButtonLink,
  IconPassowordWrapper,
  ContainerEntry,
};
