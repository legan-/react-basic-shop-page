import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

import data from './data';
import likedItems from './likedItems';

const soldItemsDisplayed = (state = initialState.soldItemsDisplayed, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_SOLD_ITEMS:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  likedItems,
  soldItemsDisplayed
});
