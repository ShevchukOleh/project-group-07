import { createAsyncThunk } from '@reduxjs/toolkit';

const loginUser = createAsyncThunk('user/loginUser', async credentials => {
  try {
    const response = await fetch('URL_API/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to login');
  }
});

const registerUser = createAsyncThunk('user/registerUser', async userData => {
  try {
    const response = await fetch('URL_API/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to register');
  }
});

const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    const response = await fetch('URL_API/logout', {
      method: 'POST',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to logout');
  }
});

export { loginUser, registerUser, logoutUser };
