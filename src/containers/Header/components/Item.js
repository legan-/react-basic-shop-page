import React, { memo } from 'react';
import * as TYPES from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

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
    <ListItem>
      <ListItemText primary={ title } />
      <ListItemSecondaryAction>
        <IconButton>
          <ClearIcon onClick={ onRemoveButtonClick } />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default memo(Item, areEqual);
