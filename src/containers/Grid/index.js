import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Item,
  Wrapper,
} from './components';

import {
  likeButtonClickHandler
} from '~/src/actions';

import {
  itemsSelector
} from './selectors';

Grid.propTypes = {
  items: TYPES.array.isRequired,
  likeButtonClickHandler: TYPES.func.isRequired,
};

function Grid({
  items,
  likeButtonClickHandler
}) {
  return (
    <Wrapper>
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
  items: itemsSelector(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    likeButtonClickHandler
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
