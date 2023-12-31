import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup'
import DialogActions from '@mui/material/DialogActions';
import { Radio, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
export const DatePickerStyled = styled(DatePicker)`
width: '127px';

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
export const FormControlLabelStyled = styled(FormControlLabel)`
margin: 0px;
`

export const IconContainer = styled(RadioGroup)`
  display:flex;
  gap: 8px;
`
export const RadioStyled = styled(Radio)`
width: 18px;
height: 18px;
margin: 0px;
`
export const RadioStyledImg = styled(Radio)`
width: 28px;
height: 28px;
padding: 0px;
`
  
export const ImageBgContainer = styled(RadioGroup)`
  padding-right: 28px;  
  display: flex;
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
export const DescriptionFieldStyled = styled.textarea`
caret-color: #BEDBB0;
border: 1px solid #BEDBB0;
border-radius: 8px;
height: 154px;
width: 100%;
margin-bottom: 24px;
padding-left: 18px;
  ::placeholder {
    color: #BEDBB0;
  };
  &:hover {
  border: 1px solid grey
  };
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
  &:hover {
  border: 1px solid grey
  };
`