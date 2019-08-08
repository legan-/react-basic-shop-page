import React from 'react';
import * as TYPES from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  Title,
  Wrapper,
} from './components';

import { 
  toggleSoldItems
} from '~/src/actions';

import {
  itemsSizeSelector
} from './selectors';

TitleBar.propTypes = {
  itemsSize: TYPES.number.isRequired,
  soldItemsDisplayed: TYPES.bool.isRequired,
  toggleSoldItems: TYPES.func.isRequired
};

function TitleBar({
  itemsSize,
  soldItemsDisplayed,
  toggleSoldItems,
}) {
  return (
    <Wrapper>
      <Title
        quantity={ itemsSize }
      />
      <Button
        soldItemsDisplayed={ soldItemsDisplayed }
        onClick={ toggleSoldItems }
      />
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  itemsSize: itemsSizeSelector(state),
  soldItemsDisplayed: state.soldItemsDisplayed,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    toggleSoldItems
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBar);
