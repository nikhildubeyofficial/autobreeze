import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./user/userreducer";
import carreducer from "./car/carreducer"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
const rootReducer = combineReducers({
  // counter: counterReducer,
  // // other reducers...
  car:carreducer,
  user: userreducer,
});


const persistConfig = {
    key: 'root', // The key for the persisted data
    storage, // Storage mechanism (localStorage in this case)
  };
  
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer:{
  //     user:userreducer,
  // },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
