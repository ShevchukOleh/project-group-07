import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
} from '../../AsyncThunk/asyncThunkCollection';

const collectionSlice = createSlice({
  name: 'collectionTask',
  initialState: { loading: false, todos: [], error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const updatedIndex = state.todos.findIndex(
          todo => todo.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.todos[updatedIndex] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(patchTodo.fulfilled, (state, action) => {
        const patchedIndex = state.todos.findIndex(
          todo => todo.id === action.payload.id
        );
        if (patchedIndex !== -1) {
          state.todos[patchedIndex] = action.payload;
        }
      });
  },
});

export default collectionSlice.reducer;
