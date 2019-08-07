import React from 'react';
import * as TYPES from 'prop-types';

Wrapper.propTypes = {
  children: TYPES.node.isRequired
};

function Wrapper({ children }) {
  return (
    <header>
      <div className='container'>
        { children }
      </div>
    </header>
  );
}

export default Wrapper;