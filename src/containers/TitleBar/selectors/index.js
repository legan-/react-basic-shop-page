import { createSelector } from 'reselect';

const getDataById = ({ data }) => data.byId;

export const itemsSizeSelector = createSelector(
  [
    getDataById
  ],
  (dataById) => {
    return Object.values(dataById).length;
  }
);