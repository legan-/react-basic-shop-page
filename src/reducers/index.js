import { combineReducers } from 'redux';

import initialState from './initialState';
// import TYPES from '../constants/ActionTypes';

import data from './data';

const likedItemIds = (state = [...initialState.likedItemIds], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const soldItemsDisplayed = (state = initialState.soldItemsDisplayed, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  data,
  likedItemIds,
  soldItemsDisplayed
});
