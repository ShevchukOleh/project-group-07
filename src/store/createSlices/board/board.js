import { createSlice } from '@reduxjs/toolkit';
import objectCards from 'components/cards-object/cards';
import {
  getAllBoards,
  createBoard,
  getAllColums,
  createColumn,
  deleteBoard,
} from 'store/AsyncThunk/asyncThunkBoards';

const initialState = {
  boards: [],
  columns: [],
  cardsCollection: objectCards,
  loading: false,
  error: null,
  selectedPriority: '',
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setSelectedPriority: (state, action) => {
      state.selectedPriority = action.payload;
    },
    sortByPriority: (state, action) => {
      console.log(action.payload);
      state.cardsCollection = action.payload;
    },
  },

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
      })
      .addCase(deleteBoard.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.boards = state.boards.filter(el => el.id !== action.payload.id);
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setSelectedPriority, sortByPriority } = boardSlice.actions;
export default boardSlice.reducer;
