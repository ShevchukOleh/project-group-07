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

const getBackgroundBoard = createAsyncThunk(
  'board/getbackground',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.get(`${BASE_URL}api/board/background`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed get background');
    }
  }
);
const getIconBoard = createAsyncThunk('board/getIcon', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.token;
    const response = await axios.get(`${BASE_URL}api/board/icon`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    console.log('data: ', data);
    return data;
  } catch (error) {
    throw new Error('Failed get icon');
  }
});

const deleteBoard = createAsyncThunk(
  'board/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.delete(`${BASE_URL}api/board/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      throw new Error('Failed delete Board');
    }
  }
);
// 401 error?
const editBoardById = createAsyncThunk(
  'board/editBoardById',
  async (boardId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.patch(`${BASE_URL}api/board/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      throw new Error('Failed edit board by id');
    }
  }
);
// 500 error
const getBoardById = createAsyncThunk(
  'board/getBoardById',
  async (boardId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.get(`${BASE_URL}api/board/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      throw new Error('Failed get board by id');
    }
  }
);

/***********************************************Colums******************************************************/

const getAllColums = createAsyncThunk(
  'board/getColums',
  async (boardId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.get(
        `${BASE_URL}api/board/${boardId}/column`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed get colums');
    }
  }
);

const createColumn = createAsyncThunk(
  'board/postColumn',
  async ({ boardId, title }, thunkAPI) => {
    const requestData = {
      title,
    };
    try {
      const token = thunkAPI.getState().user.token;

      const response = await axios.post(
        `${BASE_URL}api/board/${boardId}/column`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      throw new Error('Failed to post new column');
    }
  }
);

const editColumnById = createAsyncThunk(
  'board/editColumnById',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.patch(
        `${BASE_URL}/api/board/${boardId}/column/${columnId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      console.log('data: ', data);
      return data;
    } catch (error) {
      throw new Error('Failed edit column by id');
    }
  }
);

const deleteColumn = createAsyncThunk(
  'board/deleteColumn',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.delete(
        `${BASE_URL}api/board/${boardId}/column/${columnId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed delete Board');
    }
  }
);

export {
  getAllBoards,
  createBoard,
  getBackgroundBoard,
  getIconBoard,
  deleteBoard,
  getBoardById,
  editBoardById,
  getAllColums,
  createColumn,
  editColumnById,
  deleteColumn,
};
