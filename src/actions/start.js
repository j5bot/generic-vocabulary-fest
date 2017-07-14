const START_GAME = Symbol('START_GAME');
const KEY_DOWN = Symbol('KEY_DOWN');

export const actionTypes = {
  START_GAME,

  KEY_DOWN
}

export const createStartGameAction = ( props ) => {

  return {
    type: START_GAME,
    payload: {
      started: true,
      props
    }
  };

};

export const createHandleKeyDownAction = ( event ) => {

  return {
    type: KEY_DOWN,
    payload: {
      code: event.keyCode,
      timestamp: new Date().valueOf()
    }
  };

};

export default {
  createStartGameAction,
  createHandleKeyDownAction
};
