import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers/';

import {
  fetchData
} from './actions';

export default () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(fetchData());

  return store;
};
