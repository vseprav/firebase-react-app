import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import fireBaseUser from '../reducers/firebase_user';
import dictionaries from '../reducers/dictionary';

const storeName = 'appStore';

let persistedState = localStorage.getItem(storeName) ? JSON.parse(localStorage.getItem(storeName)) : {};

let store = createStore(
  combineReducers({
    fireBaseUser,
    dictionaries
  }),
  persistedState,
  applyMiddleware(createLogger())
);

store.subscribe(()=>{
  localStorage.setItem(storeName, JSON.stringify(store.getState()))
});

export default store;
