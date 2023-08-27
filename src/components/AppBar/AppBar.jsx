import { ThemeModal } from 'components/ThemeModal';
import {
  Header,
  MenuBtn,
  MenuIconNav,
  HeaderNav,
  UserInfoBtn,
  UserAvatar,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <MenuBtn>
        <MenuIconNav />
      </MenuBtn>

      <HeaderNav>
        <ThemeModal />

        <UserInfoBtn>
          User
          <UserAvatar>
            <img src="" alt="User name" />
          </UserAvatar>
        </UserInfoBtn>
      </HeaderNav>
    </Header>
  );
};
