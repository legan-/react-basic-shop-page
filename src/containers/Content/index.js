import React from 'react';

import {
  Wrapper,
} from './components';

import { name } from '~/config';

function Content() {
  return (
    <Wrapper>
      { name }
    </Wrapper>
  );
}

export default Content;
