import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { MenuBtn, MenuIconNav, Wrapper } from './BackdropMenu.styled';

export const BackdropMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <MenuBtn onClick={handleOpen}>
        <MenuIconNav />
      </MenuBtn>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
          justifyContent: 'flex-start',
        }}
        open={open}
        onClick={handleClose}
      >
        <Sidebar />
      </Backdrop>
    </Wrapper>
  );
};
