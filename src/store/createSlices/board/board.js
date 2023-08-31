import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  createBoard,
  getAllColums,
  createColumn,
} from 'store/AsyncThunk/asyncThunkBoards';

const initialState = {
  boards: [],
  columns: [],
  loading: false,
  error: null,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //getAllboards===========================================================>
      .addCase(getAllBoards.pending, state => {
        state.loading = true;
      })
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.boards = action.payload;
        state.error = null;
      })
      .addCase(getAllBoards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //createBoard===========================================================>

      .addCase(createBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.boards.push(action.payload);
        state.error = null;
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //Column

      //getAllColumn===========================================================>

      .addCase(getAllColums.pending, state => {
        state.loading = true;
      })
      .addCase(getAllColums.fulfilled, (state, action) => {
        state.loading = false;
        state.columns = action.payload;
        state.error = null;
      })
      .addCase(getAllColums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //createBoard===========================================================>

      .addCase(createColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.columns.push(action.payload);
        state.error = null;
      })
      .addCase(createColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boardSlice.reducer;
