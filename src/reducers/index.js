import { combineReducers } from 'redux';

import initialState from './initialState';
// import TYPES from '../constants/ActionTypes';

const key = (state = initialState.key, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  key
});
