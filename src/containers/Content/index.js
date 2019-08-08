import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  Item,
  Title,
  TitleBar,
  Wrapper,
} from './components';

import {
  toggleSoldItems,
  likeButtonClickHandler,
} from '~/src/actions';

import {
  itemsSelector,
} from './selectors';

Grid.propTypes = {
  items: TYPES.array.isRequired,
  soldItemsDisplayed: TYPES.bool.isRequired,
  toggleSoldItems: TYPES.func.isRequired,
  likeButtonClickHandler: TYPES.func.isRequired,
};

function Grid({
  items,
  soldItemsDisplayed,
  toggleSoldItems,
  likeButtonClickHandler,
}) {
  return (
    <Wrapper>
      <TitleBar>
        <Title
          quantity={ items.length }
        />
        <Button
          soldItemsDisplayed={ soldItemsDisplayed }
          onClick={ toggleSoldItems }
        />
      </TitleBar>
      {
        items.map(({ id, ...otherProps }) => (
          <Item
            key={ id }
            { ...otherProps }
            onLikeButtonClick={ () => likeButtonClickHandler(id) }
          />
        ))
      }
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  items: itemsSelector(state),
  soldItemsDisplayed: state.soldItemsDisplayed,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleSoldItems,
    likeButtonClickHandler,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);