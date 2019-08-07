import React from 'react';
import * as TYPES from 'prop-types';

Main.propTypes = {
  children: TYPES.node.isRequired
};

function Main({ children }) {
  return (
    <div className='main'>
      { children }
    </div>
  );
}

export default Main;