import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://taskpro-backend-zulp.onrender.com/api/users/';

const handleResponse = response => {
  const data = JSON.stringify(response.data, null, 2);
  const parsedData = JSON.parse(data);
  return parsedData;
};

const loginUser = createAsyncThunk('user/loginUser', async credentials => {
  try {
    const response = await axios.post(`${BASE_URL}signin`, credentials);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to login');
  }
});

const registerUser = createAsyncThunk('user/registerUser', async userData => {
  try {
    const response = await axios.post(`${BASE_URL}register`, userData);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to register');
  }
});

const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.token;
    const response = await axios.post(`${BASE_URL}signout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error('Failed to logout');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get(`${BASE_URL}current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return handleResponse(response);
    } catch (error) {
      throw new Error('Failed to fetch current user');
    }
  }
);

export { loginUser, registerUser, logoutUser, fetchCurrentUser };
