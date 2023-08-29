import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://taskpro-backend-zulp.onrender.com/api/users/';

const loginUser = createAsyncThunk('user/loginUser', async credentials => {
  try {
    const response = await axios.post(`${BASE_URL}signin`, credentials);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Failed to login');
  }
});

const registerUser = createAsyncThunk('user/registerUser', async userData => {
  try {
    const response = await axios.post(`${BASE_URL}register`, userData);
    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to register');
  }
});

const logoutUser = createAsyncThunk('user/logoutUser', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().user.token; //from component
    const response = await axios.post(`${BASE_URL}signout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 204) {
      console.log('Logout success');
    }
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
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed to fetch current user');
    }
  }
);

export { loginUser, registerUser, logoutUser, fetchCurrentUser };
