import React, { Component } from 'react';

import {
  Wrapper,
  Main,
} from './components';

import { name } from '~/config';

export default class Content extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Main>
          { name }
        </Main>
      </Wrapper>
    );
  }
}
