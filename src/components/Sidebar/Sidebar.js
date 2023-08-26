import React from 'react';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';
import plant from '../../images/cup.png';
import circle from '../../images/help-circle.png';
import {
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
  ContainerAside,
} from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <ContainerAside>
      <SidebarContainer>
        <div>
          <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <LogoText variant="h6">Task Pro</LogoText>
          </LogoContainer>

          <InputContainer>
            <StyledInput placeholder="My boards" fullWidth />
          </InputContainer>

          <BlockContainerCreate marginBottom={206}>
            <NewBoardText variant="body2">
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
              +
            </Button>
          </BlockContainerCreate>
        </div>

        <div>
          <BlockContainer marginBottom={24}>
            <img
              src={plant}
              alt="plant"
              style={{ width: '54px', height: '78px' }}
            />

            <HelpText variant="body2">
              If you need help with <a href="http://www.google.com">TaskPro</a>,
              check out our support resources or reach out to our customer
              support team.
              <HelpBlock>
                <img
                  src={circle}
                  alt="help"
                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                />

                <p> Need help?</p>
              </HelpBlock>
            </HelpText>
          </BlockContainer>

          <LogOutBlock>
            <svg width={32} height={32} style={{ marginRight: '14px' }}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#logout`} />
            </svg>
            Log Out
          </LogOutBlock>
        </div>
      </SidebarContainer>
    </ContainerAside> 
    
  );
};