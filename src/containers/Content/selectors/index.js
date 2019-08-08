import { createSelector } from 'reselect';

const getDataById = ({ data }) => data.byId;
const getSoldItemsDisplayed = ({ soldItemsDisplayed }) => soldItemsDisplayed;

export const itemsSelector = createSelector(
  [
    getDataById,
    getSoldItemsDisplayed
  ],
  (dataById, soldItemsDisplayed) => {
    const allData = Object.values(dataById);
    return soldItemsDisplayed ? allData : allData.filter(({ sold }) => !sold);
  }
);