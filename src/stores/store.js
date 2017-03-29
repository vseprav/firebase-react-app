import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'

import fireBaseUser from '../reducers/reducers';

let persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let store = createStore(
  combineReducers({
    fireBaseUser
  }),
  persistedState,
  applyMiddleware(createLogger())
);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

export default store;
