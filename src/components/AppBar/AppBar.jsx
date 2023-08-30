import { ThemeModal } from 'components/ThemeModal';
import {
  Header,
  MenuBtn,
  MenuIconNav,
  HeaderNav,
  UserInfoBtn,
  UserAvatar,
} from './AppBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';

export const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Header>
      <MenuBtn>
        <MenuIconNav />
      </MenuBtn>

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