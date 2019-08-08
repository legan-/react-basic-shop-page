import React, { memo } from 'react';
import * as TYPES from 'prop-types';

Item.propTypes = {
  title: TYPES.string.isRequired,
  onRemoveButtonClick: TYPES.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  const {
    title: titleA,
  } = prevProps;

  const {
    title: titleB,
  } = nextProps;

  return titleA === titleB;
};

function Item({
  title,
  onRemoveButtonClick,
}) {
  return (
    <div onClick={ onRemoveButtonClick }>
      { title }
    </div>
  );
}

export default memo(Item, areEqual);
