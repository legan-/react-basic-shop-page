import React from 'react';
import { hot } from 'react-hot-loader';

import {
  Footer,
  Wrapper,
} from './components';

import {
  Header,
  Content,
} from '../index';

import { date } from '~/src/helpers';
import { name } from '~/config';

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer
        year={ date().year }
        name={ name }
      />
    </Wrapper>
  );
}

export default hot(module)(App);
