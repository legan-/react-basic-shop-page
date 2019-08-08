import React from 'react';
import * as TYPES from 'prop-types';

Title.propTypes = {
  quantity: TYPES.number.isRequired,
};

function Title({
  quantity
}) {
  return (
    <div
      className='title-bar-title'
    >
      { `${ quantity } result${ quantity > 1 ? 's' : '' }` }
    </div>
  );
}

export default Title;
