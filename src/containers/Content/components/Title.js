import React from 'react';
import * as TYPES from 'prop-types';

import Typography from '@material-ui/core/Typography';

Title.propTypes = {
  quantity: TYPES.number.isRequired,
};

function Title({
  quantity,
}) {
  return (
    <Typography
      variant='h4'
      className='title-bar-title'
    >
      { `${ quantity } result${ quantity > 1 ? 's' : '' }` }
    </Typography>
  );
}

export default Title;
