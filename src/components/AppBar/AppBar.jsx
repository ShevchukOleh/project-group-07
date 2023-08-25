import {
  Header,
  HeaderNav,
  ChangeThemeBtn,
  ThemeLabel,
  ThemeIcon,
  UserInfoBtn,
  UserName,
  UserAvatar,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <HeaderNav>
        <ChangeThemeBtn>
          <ThemeLabel>Theme</ThemeLabel>
          <ThemeIcon width="16px" height="16px">
            <use href="/src/images/symbol-defs.svg#icon-chevron"></use>
          </ThemeIcon>
        </ChangeThemeBtn>

        <UserInfoBtn>
          <UserName>User</UserName>
          <UserAvatar>
            <img src="" alt="User name"></img>
          </UserAvatar>
        </UserInfoBtn>
      </HeaderNav>
    </Header>
  );
};
