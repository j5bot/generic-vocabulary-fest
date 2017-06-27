const SPRITE_WIDTH = 82;
const SPRITE_HEIGHT = 123;

const INITIALIZE_SPRITES = 'INITIALIZE_SPRITES';
const ATTEMPT_MOVE = 'ATTEMPT_MOVE';
const HIDE_SPRITE = 'HIDE_SPRITE';
const MOVE_SPRITE = 'MOVE_SPRITE';
const FLIP_SPRITE = 'FLIP_SPRITE';

export const createInitializeSpritesAction = () => {

  return {
    type: INITIALIZE_SPRITES
  };

};

export const createAttemptMoveAction = ( sprite, shift ) => {

  return {
    type: ATTEMPT_MOVE,
    payload: {
      sprite: sprite,
      shift: shift
    }
  };

};

export const createHideSpriteAction = ( sprite ) => {

  return {
    type: HIDE_SPRITE,
    payload: {
      sprite: sprite
    }
  };

};

export const createMoveAction = ( sprite, top, left ) => {

  return {
    type: MOVE_SPRITE,
    payload: {
      sprite: sprite,
      top: top,
      left: left
    }
  };

}

export const createFlipAction = ( sprite, shift ) => {

  return {
    type: FLIP_SPRITE,
    payload: {
      sprite: sprite,
      shift: shift
    }
  };

};
