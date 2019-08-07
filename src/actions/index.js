import * as actions from './actionCreators';
import * as api from '../api';

import {
  parseReceivedData
} from '../helpers';

export const fetchData = () => dispatch => {
  const url = 'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';

  dispatch(actions.requestData());

  api.getData(url)
    .then(parseReceivedData)
    .then(data => {
      dispatch(actions.dataReceivedSuccess(data));
    })
    .catch(() => {
      dispatch(actions.dataReceivedFail());
    });
};
