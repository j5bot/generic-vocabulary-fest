import { randomInteger } from '../modules/utils';
import { music } from '../modules/sounds';

import actions from '../actions';

const DEFAULT_STATE = {

  positions: { },
  spriteStates: {}

};

const SPRITE_ACTION_TYPES = actions.spriteActions.actionTypes;
const START_ACTION_TYPES = actions.startActions.actionTypes;

export const game = ( state = DEFAULT_STATE, action ) => {

  let newState = state;

  /**
   * createSetSpritePositionState
   *
   * Create a new state, based on context.previousState with the sprite at
   * context.index in the position at context.position
   *
   * @param   context
   * @return  state
   **/
  const createSetSpritePositionState = ( context ) => {

    let {

      previousState,

      index,
      position

    } = context;

    let { positions, spriteStates } = previousState;

    const spriteState = { ...spriteStates[ index ], position };

    positions = { ...positions, [position]: index };
    spriteStates = { ...spriteStates, [index]: spriteState };

    return { ...previousState, positions, spriteStates };

  };

  /**
   * randomizeSpritePosition
   *
   * Find an open position between 0 and length, checking positions
   *
   * @param   { length, positions }
   * @return  start                 random sprite start position
   **/
  const randomizeSpritePosition = ( { length, positions } ) => {

    let start;

    do {
      start = randomInteger( 0, length - 1 );
    } while ( positions[ start ] );

    return start;

  };

  switch ( action.type ) {

    case START_ACTION_TYPES.START_GAME:

      let { started } = action.payload;

      // side effect
      music.play();

      newState = { ...state, started };

    break;

    case SPRITE_ACTION_TYPES.INITIALIZE_SPRITE:

      let { start, length, index } = action.payload;

      let { positions } = state;

      if ( start !== 0 && !start ) {

        start = randomizeSpritePosition( {
          start,
          length,
          positions
        } );

      }

      newState = createSetSpritePositionState( {

        previousState: state,

        index,
        position: start

      } );

      debugger;

    break;

    case '@@redux/INIT':



      newState = {
        ...state,

      }

      debugger;

    break;

    default:


    break;

  }


  return newState;

};

export default game;
