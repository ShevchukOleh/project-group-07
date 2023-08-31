import { ThemeModal } from 'components/ThemeModal';
import { Header, HeaderNav, UserInfoBtn, UserAvatar } from './AppBar.styled';
import BackdropMenu from 'components/BackdropMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { fetchCurrentUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useEffect } from 'react';

export const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
                <img src={user.avatarURL} alt={user.name} />
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
