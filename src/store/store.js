import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import collectionSlice from './createSlices/collection/collection';
import userSlice from './createSlices/userAuth/userAuth';
import { getPersistConfig } from 'redux-deep-persist';
import boardSlice from './createSlices/board/board';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  data: collectionSlice,
  user: userSlice,
  // board: boardSlice,
});

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: ['user.isLoggedIn', 'user.token'],
  rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
