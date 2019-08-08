import React from 'react';
import { hot } from 'react-hot-loader';

import {
  Content,
  Footer,
  Wrapper,
} from './components';

import {
  Header,
  Grid,
  TitleBar,
} from '../index';

import { date } from '~/src/helpers';
import { name } from '~/config';

function App() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <TitleBar />
        <Grid />
      </Content>
      <Footer
        year={ date().year }
        name={ name }
      />
    </Wrapper>
  );
}

export default hot(module)(App);
