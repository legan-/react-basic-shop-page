import React, { memo } from 'react';
import * as TYPES from 'prop-types';

import MaterialUIButton from '@material-ui/core/Button';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

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
    <MaterialUIButton
      variant='outlined'
      size='small'
      color={ isActive ? 'primary' : 'default' }
      className={ 'toggle-liked-list-button' }
      onClick={ onClick }
    >
      <ThumbUpOutlinedIcon className='toggle-liked-list-button-icon' />
      <span className='toggle-liked-list-button-quantity'>
        { quantity }
      </span>
    </MaterialUIButton>
  );
}

export default memo(Button, areEqual);
