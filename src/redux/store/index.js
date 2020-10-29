import { createStore, applyMiddleware } from 'redux';
import appreducer from '../reducer/index'
import thunk from 'redux-thunk'
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    // whitelist:['login']
  }
  
  const persistedReducer = persistReducer(persistConfig, appreducer)

export const store = createStore(persistedReducer, applyMiddleware(logger,thunk));
export const persistor = persistStore(store);