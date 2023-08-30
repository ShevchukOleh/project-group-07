import { ThemeModal } from 'components/ThemeModal';
import {
  Header,
  MenuBtn,
  MenuIconNav,
  HeaderNav,
  UserInfoBtn,
  UserAvatar,
} from './AppBar.styled';
import { BackdropMenu } from 'components/BackdropMenu';

export const AppBar = () => {
  return (
    <Header>
      <BackdropMenu/>

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
