import { configureStore, combineReducers } from '@reduxjs/toolkit';
import collectionSlice from './createSlices/collection/collection';
import userSlice from './createSlices/userAuth/userAuth';
import boardSlice from './createSlices/board/board';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  data: collectionSlice,
  user: userSlice,
  board: boardSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
