
import { ThemeModal } from 'components/ThemeModal';
import {
  Header,
  HeaderNav,
  UserInfoBtn,
  UserAvatar,
} from './AppBar.styled';
import { BackdropMenu } from 'components/BackdropMenu';

export const AppBar = () => {

  return (
    <Header>
      <BackdropMenu />

      <HeaderNav>
        <ThemeModal />

        <UserInfoBtn>
          {user ? (
            <>
              {user.name}
              <UserAvatar>
                <img
                  src={user.avatarURL}
                  alt={user.name}
                />
              </UserAvatar>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </UserInfoBtn>
      </HeaderNav>
    </Header>
  );
};