import { randomInteger } from '../modules/utils';
import { randomMember} from '../modules/utils';
import { music, sounds, pop } from '../modules/sounds';

import actions from '../actions';

const loop = ( context ) => {

  return requestAnimationFrame( () => processEvents( context ) );

};

const processEvents = ( context ) => {

  const time = new Date().valueOf(),
    since = time - context.lastTime;

  if ( since < context.loopRate ) {
    return loop( context );
  }

  const { movers, randomMovers, moves, createMoveSpriteAction } = context;

  const movingNow = [ ...movers ];

  if ( randomInteger(0,4) === randomInteger(0,4) ) {
    movingNow.push( randomMember( randomMovers ) );
  }

  let i = 0;
  const l = movingNow.length;

  for ( ; i < l; i++ ) {

    const mover = movingNow[ i ];
    const move = randomMember( moves );

    createMoveSpriteAction( {
      index: mover,
      move
    } );

  }

  context.lastTime = new Date().valueOf();

  return loop( context );

};


const DEFAULT_STATE = {

  positions: { },
  spriteStates: { },
  loop: { }

};

const SPRITE_ACTION_TYPES = actions.actionTypes;
const START_ACTION_TYPES = actions.actionTypes;

export const game = ( state = DEFAULT_STATE, action ) => {

  let newState = state;

  /**
   * createSetSpriteState
   *
   * Create a new state, based on context.previousState with the sprite at
   * context.index in the position at context.position
   *
   * @param   context
   * @return  state
   **/
  const createSetSpriteState = ( context ) => {

    let {

      previousState,
      index,
      start,
      sprite

    } = context;

    let { positions, spriteStates } = previousState;

    const spriteState = { ...spriteStates[ index ], ...sprite };

    if ( sprite.position ) {
      if ( start ) {
        delete positions.start;
      }
      positions = { ...positions, [sprite.position]: index };
    }
    spriteStates = { ...spriteStates, [index]: spriteState };

    return { ...previousState, positions, spriteStates };

  };

  const createHideSpriteState = ( context ) => {

    let { previousState, sprite } = context;

    return createSetSpriteState( {

      previousState,
      index: sprite.index,
      start: sprite.position,
      sprite: {
        position: -10000 - sprite.index,
        hidden: true
      }

    });

  };

  const createCollideSpriteState = ( context ) => {

    let {

      previousState,
      index,
      occupier,
      position

    } = context;

    let { spriteStates } = previousState;

    const sprite1 = spriteStates[ index ];
    const sprite2 = spriteStates[ occupier ];

    let clown, unicorn, balloon, balloon2;

    switch ( sprite1.name ) {
      case 'Clown':
        clown = sprite1;
      break;
      case 'Unicorn':
        unicorn = sprite1;
      break;
      case 'Balloon':
        balloon = sprite1;
      break;
      default:
      break;
    }

    switch ( sprite2.name ) {
      case 'Clown':
        clown = sprite2;
      break;
      case 'Unicorn':
        unicorn = sprite2;
      break;
      case 'Balloon':
        balloon = balloon ? ( (balloon2 = sprite2) && balloon ) : sprite2;
      break;
      default:
      break;
    }

    if ( clown && unicorn ) {

      // end game
      return createHideSpriteState( {
        previousState,
        sprite: clown,
        position
      } );

    }

    if ( clown && balloon ) {

      pop.play();
      randomMember( sounds ).play();

      return createHideSpriteState( {
        previousState,
        sprite: balloon,
        position
      } );

    }

    if ( unicorn && balloon ) {

      pop.play();

      return createHideSpriteState( {
        previousState,
        sprite: balloon,
        position
      } );

    }

    if ( balloon && balloon2 ) {

      // cancel move
      return false;

    }


  };

  const canMove = ( { position, width = 0, move, cols = 10, rows = 5 } ) => {

    const tryPosition = position + move;
    const left = tryPosition % cols;
    const top = (tryPosition - left) / cols;

    return left >= 0 && // isn't off left
      left < cols - width && // isn't off right
        top >= 0 && // isn't off top
          top < rows &&
            !( left === 0 && move === 1 ) && // isn't wrap up
              !( left === (cols - 1) && move === -1 ); // isn't wrap down

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

  // used throughout cases
  let spriteIndex, move, flip;

  switch ( action.type ) {

    case START_ACTION_TYPES.START_GAME:

      const { spriteStates } = state;
      let { started, props: { sprites, gamePositions, loopContext, createMoveSpriteAction } } = action.payload;

      sprites.map( ( Sprite, index ) => {

        const sprite = spriteStates[ index ];

        if (!sprite) {

          const gamePosition = gamePositions.start[ Sprite.name ];
          const gameWidth = gamePositions.width[ Sprite.name ];

          newState = game( newState, {

            type: SPRITE_ACTION_TYPES.INITIALIZE_SPRITE,
            payload: {
              sprite: Sprite,
              start: gamePosition,
              width: gameWidth,
              length: gamePositions.length,
              index
            }

          } );

        }

        return Sprite;

      } );

      // side effect
      music.play();

      loop( { ...loopContext, createMoveSpriteAction } );

      newState = { ...newState, started };

    break;

    case START_ACTION_TYPES.KEY_DOWN:

      let { code } = action.payload;
      spriteIndex = 0;

      switch ( code ) {
        case 37:
          move = -1;
        break;
        case 38:
          move = -10;
        break;
        case 39:
          move = 1;
        break;
        case 40:
          move = 10;
        break;
        default:
          move = 0;
      }

      newState = game( newState, {

        type: SPRITE_ACTION_TYPES.MOVE_SPRITE,
        payload: {
          move,
          spriteIndex
        }

      } );

    break;

    case SPRITE_ACTION_TYPES.MOVE_SPRITE:

      ({ move, spriteIndex } = action.payload);

      let cancel = false;

      const spriteState = state.spriteStates[ spriteIndex ];
      let position = spriteState.position;
      const spriteWidth = spriteState.width;

      if ( move !== 0 && canMove( {
        position,
        width: spriteWidth,
        move
      }) ) {

        position = position + move;

        const occupier = state.positions[ position ];

        if ( occupier ) {

          newState = createCollideSpriteState( {

            previousState: newState,

            index: spriteIndex,
            occupier,
            position

          }) || ( cancel = true && newState );

        }

        if ( cancel ) {
          break;
        }

        flip = Math.abs( move ) === 1 ? 'flip' : '';

        newState = createSetSpriteState( {

          previousState: newState,

          index: spriteIndex,
          start: position - move,

          sprite: {
            position,
            flip
          }

        })

      }

    break;

    case SPRITE_ACTION_TYPES.INITIALIZE_SPRITE:

      flip = '';

      let { sprite, start, width, length, index } = action.payload;
      let { positions } = state;

      if ( start !== 0 && !start ) {

        start = randomizeSpritePosition( {
          start,
          length,
          positions
        } );

        flip = start % 2 > 0 ? 'flip' : '';

      }

      newState = createSetSpriteState( {

        previousState: state,

        index,

        sprite: {
          position: start,
          flip,
          width,
          name: sprite.name,
          index
        }

      } );

    break;

    case '@@redux/INIT':



      newState = {
        ...state,

      }

    break;

    default:


    break;

  }


  return newState;

};

export default game;
