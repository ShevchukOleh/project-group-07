import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { MenuBtn, MenuIconNav, Wrapper } from './BackdropMenu.styled';

const BackdropMenu = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const showSideBar = e => {
    if (e.target.id === 'backdrop') {
      setOpenSideBar(!openSideBar);
    }
  };

  return (
    <Wrapper>
      <MenuBtn onClick={() => setOpenSideBar(!openSideBar)}>
        <MenuIconNav />
      </MenuBtn>
      <Backdrop
        id="backdrop"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        open={openSideBar}
        onClick={showSideBar}
      >
        <Sidebar />
      </Backdrop>
    </Wrapper>
  );
};

export default BackdropMenu;
