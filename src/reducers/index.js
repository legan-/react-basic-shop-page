import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

import data from './data';

const likedItemIds = (state = [...initialState.likedItemIds], action) => {
  switch (action.type) {
    case TYPES.UPDATE_LIKED_ITEM_IDS:
      return action.payload.ids;
    default:
      return state;
  }
};

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
  likedItemIds,
  soldItemsDisplayed
});
