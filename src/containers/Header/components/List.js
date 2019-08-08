import React from 'react';
import * as TYPES from 'prop-types';

import ListMaterialUI from '@material-ui/core/List';

List.propTypes = {
  children: TYPES.node.isRequired,
  isActive: TYPES.bool.isRequired,
};

function List({
  children,
  isActive,
}) {
  return isActive && (
    <ListMaterialUI
      disablePadding
      className='liked-list'
    >
      { children }
    </ListMaterialUI>
  );
}

export default List;
