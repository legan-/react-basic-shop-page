import { combineReducers } from 'redux';

import initialState from './initialState';
import TYPES from '../constants/ActionTypes';

const byId = (state = initialState.data.byId, action) => {
  switch (action.type) {
    case TYPES.DATA_RECEIVED_SUCCESS:
      return { ...action.payload.data };
    default:
      return state;
  }
};

const isLoading = (state = initialState.data.isLoading, action) => {
  switch (action.type) {
    case TYPES.REQUEST_DATA:
      return true;
    case TYPES.DATA_RECEIVED_SUCCESS:
    case TYPES.DATA_RECEIVED_FAIL:
      return false;
    default:
      return state;
  }
};

const isReceived = (state = initialState.data.isReceived, action) => {
  switch (action.type) {
    case TYPES.DATA_RECEIVED_SUCCESS:
      return true;
    case TYPES.DATA_RECEIVED_FAIL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  isLoading,
  isReceived
});
