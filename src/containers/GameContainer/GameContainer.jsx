import { connect } from 'react-redux';

import { Game } from '../../components';

import actionCreators from '../../actions';


const mapStateToProps = (state, ownProps) => {

  return {
    positions: state.positions,
    started: state.started,
    gameOver: state.gameOver,
    term: state.term
  };

};

export const GameContainer = connect( mapStateToProps, actionCreators )( Game );

export default GameContainer;
