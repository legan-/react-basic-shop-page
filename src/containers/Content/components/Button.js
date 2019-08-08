import React, { memo } from 'react';
import * as TYPES from 'prop-types';

import ButtonMaterialUI from '@material-ui/core/Button';

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
  const title = soldItemsDisplayed ? 'Hide Sold Items' : 'Show All Items';

  return (
    <ButtonMaterialUI
      size='small'
      variant='contained'
      onClick={ onClick }
      className='title-bar-button'
    >
      { title }
    </ButtonMaterialUI>
  );
}

export default memo(Button, areEqual);
