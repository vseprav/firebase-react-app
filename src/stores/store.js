import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'

import fireBaseUser from '../reducers/reducers';

export default createStore(
  combineReducers({
    fireBaseUser
  }),
  {},
  applyMiddleware(createLogger())
);
