import styled from '@emotion/styled';

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-width: 320px;
  width: 375px;
  height: 60px;
  padding: 14px 24px;
  background-color: #FCFCFC;
;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 68px;
    padding: 18px 24px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    width: 1180px;
  }
`;

export const MenuBtn = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: tomato;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    display: none;
  }
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

export const ThemeLabel = styled.span`
  margin: 0;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const ThemeIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: tomato;
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

export const UserName = styled.span`
  margin: 0;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;
