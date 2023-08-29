import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://taskpro-backend-zulp.onrender.com/';

const getAllBoards = createAsyncThunk(
  'board/getBoards',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.get(`${BASE_URL}api/board`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed get boards');
    }
  }
);

const createBoard = createAsyncThunk(
  'board/postBoard',
  async (params, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;

      const response = await axios.post(`${BASE_URL}api/board`, params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed to post new board');
    }
  }
);

export { getAllBoards, createBoard };
