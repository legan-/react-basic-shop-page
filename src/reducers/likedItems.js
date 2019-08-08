import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

const ids = (state = [...initialState.likedItems.ids], action) => {
  switch (action.type) {
    case TYPES.UPDATE_LIKED_ITEM_IDS:
      return [...action.payload.ids];
    default:
      return state;
  }
};

const isListActive = (state = initialState.likedItems.isListActive, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_LIKED_ITEMS_LIST:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  isListActive
});
