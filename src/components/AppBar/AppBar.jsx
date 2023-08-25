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
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <MenuBtn type='button'>menu</MenuBtn>

      <HeaderNav>
        <ChangeThemeBtn type='button'>
          <ThemeLabel>Theme</ThemeLabel>
          <ThemeIcon width="16px" height="16px">
            <use href="/src/images/symbol-defs.svg#icon-chevron"></use>
          </ThemeIcon>
        </ChangeThemeBtn>

        <UserInfoBtn type='button'>
          <UserName>User</UserName>
          <UserAvatar>
            <img src="" alt="User name"></img>
          </UserAvatar>
        </UserInfoBtn>
      </HeaderNav>
    </Header>
  );
};
