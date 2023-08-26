import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTodos = createAsyncThunk('data/fetchTodos', async () => {
  try {
    const response = await fetch('URL_API');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
});

const createTodo = createAsyncThunk('data/createTodo', async newTodo => {
  try {
    const response = await fetch('URL_API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to create todo');
  }
});

const updateTodo = createAsyncThunk('data/updateTodo', async updatedTodo => {
  try {
    const response = await fetch(`URL_API/${updatedTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to update todo');
  }
});

const deleteTodo = createAsyncThunk('data/deleteTodo', async todoId => {
  try {
    const response = await fetch(`URL_API/${todoId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to delete todo');
  }
});

const patchTodo = createAsyncThunk('data/patchTodo', async patchedTodo => {
  try {
    const response = await fetch(`URL_API/${patchedTodo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patchedTodo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to patch todo');
  }
});

export { fetchTodos, createTodo, updateTodo, deleteTodo, patchTodo };
