import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards, createBoard } from 'store/AsyncThunk/asyncThunkBoards';

const initialState = {
  boards: [],
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
      });
  },
});

export default boardSlice.reducer;
