import { createSelector } from 'reselect';

const getDataById = ({ data }) => data.byId;

export const itemsSelector = createSelector(
  [
    getDataById
  ],
  (dataById) => {
    return Object.values(dataById);
  }
);