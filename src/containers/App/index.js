import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import {
  Footer,
  Wrapper,
} from './components';

import Content from '../Content';

import { date } from '~/src/helpers';
import { name } from '~/config';

class App extends Component {
  state = {};
  
  render() {
    return (
      <Wrapper>
        <Content />
        <Footer
          year={ date().year }
          name={ name }
        />
      </Wrapper>
    );
  }
}

export default hot(module)(App);
