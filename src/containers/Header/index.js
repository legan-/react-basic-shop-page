import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  Item,
  List,
  Wrapper,
} from './components';

import { 
  toggleLikedItemsList,
  likeButtonClickHandler,
} from '~/src/actions';

import {
  likedItemsSelector,
} from './selectors';

Header.propTypes = {
  likedItems: TYPES.array.isRequired,
  isListActive: TYPES.bool.isRequired,
  toggleLikedItemsList: TYPES.func.isRequired,
  likeButtonClickHandler: TYPES.func.isRequired,
};

function Header({
  likedItems,
  isListActive,
  toggleLikedItemsList,
  likeButtonClickHandler,
}) {
  return (
    <Wrapper>
      <Button
        quantity={ likedItems.length }
        isActive={ isListActive }
        onClick={ toggleLikedItemsList }
      />
      <List
        isActive={ isListActive && likedItems.length > 0 }
      >
        {
          likedItems.map(({ id, title }) => (
            <Item
              key={ id }
              title={ title }
              onRemoveButtonClick={ () => likeButtonClickHandler(id) }
            />
          ))
        }
      </List>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  likedItems: likedItemsSelector(state),
  isListActive: state.likedItems.isListActive,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleLikedItemsList,
    likeButtonClickHandler,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
