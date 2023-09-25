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
      return data;
    } catch (error) {
      throw new Error('Failed delete Board');
    }
  }
);
const editBoardById = createAsyncThunk(
  'board/editBoardById',
  async ({ boardId, editBoardObject }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.patch(
        `${BASE_URL}api/board/${boardId}`,
        editBoardObject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed edit board by id');
    }
  }
);

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
      return data;
    } catch (error) {
      throw new Error('Failed to post new column');
    }
  }
);
const editColumnById = createAsyncThunk(
  'board/editColumnById',
  async ({ requestData, title }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.patch(

        `${BASE_URL}api/board/${requestData.boardId}/column/${requestData.columnId}`,
        { title },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;

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
      throw new Error('Failed delete Column');
    }
  }
);

/***********************************************Cards******************************************************/

const getAllCards = createAsyncThunk(
  'board/getCards',
  async ({ boardId, columnId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.get(
        `${BASE_URL}api/board/${boardId}/column/${columnId}/card`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      return { data, columnId };
    } catch (error) {
      throw new Error('Failed get cards');
    }
  }
);

const createOneCard = createAsyncThunk(
  'board/postCard',
  async ({ boardId, columnId, createCard }, thunkAPI) => {

    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.post(
        `${BASE_URL}api/board/${boardId}/column/${columnId}/card`,
        createCard,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      return { data, columnId };
    } catch (error) {
      throw new Error('Failed to post new card');
    }
  }
);
const deleteCard = createAsyncThunk(
  'board/deleteCard',
  async ({ boardId, columnId, cardId }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.delete(
        `${BASE_URL}api/board/${boardId}/column/${columnId}/card/${cardId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      return { data, columnId };
    } catch (error) {
      throw new Error('Failed delete Card');
    }
  }
);
const editCardById = createAsyncThunk(
  'board/editCardById',
  async ({ createCard, boardId, columnId, cardId }, thunkAPI) => {
    const { title, description, priority, deadline } = createCard;
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.patch(
        `${BASE_URL}api/board/${boardId}/column/${columnId}/card/${cardId}`,
        { title, description, priority, deadline },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;

      return { data, columnId };
    } catch (error) {
      throw new Error('Failed edit card by id');
    }
  }
);

const submitHelp = createAsyncThunk(
  'modal/postNeedHelp',
  async (params, thunkAPI) => {
    const { values } = params;
    try {
      const token = thunkAPI.getState().user.token;

      const response = await axios.post(`${BASE_URL}api/need-help`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed to post need help');
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
  getAllCards,
  createOneCard,
  createColumn,
  deleteCard,
  editColumnById,
  deleteColumn,
  editCardById,
  submitHelp,
};
