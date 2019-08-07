import React from 'react';
import * as TYPES from 'prop-types';

Wrapper.propTypes = {
  children: TYPES.node.isRequired
};

function Wrapper({ children }) {
  return (
    <div className='app wrapper'>
      { children }
    </div>
  );
}

export default Wrapper;
