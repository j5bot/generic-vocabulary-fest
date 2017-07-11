import { connect } from 'react-redux';

import { Game } from '../../components';

import startActionCreators from '../../actions/start';


const mapStateToProps = (state, ownProps) => {

  return { positions: state.positions, started: state.started };

};

export const GameContainer = connect( mapStateToProps, startActionCreators )( Game );

export default GameContainer;
