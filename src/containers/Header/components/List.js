import React from 'react';
import * as TYPES from 'prop-types';

List.propTypes = {
  children: TYPES.node.isRequired,
  isActive: TYPES.bool.isRequired,
};

function List({
  children,
  isActive,
}) {
  return isActive && (
    <div>
      { children }
    </div>
  );
}

export default List;
