import {
  Header,
  MenuBtn,
  HeaderNav,
  ChangeThemeBtn,
  ThemeLabel,
  ThemeIcon,
  UserInfoBtn,
  UserName,
  UserAvatar,
  ThemeBtn,
} from './AppBar.styled';
import Button from '@mui/material/Button';
import Icon from '../../images/symbol-defs.svg';

export const AppBar = () => {
  return (
    <Header>
      <MenuBtn type="button"></MenuBtn>

      <HeaderNav>
        <ThemeBtn>Theme
          <ThemeIcon>
            <use href={`${Icon}#icon-chevron-down`}></use>
          </ThemeIcon>
        </ThemeBtn>

        <UserInfoBtn type="button">
          <UserName>User</UserName>
          <UserAvatar>
            <img src="" alt="User name"></img>
          </UserAvatar>
        </UserInfoBtn>
      </HeaderNav>
    </Header>
  );
};
