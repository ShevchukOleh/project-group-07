import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'URL_API';

const fetchTodos = createAsyncThunk('data/fetchTodos', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
});

const createTodo = createAsyncThunk('data/createTodo', async newTodo => {
  try {
    const response = await axios.post(BASE_URL, newTodo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create todo');
  }
});

const updateTodo = createAsyncThunk('data/updateTodo', async updatedTodo => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${updatedTodo.id}`,
      updatedTodo,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update todo');
  }
});

const deleteTodo = createAsyncThunk('data/deleteTodo', async todoId => {
  try {
    const response = await axios.delete(`${BASE_URL}/${todoId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete todo');
  }
});

const patchTodo = createAsyncThunk('data/patchTodo', async patchedTodo => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/${patchedTodo.id}`,
      patchedTodo,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to patch todo');
  }
});

export { fetchTodos, createTodo, updateTodo, deleteTodo, patchTodo };
