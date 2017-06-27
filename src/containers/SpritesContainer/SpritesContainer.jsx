// import React from 'react';
import { connect } from 'react-redux';

import { Sprites } from '../../components';

const mapStateToProps = (state, ownProps) => {

  return {
    positions: state.positions,
    spriteStates: state.spriteStates
  };

};

export const SpritesContainer = connect( mapStateToProps )( Sprites );

export default Sprites;
