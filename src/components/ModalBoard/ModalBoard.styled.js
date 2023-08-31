import styled from 'styled-components';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup'
import DialogActions from '@mui/material/DialogActions';
import { Radio } from '@mui/material';


export const ButtonStyled = styled(Button)`
      fontFamily: 'Poppins';
              backgroundColor: '#BEDBB0';
              color: '#161616';
              fontWeight: 500;  
              height: 49px;
              width: '100%';
              padding: 0;
              textTransform: 'capitalize';
      &&:hover {
      backgroundColor: '#9DC888',
  }
  `
export const ContainerModal = styled.div`
padding: 24px;
width: 335px;
height: auto;
@media screen and (max-width:375px) {
max-width: 100%;
  }
@media screen and (min-width: 768px) {
width: 350px;
  }

`

  export const IconContainer = styled(RadioGroup)`
  padding-left: 18px;
  display:flex;
  gap: 8px;
  
`
export const RadioStyled = styled(Radio)`
width: 18px;
height: 18px;
`
export const RadioStyledImg = styled(Radio)`
width: 28px;
height: 28px;
`
  
export const ImageBgContainer = styled(RadioGroup)`
  // border: 2px solid grey;
  padding-left: 14px;
  padding-right: 0px;
  display: flex;
  // flex-direction: row-reverse;
  gap: 4px;
  margin-bottom: 40px;
  width: 100%;
`
  export const DialogActionsStyled = styled(DialogActions)`
   align-items: center;
    justify-content: center;
    padding: 0px;
`

export const Icon = styled.img`
width: 18px;
height: 18px;
`

export const Image = styled.img`
width: 28px;
height: 28px;
`

export const TextFieldStyled = styled.input`
caret-color: #BEDBB0;
border: 1px solid #BEDBB0;
border-radius: 8px;
height: 49px;
width: 100%;
margin-bottom: 24px;
padding-left: 18px;
  ::placeholder {
    color: #BEDBB0;
  };
  // &&:focus {
  // border: 1px solid grey
  // };
  &&:hover {
  border: 1px solid grey
  };
`