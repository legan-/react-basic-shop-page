import React, { memo } from 'react';
import * as TYPES from 'prop-types';

Item.propTypes = {
  title: TYPES.string.isRequired,
  brand: TYPES.string.isRequired,
  onLikeButtonClick: TYPES.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  const {
    title: titleA,
    brand: brandA,
  } = prevProps;

  const {
    title: titleB,
    brand: brandB,
  } = nextProps;

  return titleA === titleB && brandA === brandB;
};

function Item({
  title,
  brand,
  onLikeButtonClick
}) {
  return (
    <div className='grid-item' onClick={ onLikeButtonClick }>
      { title }
      { brand }
    </div>
  );
}

export default memo(Item, areEqual);