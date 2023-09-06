import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import Loader from 'components/Loader/Loader'
import DialogContent from '@mui/material/DialogContent';
import FormLabel from '@mui/material/FormLabel'
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import 'moment/locale/de';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {
    IconContainer,
  RadioStyled,
  ContainerModal,
  TextFieldStyled,
  DialogActionsStyled,
  Icon,
    FormControlLabelStyled,
  DescriptionFieldStyled,
} from './CardModal.styled'
import Plus from '../../images/icons/plus.svg';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTodo } from 'store/AsyncThunk/asyncThunkCollection';
// import { selectToken } from 'store/createSlices/userAuth/userSelectors';



export default function CardFormDialog({hideModal, isShowModal}) {
  
  const [valueTitle, setValueTitle] = useState('');
  const [labelColor, setLabelColor] = useState('Low');
  const [valueDescription, setValueDescription] = useState('');
  const [dateDeadline, setDateDeadline] = useState('')
   
    const date = Date.now()
    
    console.log(dateDeadline)

    const createCard = {
    title: valueTitle,
    description: valueDescription,
        priority: labelColor,
    deadline: dateDeadline,
  };
 
  const handleClose = () => {
      hideModal();
      setLabelColor('Low')
      setValueTitle('')
      setValueDescription('')

  };

  const handleCloseBtn = () => {
      hideModal();
    //   dispatch(createTodo(createCard))
      setLabelColor('Low')
      setValueTitle('')
      setValueDescription('')
      console.log(createCard)
    }
    
    const handleDateDedline = (newValue) => {
        const newDate = newValue.d
        setDateDeadline(newDate);
    }
   
  const handleChangeTitle = event => {
    setValueTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeDescription = event => {
    setValueDescription(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeLabelColor = event => {
   setLabelColor(event.target.value);
   console.log(event.target.value)
    };

    // const handleDateDeadline = event => {
    //     setDeadline(event.target.value)
    //     console.log(event.target.value)
    // }
    


    return (
       <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <div>
            <Dialog open={isShowModal} onClose={handleClose}>
                <ContainerModal>
                    <DialogTitle
                        sx={{
                            fontSize: 18,
                            fontWeight: 500,
                            padding: 0,
                            marginBottom: '24px',
                        }}
                    >
                        Add card
                    </DialogTitle>
                    <DialogContent sx={{ padding: 0 }}>
                        <TextFieldStyled
                            autoFocus
                            label="Required"
                            required
                            id="title"
                            type="text"
                            placeholder="Title"
                            onChange={handleChangeTitle}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        />
                      
                        <DescriptionFieldStyled
                        id="Description"
                            multiline
                            row={4}
                            label="Title"
                            type="text"
                            value={valueDescription}
                            placeholder="Description"
                            onChange={handleChangeDescription}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        />
                        <FormControl sx={{ padding: '5px', marginBottom: '14px' }}>
                            <FormLabel
                                id='radio-buttons-group-color'
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    padding: 0,
                                    marginBottom: '14px',
                                }}
                            >
                                Label Color
                            </FormLabel>
                            <IconContainer
                                row
                                aria-labelledby="cradio-buttons-group-color"
                                name="color-group"
                                defaultValue='#8FA1D0'
                                value={labelColor}
                                onChange={handleChangeLabelColor}
                            >
                                <FormControlLabelStyled
                                    value='Low'
                
                                    // key={_id}
                                    control={<RadioStyled
                                        sx={{
                                            color: '#8FA1D0',
                                            '&.Mui-checked': {
                                                color: '#8FA1D0',
                                            },
                                        }}

                                    />}
                                />
                                <FormControlLabelStyled
                                    value='Medium'
                                    control={<RadioStyled
                                        sx={{
                                            color: '#E09CB5',
                                            '&.Mui-checked': {
                                                color: '#E09CB5',
                                            },
                                        }}
                                    />}
                                />
                                <FormControlLabelStyled
                                    value='High'
                                    control={<RadioStyled
                                        sx={{
                                            color: '#BEDBB0',
                                            '&.Mui-checked': {
                                                color: '#BEDBB0',
                                            },
                                        }} />}
                                />
                                <FormControlLabelStyled
                                    value='Without priority'
                                    control={<RadioStyled
                                        sx={{
                                            color: '#161616',
                                            '&.Mui-checked': {
                                                color: '#161616',
                                            },
                                        }} />}
                                />
                            </IconContainer>
                        </FormControl>
<DialogTitle
              sx={{
                fontSize: 12,
                fontWeight: 500,
                padding: 0,
                marginBottom: '4px',
                color: '#161616',                          
              }}
            >
              Deadline
                            </DialogTitle>
                            


      <DemoContainer sx={{marginBottom: '40px', color: '#BEDBB0', }}
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
    <div sx={{width: '127px'}}>
    <DatePicker 
    localeText={{clearButtonLabel: 'Empty'}}
    slotProps={{
    toolbar: { hidden: true },
    textField: { size: 'small', variant: 'standard'}
  }}
        required
        onChange={handleDateDedline}
        minDate={dayjs(Date.now())}                              
        orientation='portrait'
        views={['month', 'day']}
        defaultValue={dayjs(Date.now())}
                                    />
        </div>
    </DemoContainer>
                            

                    </DialogContent>
                    <DialogActionsStyled>
                        {valueTitle
                            ? <Button
                                onClick={handleCloseBtn}
                                sx={{
                                    fontFamily: 'Poppins',
                                    backgroundColor: '#BEDBB0',
                                    color: '#161616',
                                    fontWeight: 500,
                                    height: 49,
                                    width: '100%',
                                    padding: 0,
                                    textTransform: 'capitalize',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: '#161616',
                                        height: 28,
                                        width: 28,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 1,
                                        marginRight: 1,
                                    }}
                                >
                                    <Icon src={Plus} />
                                </Box>
                                Add
                            </Button>
                            : <Button disabled
                                    sx={{
                                        cursor: 'not-allowed',
                                        fontFamily: 'Poppins',
                                        backgroundColor: '#BEDBB0',
                                        color: '#161616',
                                        fontWeight: 500,
                                        height: 49,
                                        width: '100%',
                                        padding: 0,
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: '#161616',
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 1,
                                            marginRight: 1,
                                        }}
                                    >
                                        <Icon src={Plus} />
                                    </Box>
                                    Add
                                </Button>
                        }
                    </DialogActionsStyled>
                </ContainerModal>
            </Dialog>
        </div>
</LocalizationProvider>
    );
};


//  { currentTheme ==='Light' && (
//                 <FormControlLabelStyled
//                   value={'noBackground'}
//                   control={
//                     <RadioStyledImg
//                       key={lightImageBg._id}
//                       icon={
//                         <Image
//                           src={lightImageBg.background_icon_src}
//                           alt="noBackground"
//                         />
//                       }
//                       checkedIcon={
//                         <Image
//                           src={lightImageBg.background_icon_src}
//                           alt="noBackground"
//                           checked
//                         />
//                       }
//                     />
//                   }
//                 />
//   )
//               }
//               { currentTheme ==='Dark' && (
//                 <FormControlLabelStyled
//                   value={'noBackground'}
//                   control={
//                     <RadioStyledImg
//                       key={darkImageBg._id}
//                       icon={
//                         <Image
//                           src={darkImageBg.background_icon_src}
//                           alt="noBackground"
//                         />
//                       }
//                       checkedIcon={
//                         <Image
//                           src={darkImageBg.background_icon_src}
//                           alt="noBackground"
//                           checked
//                         />
//                       }
//                     />
//                   }
//                 />
//   )
//               }
//               { currentTheme ==='Violet' && (
//                 <FormControlLabelStyled
//                   value={'noBackground'}
//                   control={
//                     <RadioStyledImg
//                       key={violetImageBg._id}
//                       icon={
//                         <Image
//                           src={violetImageBg.background_icon_src}
//                           alt="noBackground"
//                         />
//                       }
//                       checkedIcon={
//                         <Image
//                           src={violetImageBg.background_icon_src}
//                           alt="noBackground"
//                           checked
//                         />
//                       }
//                     />
//                   }
//                 />
//   )
//               }

