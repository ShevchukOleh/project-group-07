import * as React from 'react';
import Dialog from '@mui/material/Dialog';
// import Loader from 'components/Loader/Loader'
import DialogContent from '@mui/material/DialogContent';
import FormLabel from '@mui/material/FormLabel';
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
  FormControlLabelStyled,
  DescriptionFieldStyled,
  PlusIcon,
  StyledButton,
  //   DateField,
} from './CardModal.styled';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOneCard } from 'store/AsyncThunk/asyncThunkBoards';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { CloseBtn } from 'components/Modals/NeedHelp/NeedHelpModal.styled';
import { IconClose } from 'components/Modals/UI/ModalCulumn.styled';
// import { createTodo } from 'store/AsyncThunk/asyncThunkCollection';
// import { selectToken } from 'store/createSlices/userAuth/userSelectors';

export default function CardFormDialog({
  hideModal,
  isShowModal,
  boardId,
  columnId,
}) {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  const dispatch = useDispatch();

  const [valueTitle, setValueTitle] = useState('');
  const [labelColor, setLabelColor] = useState('LOW');
  const [valueDescription, setValueDescription] = useState('');
  const [dateDeadline, setDeadline] = useState('');

  console.log(dateDeadline);

  const createCard = {
    title: valueTitle,
    description: valueDescription,
    priority: labelColor,
    deadline: dateDeadline,
  };

  const handleClose = () => {
    hideModal();
    setLabelColor('LOW');
    setValueTitle('');
    setValueDescription('');
  };

  console.log({ boardId, columnId, createCard });

  const handleCloseBtn = async event => {
    dispatch(createOneCard({ boardId, columnId, createCard }));
    hideModal();
    setLabelColor('LOW');
    setValueTitle('');
    setValueDescription('');
  };

  const handleChangeTitle = event => {
    setValueTitle(event.target.value);
    console.log(event.target.value);
  };

  const handleDateDedline = newValue => {
    const newDate = newValue.d;
    setDeadline(newDate);
  };

  const handleChangeDescription = event => {
    setValueDescription(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeLabelColor = event => {
    setLabelColor(event.target.value);
    console.log(event.target.value);
  };

  // const handleDateDeadline = event => {
  //   setDeadline(event.target.value);
  //   console.log(event.target.value);
  // };

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
                color: `${theme?.themeSet?.modalHelpTitle}`,
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

              <FormControl sx={{ padding: 0, marginBottom: '24px' }}>
                <FormLabel
                  id="radio-buttons-group-color"
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
                  defaultValue="#8FA1D0"
                  value={labelColor}
                  onChange={handleChangeLabelColor}
                >
                  <FormControlLabelStyled
                    value="LOW"
                    // key={_id}
                    control={
                      <RadioStyled
                        sx={{
                          color: '#8FA1D0',
                          '&.Mui-checked': {
                            color: '#8FA1D0',
                          },
                        }}
                      />
                    }
                  />

                  <FormControlLabelStyled
                    value="MEDIUM"
                    control={
                      <RadioStyled
                        sx={{
                          color: '#E09CB5',
                          '&.Mui-checked': {
                            color: '#E09CB5',
                          },
                        }}
                      />
                    }
                  />

                  <FormControlLabelStyled
                    value="HIGH"
                    control={
                      <RadioStyled
                        sx={{
                          color: '#BEDBB0',
                          '&.Mui-checked': {
                            color: '#BEDBB0',
                          },
                        }}
                      />
                    }
                  />

                  <FormControlLabelStyled
                    value="WITHOUT"
                    control={
                      <RadioStyled
                        sx={{
                          color: '#161616',
                          '&.Mui-checked': {
                            color: '#161616',
                          },
                        }}
                      />
                    }
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

              <DemoContainer
                sx={{ marginBottom: '40px', color: '#BEDBB0' }}
                components={[
                  'DatePicker',
                  'MobileDatePicker',
                  'DesktopDatePicker',
                  'StaticDatePicker',
                ]}
              >
                <div sx={{ width: '127px' }}>
                  <DatePicker
                    localeText={{ clearButtonLabel: 'Empty' }}
                    slotProps={{
                      toolbar: { hidden: true },
                      textField: { size: 'small', variant: 'standard' },
                    }}
                    required
                    onChange={handleDateDedline}
                    minDate={dayjs(Date.now())}
                    orientation="portrait"
                    views={['month', 'day']}
                    defaultValue={dayjs(Date.now())}
                  />
                </div>
              </DemoContainer>

              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
        <DatePicker
          label="Controlled picker"
          value={dateDeadline}
          onChange={handleDateDeadline}
        />
      </DemoContainer>
    </LocalizationProvider> */}
            </DialogContent>

            <DialogActionsStyled>
              {valueTitle ? (
                <StyledButton
                  onClick={event => handleCloseBtn(event)}
                  sx={{
                    fontFamily: 'Poppins',
                    backgroundColor: `${theme?.themeSet?.modalHelpSendBg}`,
                    color: `${theme?.themeSet?.modalHelpSendText}`,
                    fontWeight: 500,
                    height: 49,
                    width: '100%',
                    padding: 0,
                    textTransform: 'capitalize',
                    borderRadius: '8px',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: `${theme?.themeSet?.boxIconBg}`,
                      height: 28,
                      width: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      marginRight: 1,
                    }}
                  >
                    <PlusIcon />
                  </Box>
                  Add
                </StyledButton>
              ) : (
                <StyledButton
                  disabled
                  sx={{
                    cursor: 'not-allowed',
                    fontFamily: 'Poppins',
                    backgroundColor: `${theme?.themeSet?.modalHelpSendBg}`,
                    color: `${theme?.themeSet?.modalHelpSendText}`,
                    fontWeight: 500,
                    height: 49,
                    width: '100%',
                    padding: 0,
                    textTransform: 'capitalize',
                    borderRadius: '8px',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: `${theme?.themeSet?.boxIconBg}`,
                      height: 28,
                      width: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      marginRight: 1,
                    }}
                  >
                    <PlusIcon />
                  </Box>
                  Add
                </StyledButton>
              )}
            </DialogActionsStyled>

            <CloseBtn>
              <IconClose onClick={console.log('Close me')} />
            </CloseBtn>
          </ContainerModal>
        </Dialog>
      </div>
    </LocalizationProvider>
  );
}
