import {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { MenuBtn, MenuIconNav, Wrapper } from './BackdropMenu.styled';

const BackdropMenu = () => {
  const [open, setOpen] = useState(false);
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
          zIndex: theme => theme.zIndex.drawer + 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        open={open}
        onClick={handleClose}
      >
        <Sidebar />
      </Backdrop>
    </Wrapper>
  );
};

export default BackdropMenu;
