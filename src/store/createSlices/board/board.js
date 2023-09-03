import { createSlice } from '@reduxjs/toolkit';
import objectCards from 'components/cards-object/cards';
import {
  getAllBoards,
  createBoard,
  getAllColums,
  createColumn,
  deleteBoard,
  deleteColumn,
  getBackgroundBoard,

  getAllCards,
  createOneCard,
  deleteCard,

  editColumnById,

} from 'store/AsyncThunk/asyncThunkBoards';

const initialState = {
  boards: [],
  columns: [],
  cards: [],
  cardsCollection: objectCards,
  backgrounds: [],
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
      //deleteBoard==========================================================>
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
      //createColum==========================================================>
      .addCase(createColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.columns.push(action.payload);
        state.error = null;
      })
      .addCase(createColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //deleteColum==========================================================>
      .addCase(deleteColumn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        console.log('action: ', action);
        state.loading = false;
        state.error = null;
        state.columns = state.columns.filter(el => {
          console.log('id', el._id);
          console.log('action.payload.id', action.payload._id);
          return el._id !== action.payload._id;
        });
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //editColumnById====================================================
      .addCase(editColumnById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editColumnById.fulfilled, (state, action) => {
        console.log('action: ', action);
        state.loading = false;
        state.error = null;
      })
      .addCase(editColumnById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getAllbackgrounds===========================================================>
      .addCase(getBackgroundBoard.pending, state => {
        state.loading = true;
      })
      .addCase(getBackgroundBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.backgrounds = action.payload;
        state.error = null;
      })
      .addCase(getBackgroundBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //Card

      //getAllCard===========================================================>
      .addCase(getAllCards.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
        state.error = null;
      })
      .addCase(getAllCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //createOneCard===========================================================>

      .addCase(createOneCard.fulfilled, (state, action) => {
        state.loading = false;
        state.cards.push(action.payload);
        state.error = null;
      })
      .addCase(createOneCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //deleteCard===========================================================>
      .addCase(deleteCard.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cards = state.cards.filter(el => {
          return el._id !== action.payload._id;
        });
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setSelectedPriority, sortByPriority } = boardSlice.actions;
export default boardSlice.reducer;
