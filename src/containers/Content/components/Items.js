import React from 'react';
import * as TYPES from 'prop-types';

import Grid from '@material-ui/core/Grid';

Title.propTypes = {
  children: TYPES.node.isRequired,
};

function Title({
  children,
}) {
  return (
    <Grid
      container
      spacing={ 6 }
      className='items'
    >
      { children }
    </Grid>
  );
}

export default Title;
