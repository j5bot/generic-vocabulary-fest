const SPRITE_WIDTH = 82;
const SPRITE_HEIGHT = 123;

const INITIALIZE_SPRITES = Symbol('INITIALIZE_SPRITES');
const INITIALIZE_SPRITE = Symbol('INITIALIZE_SPRITE');
const ATTEMPT_MOVE = Symbol('ATTEMPT_MOVE');
const HIDE_SPRITE = Symbol('HIDE_SPRITE');
const MOVE_SPRITE = Symbol('MOVE_SPRITE');
const FLIP_SPRITE = Symbol('FLIP_SPRITE');

export const actionTypes = {
  INITIALIZE_SPRITES,
  INITIALIZE_SPRITE,
  ATTEMPT_MOVE,
  HIDE_SPRITE,
  MOVE_SPRITE,
  FLIP_SPRITE
}

export const createInitializeSpriteAction = ( sprite ) => {

  return {
    type: INITIALIZE_SPRITE,
    payload: {
      sprite
    }
  }

};

export const createInitializeSpritesAction = () => {

  return {
    type: INITIALIZE_SPRITES
  };

};

export const createAttemptMoveAction = ( sprite, shift ) => {

  return {
    type: ATTEMPT_MOVE,
    payload: {
      sprite,
      shift
    }
  };

};

export const createHideSpriteAction = ( sprite ) => {

  return {
    type: HIDE_SPRITE,
    payload: {
      sprite
    }
  };

};

export const createMoveAction = ( sprite, top, left ) => {

  return {
    type: MOVE_SPRITE,
    payload: {
      sprite,
      top,
      left
    }
  };

}

export const createFlipAction = ( sprite, shift ) => {

  return {
    type: FLIP_SPRITE,
    payload: {
      sprite,
      shift
    }
  };

};

export default {
  createAttemptMoveAction,
  createFlipAction,
  createHideSpriteAction,
  createInitializeSpriteAction,
  createInitializeSpritesAction,
  createMoveAction
};
