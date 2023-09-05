import { ThemeModal } from 'components/ThemeModal';
import { Header, HeaderNav, UserInfoBtn, UserAvatar } from './AppBar.styled';
import BackdropMenu from 'components/BackdropMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { fetchCurrentUser } from 'store/AsyncThunk/asyncThunkUsersAuth';
import { useEffect, useState } from 'react';
import ModalEditProfile from 'components/Modals/ModalEditProfile/ModalEditProfile';

export const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const [isCreateOpenModal, setCreateOpenModal] = useState(false);

  const createOpenModalShow = () => {
    setCreateOpenModal(!isCreateOpenModal);
  };

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Header>
      <BackdropMenu />

      <HeaderNav>
        <ThemeModal />

        <ModalEditProfile
          createOpenModalShow={createOpenModalShow}
          isCreateOpenModal={isCreateOpenModal}
          user={user}
        />

        <UserInfoBtn onClick={() => setCreateOpenModal(!isCreateOpenModal)}>
          {user ? (
            <>
              {user?.name}
              <UserAvatar>
                <img src={user?.avatarURL} alt={user.name} style={{width: 32, height: 32}}/>
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