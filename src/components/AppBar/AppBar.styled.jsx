import styled from 'styled-components';

export const Header = styled.header`
  box-sizing: border-box;
  width: 1180px;
  height: 68px;
  padding: 18px 24px;
  background-color: #161616;
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: end;
`;

export const ChangeThemeBtn = styled.button`
  display: flex;
  gap: 4px;
  width: 68px;
  height: 21px;
  padding: 0;
  border: none;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ThemeLabel = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const ThemeIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: red;
`;

export const UserInfoBtn = styled.button`
  display: flex;
  gap: 8px;
  width: 79px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  overflow: hidden;
  background-color: tomato;
`;

export const UserName = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;
