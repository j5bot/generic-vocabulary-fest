// import React from 'react';
import { connect } from 'react-redux';

import { Game } from '../../components';

const mapStateToProps = (state, ownProps) => {

  return { positions: state.positions };

};

export const GameContainer = connect( mapStateToProps )( Game );

// export const GameContainer = ( props ) => {

//   let { sprites } = props;

//   return (
//     <Game sprites={ sprites } />
//   );
// };

export default GameContainer;
