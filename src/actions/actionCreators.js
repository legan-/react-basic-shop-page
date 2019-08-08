import TYPES from '../constants/ActionTypes';

export const requestData = () => ({
  type: TYPES.REQUEST_DATA
});

export const dataReceivedSuccess = data => ({
  type: TYPES.DATA_RECEIVED_SUCCESS,
  payload: {
    data
  }
});

export const dataReceivedFail = () => ({
  type: TYPES.DATA_RECEIVED_FAIL
});

export const updateLikedItemIds = ids => ({
  type: TYPES.UPDATE_LIKED_ITEM_IDS,
  payload: {
    ids
  }
});

export const toggleSoldItems = () => ({
  type: TYPES.TOGGLE_SOLD_ITEMS
});

export const toggleLikedItemsList = () => ({
  type: TYPES.TOGGLE_LIKED_ITEMS_LIST
});
