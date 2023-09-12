import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormLabel from '@mui/material/FormLabel';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  IconContainer,
  RadioStyled,
  ContainerModal,
  TextFieldStyled,
  FormControlLabelStyled,
  DescriptionFieldStyled,
  CalendarWrap,
} from './CardModal.styled';
import FormControl from '@mui/material/FormControl';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'constants';
import { getCurrentUser } from 'store/createSlices/userAuth/userSelectors';
import { CloseBtn } from 'components/Buttons/CloseBtn';
import { ModalTitle } from 'components/Modals/ModalTitle';
import { BaseBtn } from 'components/Buttons/BaseBtn';
import { selectAllColumnCards } from 'store/createSlices/board/boardSelectors';

export default function CardFormDialog({
  titleText,
  btnText,
  requestFunction,
  hideModal,
  isShowModal,
  boardId,
  columnId,
  cardId,
}) {
  const user = useSelector(getCurrentUser);
  const currentTheme = user?.theme || 'Light';
  const theme = getTheme(currentTheme);

  const dispatch = useDispatch();
  const cards = useSelector(selectAllColumnCards);
  const currentCard = cards[columnId].find(({ _id }) => _id === cardId);

  const [valueTitle, setValueTitle] = useState(currentCard?.title || '');
  const [labelColor, setLabelColor] = useState(currentCard?.priority || 'LOW');
  const [valueDescription, setValueDescription] = useState(
    currentCard?.description || ''
  );
  const [dateDeadline, setDeadline] = useState(currentCard?.deadline || '');

  const createCard = {
    title: valueTitle,
    description: valueDescription,
    priority: labelColor,
    deadline: dateDeadline,
  };

  const handleClose = () => {
    hideModal();
    // setLabelColor('LOW');
    // setValueTitle('');
    // setValueDescription('');
  };

  const handleCloseBtn = async event => {
    dispatch(requestFunction({ boardId, columnId, cardId, createCard }));
    hideModal();

    // setLabelColor('LOW');
    // setValueTitle('');
    // setValueDescription('');
  };

  const handleChangeTitle = event => {
    setValueTitle(event.target.value);
  };

  const handleDateDedline = newValue => {
    const newDate = newValue;
    setDeadline(newDate);
  };

  const handleChangeDescription = event => {
    setValueDescription(event.target.value);
  };

  const handleChangeLabelColor = event => {
    setLabelColor(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <div>
        <Dialog open={isShowModal} onClose={handleClose}>
          <ContainerModal>
            <ModalTitle title={'Edit card'} />

            <DialogContent sx={{ padding: 0 }}>
              <TextFieldStyled
                autoFocus
                label="Required"
                required
                type="text"
                placeholder="Title"
                value={valueTitle}
                name="title"
                onChange={handleChangeTitle}
              />

              <DescriptionFieldStyled
                multiline
                rows={4}
                label="Title"
                type="text"
                placeholder="Description"
                value={valueDescription}
                name="description"
                onChange={handleChangeDescription}
              />

              <FormControl sx={{ padding: 0, marginBottom: '24px' }}>
                <FormLabel
                  id="radio-buttons-group-color"
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: 0,
                    marginBottom: '14px',
                    color: `${theme?.themeSet?.modalAddCardSubtitle}`,
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
                          backgroundColor: '#8FA1D0',
                          '&.Mui-checked': {
                            color: '#8FA1D0',
                            backgroundColor: 'transparent',
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
                          backgroundColor: '#E09CB5',
                          '&.Mui-checked': {
                            color: '#E09CB5',
                            backgroundColor: 'transparent',
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
                          backgroundColor: '#BEDBB0',
                          '&.Mui-checked': {
                            color: '#BEDBB0',
                            backgroundColor: 'transparent',
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
                          color: `${theme?.themeSet?.modalFiltersMarkWithoutPr}`,
                          backgroundColor: `${theme?.themeSet?.modalFiltersMarkWithoutPr}`,
                          '&.Mui-checked': {
                            color: `${theme?.themeSet?.modalFiltersMarkWithoutPr}`,
                            backgroundColor: 'transparent',
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
                  color: `${theme?.themeSet?.modalAddCardSubtitle}`,
                }}
              >
                Deadline
              </DialogTitle>

              <CalendarWrap>
                <Stack sx={{ color: '#BEDBB0' }} components={['DatePicker']}>
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
                </Stack>
              </CalendarWrap>
            </DialogContent>

            <BaseBtn type={'submit'} label={'Edit'} onClick={handleCloseBtn} />

            <CloseBtn onClick={handleClose} />
          </ContainerModal>
        </Dialog>
      </div>
    </LocalizationProvider>
  );
}
