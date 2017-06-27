const DEFAULT_STATE = {

  positions: [],
  spriteStates: [
    // clown
    {
      position: 0
    },
    // unicorn
    {
      position: 48,
      width: 2
    }
  ]

};

export const game = ( state = DEFAULT_STATE, action ) => {

  debugger;

  switch ( action.type ) {

    case '@@redux/INIT':

      debugger;

    break;

    default:


    break;

  }


  return state;

};

export default game;
