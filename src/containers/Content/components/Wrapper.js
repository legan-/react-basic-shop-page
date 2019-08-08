import React from 'react';
import * as TYPES from 'prop-types';

Wrapper.propTypes = {
  children: TYPES.node.isRequired
};

function Wrapper({ children }) {
  return (
    <div className='content container wrapper'>
      { children }
    </div>
  );
}

export default Wrapper;