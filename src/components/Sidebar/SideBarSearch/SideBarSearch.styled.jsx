import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Search = styled(TextField)`
  font-size: 12px;
  outline: none;
  color: black;
  font-family: 'poppins';
  opacity: 50%;
  width: 100%;

  .MuiInputLabel-root.Mui-focused {
    color: #161616;
  }

  .MuiInput-underline:after {
    border-bottom-color: #bedbb0;
  }

  .MuiInputBase-input {
    color: #161616;
  }
`;
