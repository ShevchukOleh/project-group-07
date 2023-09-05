import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  logoutUser,
  fetchCurrentUser,
  fetchThemeUpdate,
  addUserAvatar,
} from 'store/AsyncThunk/asyncThunkUsersAuth';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    isLoggedIn: false,
    user: null,
    token: null,
    error: null,
    currentUser: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        state.loading = false;
        state.isLoggedIn = true;
        console.log(action.payload);
        state.user = user.email;
        state.token = token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, state => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, state => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(fetchThemeUpdate.pending, state => {
        state.loading = true;
      })
      .addCase(fetchThemeUpdate.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(fetchThemeUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUserAvatar.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser.avatar = action.payload.avatarUrl;
        state.error = null;
      })
      .addCase(addUserAvatar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export default userSlice.reducer;