import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import App from './containers';

import './styles/index.sass';

const store = configureStore();
const root = document.getElementById('root');

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  root
);
