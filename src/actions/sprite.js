const INITIALIZE_SPRITE = Symbol('INITIALIZE_SPRITE');
const HIDE_SPRITE = Symbol('HIDE_SPRITE');
const MOVE_SPRITE = Symbol('MOVE_SPRITE');

export const actionTypes = {
  INITIALIZE_SPRITE,
  HIDE_SPRITE,
  MOVE_SPRITE
}

export const createInitializeSpriteAction = ( { sprite, start, length, index } ) => {

  return {
    type: INITIALIZE_SPRITE,
    payload: {
      sprite,
      start,
      length,
      index
    }
  }

};

export const createHideSpriteAction = ( sprite ) => {

  return {
    type: HIDE_SPRITE,
    payload: {
      sprite
    }
  };

};

export const createMoveSpriteAction = ( { index, move } ) => {

  return {
    type: MOVE_SPRITE,
    payload: {
      index,
      move
    }
  };

}

export default {
  createHideSpriteAction,
  createInitializeSpriteAction,
  createMoveSpriteAction
};
