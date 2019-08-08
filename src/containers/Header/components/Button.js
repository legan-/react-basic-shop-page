import React, { memo } from 'react';
import * as TYPES from 'prop-types';

Button.propTypes = {
  quantity: TYPES.number.isRequired,
  isActive: TYPES.bool.isRequired,
  onClick: TYPES.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  const {
    quantity: quantityA,
    isActive: isActiveA,
  } = prevProps;

  const {
    quantity: quantityB,
    isActive: isActiveB,
  } = nextProps;

  return quantityA === quantityB && isActiveA === isActiveB;
};

function Button({
  quantity,
  isActive,
  onClick,
}) {
  return (
    <button
      onClick={ onClick }
    >
      { isActive ? '+' : '-' }
      { quantity }
    </button>
  );
}

export default memo(Button, areEqual);
