import React, { memo } from 'react';
import * as TYPES from 'prop-types';

Button.propTypes = {
  soldItemsDisplayed: TYPES.bool.isRequired,
  onClick: TYPES.func.isRequired
};

const areEqual = (prevProps, nextProps) => {
  const {
    soldItemsDisplayed: soldItemsDisplayedA,
  } = prevProps;

  const {
    soldItemsDisplayed: soldItemsDisplayedB,
  } = nextProps;

  return soldItemsDisplayedA === soldItemsDisplayedB;
};

function Button({
  soldItemsDisplayed,
  onClick,
}) {
  const title = soldItemsDisplayed ? 'Show All Items' : 'Hide Sold Items';

  return (
    <button
      className='title-bar-button'
      onClick={ onClick }
    >
      { title }
    </button>
  );
}

export default memo(Button, areEqual);
