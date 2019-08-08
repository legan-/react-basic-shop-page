import { createSelector } from 'reselect';

const getDataById = ({ data }) => data.byId;
const getLikedIds = ({ likedItems }) => likedItems.ids;

export const likedItemsSelector = createSelector(
  [
    getDataById,
    getLikedIds,
  ],
  (dataById, likedIds) => {
    return likedIds.map(id => ({
      id,
      title: dataById[id].title
    }));
  }
);
