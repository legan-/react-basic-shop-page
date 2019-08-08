import React, { memo } from 'react';
import * as TYPES from 'prop-types';

Item.propTypes = {
  title: TYPES.string.isRequired,
  brand: TYPES.string.isRequired,
  liked: TYPES.bool.isRequired,
  onLikeButtonClick: TYPES.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  const {
    title: titleA,
    brand: brandA,
    liked: likedA,
  } = prevProps;

  const {
    title: titleB,
    brand: brandB,
    liked: likedB,
  } = nextProps;

  return titleA === titleB && brandA === brandB && likedA === likedB;
};

function Item({
  title,
  brand,
  liked,
  onLikeButtonClick,
}) {
  return (
    <div className='grid-item' onClick={ onLikeButtonClick }>
      { liked ? '+' : '' }
      { title }
      { brand }
    </div>
  );
}

export default memo(Item, areEqual);
