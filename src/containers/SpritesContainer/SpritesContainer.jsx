import { connect } from 'react-redux';

import { Sprites } from '../../components';

import spriteActionCreators from '../../actions/sprite';

const mapStateToProps = (state, ownProps) => {

  return {
    positions: state.positions,
    spriteStates: state.spriteStates
  };

};

export const SpritesContainer = connect( mapStateToProps, spriteActionCreators )( Sprites );

export default Sprites;
