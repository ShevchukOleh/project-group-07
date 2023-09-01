import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Loader from 'components/Loader/Loader'
import DialogContent from '@mui/material/DialogContent';
import FormLabel from '@mui/material/FormLabel'
import DialogTitle from '@mui/material/DialogTitle';
import {
  IconContainer,
  RadioStyled,
  ContainerModal,
  TextFieldStyled,
  DialogActionsStyled,
  Icon,
  FormControlLabelStyled,
} from './CardModal.styled'
import Plus from '../../images/icons/plus.svg';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { selectToken } from 'store/createSlices/userAuth/userSelectors';


export default function CardFormDialog({hideModal, isShowModal}) {
//   const dispatch = useDispatch();
  
  const [valueTitle, setValueTitle] = useState('');
  const [labelColor, setLabelColor] = useState('#8FA1D0');
  const [valueDescription, setValueDescription] = useState('');
  const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dateDeadline, setDeadline] = useState('')
//   const [icon, setIcon] = useState([]);
//   const [image, setImage] = useState([]);

  const token = useSelector(selectToken);
  // const theme = useSelector(sele)
// const isLoading = useSelector(selectLoading)
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRkMTIzZWFiZjkxMjVmMzI0ODNhMyIsImlhdCI6MTY5MzU1NjE2NCwiZXhwIjoxNjkzNjM4OTY0fQ.f_g-zrT_HWKr4PE0skH0u-gs_75dhuvjCqmIEAehq1c';

  



//   useEffect(() => {
//     setIsLoading(true);
//     getIcon(token).then(data => {
//       setIcon(data);
//     })
//       .catch((error) => setError(error))
//       .finally(() => {
//         setIsLoading(false)
//       })
//   }, [token]);


//   useEffect(() => {
//     setIsLoading(true);
//     setImage([]);
//     getImage(token).then(data => {
//       setImage(data);
//     })
//       .catch((error) => setError(error.message))
//       .finally(() => {
//         setIsLoading(false)
//       })
//   }, [token]);

  
//     const createBd = {
//     title: valueInput,
//     icon: valueIcon,
//     background: valueImgBg,
//   };

//   const length = image.length - 3;
//   const imageNew = image.slice(0, length);
//   const lightImageBg = image[15];
  // const darkImageBg = image[16];
  // const violetImageBg = image[17];
  // console.log(lightImageBg, darkImageBg, violetImageBg)

  
  const handleClose = () => {
      hideModal();
      setLabelColor('#8FA1D0')
      setValueTitle('')
      setValueDescription('')

  };

  const handleCloseBtn = () => {
      hideModal();
      setLabelColor('#8FA1D0')
      setValueTitle('')
      setValueDescription('')
    // if (valueInput && valueImgBg) {
    //   dispatch(createBoard(createBd));

    // }
    // else console.error('Please, fill in the required fields');
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

    return (
   
        <div>
            <Dialog open={isShowModal} onClose={handleClose}>
                <ContainerModal>
                    {isLoading && <Loader />}
                    {error && <div>Something went wrong. Try again later</div>}
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
                      
                        <TextFieldStyled
                            id="Description"
                            multiline
                            maxRows
                            label="Title"
                            type="text"
                                  sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
                            placeholder="Description"
                            onChange={handleChangeDescription}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        />
                        <FormControl sx={{ padding: 0, marginBottom: '24px' }}>
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
                                    value='#8FA1D0'
                
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
                                    value='#E09CB5'
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
                                    value='#BEDBB0'
                                    control={<RadioStyled
                                        sx={{
                                            color: '#BEDBB0',
                                            '&.Mui-checked': {
                                                color: '#BEDBB0',
                                            },
                                        }} />}
                                />
                                <FormControlLabelStyled
                                    value='#161616'
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

    );
};
