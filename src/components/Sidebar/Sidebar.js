import React from 'react';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';
import plant from '../../images/cup.png';
import circle from '../../images/help-circle.png';

import {
  OneBoard,
  Block,
  HelpBlock,
  LogOutBlock,
  HelpText,
  NewBoardText,
  BlockContainer,
  BlockContainerCreate,
  StyledInput,
  InputContainer,
  LogoText,
  LogoImage,
  LogoContainer,
  SidebarContainer,
  CustomDrawer,
  BlockContainerBoard,
} from './Sidebar.styled';

const testBoards = [
  {
    name: 'Project office',
    status: 'black',
  },
  {
    name: 'Naon Light Project',
    status: 'green',
  },
  {
    name: 'My test',
    status: 'red',
  },
  {
    name: 'Naon Light Project',
    status: 'green',
  },
  {
    name: 'My test',
    status: 'red',
  },
];

const Sidebar = () => {
  const isBoard = true;

  return (
    <CustomDrawer variant="permanent" anchor="left">
      <SidebarContainer>
        <Block>
          <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <LogoText>Task Pro</LogoText>
          </LogoContainer>
          <InputContainer>
            <StyledInput> My board</StyledInput>
          </InputContainer>
          <BlockContainerCreate marginBottom={24}>
            <NewBoardText>
              Create <br />a new board
            </NewBoardText>
            <Button
              color="primary"
              sx={{
                minWidth: '40px',
                height: '36px',
                marginLeft: '8px',
                background: '#BEDBB0',
              }}
            >
              <p style={{ color: 'black', fontSize: '26px', margin: '0' }}>+</p>
            </Button>
          </BlockContainerCreate>
        </Block>
        {isBoard ? (
          <BlockContainerBoard>
            {testBoards.map(({ name, status }) => {
              return (
                <OneBoard>
                  <div style={{ marginRight: '16px' }}>Icon</div>
                  <div style={{ flex: 1, color: `${status}` }}>{name}</div>
                  <div style={{ marginRight: '8px' }}>
                    <>Icon</>
                  </div>
                  <div>
                    <>Icon</>
                  </div>
                </OneBoard>
              );
            })}
          </BlockContainerBoard>
        ) : (
          <></>
        )}
        <Block>
          <BlockContainer marginBottom={24}>
            <img
              src={plant}
              alt="plant"
              style={{ width: '54px', height: '78px', marginBottom: '14px' }}
            />
            <HelpText variant="body2">
              If you need help with
              <a
                href="http://www.google.com"
                style={{ color: '#BEDBB0', textDecoration: 'none' }}
              >
                TaskPro
              </a>
              , check out our support resources or reach out to our customer
              support team.
            </HelpText>
            <HelpBlock>
              <img
                src={circle}
                alt="help"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />

              <p style={{ margin: '0' }}> Need help?</p>
            </HelpBlock>
          </BlockContainer>
          <LogOutBlock>
            <svg width={32} height={32} style={{ marginRight: '14px' }}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#logout`} />
            </svg>
            Log Out
          </LogOutBlock>
        </Block>
      </SidebarContainer>
    </CustomDrawer>
  );
};

export default Sidebar;
