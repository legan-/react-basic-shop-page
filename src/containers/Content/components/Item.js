import React, { memo } from 'react';
import * as TYPES from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

Item.propTypes = {
  title: TYPES.string.isRequired,
  brand: TYPES.string.isRequired,
  img: TYPES.string.isRequired,
  size: TYPES.string.isRequired,
  price: TYPES.number.isRequired,
  sold: TYPES.bool.isRequired,
  liked: TYPES.bool.isRequired,
  onLikeButtonClick: TYPES.func.isRequired,
};

const areEqual = (prevProps, nextProps) => {
  const {
    title: titleA,
    brand: brandA,
    img: imgA,
    size: sizeA,
    price: priceA,
    sold: soldA,
    liked: likedA,
  } = prevProps;

  const {
    title: titleB,
    brand: brandB,
    img: imgB,
    size: sizeB,
    price: priceB,
    sold: soldB,
    liked: likedB,
  } = nextProps;

  return titleA === titleB && brandA === brandB && imgA === imgB && sizeA === sizeB && priceA === priceB && soldA === soldB && likedA === likedB;
};

function Item({
  title,
  brand,
  img,
  size,
  price,
  sold,
  liked,
  onLikeButtonClick,
}) {
  return (
    <Grid
      item
      xs={ 12 }
      sm={ 6 }
      md={ 4 }
      lg={ 3 }
    >
      <Card>
        <CardMedia
          component='div'
          className='item-image'
        >
          <Button
            size='small'
            color={ liked ? 'primary' : 'default' }
            variant='contained'
            onClick={ onLikeButtonClick }
            className='item-like-button'
          >
            <ThumbUpOutlinedIcon />
          </Button>
          {
            sold && (
              <div className='item-sold'>
                Sold
              </div>
            )
          }
          <CardMedia
            component='img'
            alt={ title }
            title={ title }
            image={ img }
          />
        </CardMedia>
        <CardContent>
          <p>
            { title }
          </p>

          <p>
            { brand }
          </p>

          <p>
            { size }
          </p>
          <p>
            <strong>
              £
              { price }
            </strong>
          </p>
        </CardContent>
      </Card>
    </Grid>
  );
}

// onClick={ onLikeButtonClick }

export default memo(Item, areEqual);
