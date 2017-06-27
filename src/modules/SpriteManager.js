import { randomInteger } from './utils';
import { randomMember } from './utils';

import { sounds, pop } from './sounds';

const SPRITE_WIDTH = 82;
const SPRITE_HEIGHT = 123;

const EVENT_LOOP_RATE = 500;

const ROWS = 5;
const COLS = 10;

let positions = new Array( ROWS * COLS );

export const SpriteManager = {

  width: SPRITE_WIDTH,
  height: SPRITE_HEIGHT,

  lastEventLoop: 0,
  loopRate: EVENT_LOOP_RATE,

  // non-pure, it will have a different effect every time that it's called
  loop: function loop () {

    var time = new Date().valueOf(),
      since = time - SpriteManager.lastEventLoop;

    if (since < SpriteManager.loopRate) {
      return;
    }

    SpriteManager.processEvents();
    SpriteManager.lastEventLoop = new Date().valueOf();

    requestAnimationFrame(SpriteManager.loop);

  },

  processEvents: function processEvents () {
    var i = 0,
      l = movers.length,
      mover,
      move,
      moves = [0, -1, -1 * COLS, COLS, 1, 0];

    for (; i < l; i++) {
      mover = movers[i];
      move = randomMember( moves );
      SpriteManager.moveSprite(mover, move);
    }
  },

  collision: function collision(sprite, occupier) {
    switch (sprite.type) {
      case 'clown':
        randomMember( sounds ).play();
        break;
      case 'unicorn':
        pop.play();
        break;
    }

    switch (occupier.type) {
      case 'balloon':
        SpriteManager.hide(occupier);
        break;
    }
  },

  hide: function hide(sprite) {
    sprite.element.style.left = '-300000px';
    sprite.hide = true;
  },

  move: function move(sprite, top, left) {
    var element = sprite.element,
      style = element.style,
      width = SpriteManager.width,
      height = SpriteManager.height;

    style.top = top * height + 'px';
    style.left = left * width + 'px';
  },

  flip: function flipSprite(sprite, shift) {
    if (Math.abs(shift) !== 1) {
      return;
    }
    var element = sprite.element;
    element.setAttribute('sprite', shift > 0 ? 'flip' : '');

    sprite.flip = shift > 0;
  },

  cantMove: function cantMove(sprite, shift) {
    var tryPosition = sprite.position + shift,
      needWidth = sprite.spriteWidth || 0,
      left = tryPosition % COLS,
      top = (tryPosition - left) / COLS;

    return (
      left < 0 || // off left side
      left > cols - 1 - needWidth || // off right side
      top < 0 || // off top
      top > rows - 1 || // off bottom
      (left === 0 && shift === 1) || // don't wrap around up
      (left === cols - 1 && shift === -1) // don't wrap around down
    );
  },

  /**
  shift by -1 to move left, 1 to move right, -10 to move up, +10 to move down,
  0 to set initial position
  **/
  moveSprite: function moveSprite(sprite, shift) {
    if (SpriteManager.cantMove(sprite, shift)) {
      return;
    }

    var position = sprite.position,
      tryPosition = position + shift,
      needWidth = sprite.spriteWidth || 0,
      left = tryPosition % COLS,
      top = (tryPosition - left) / COLS,
      collision = positions[tryPosition];

    positions[position] = null;

    SpriteManager.move(sprite, top, left);
    SpriteManager.flip(sprite, shift);

    if (shift && collision) {
      SpriteManager.collision(sprite, collision);
    }

    sprite.position = tryPosition;
    positions[tryPosition] = sprite;
  }
};

export default SpriteManager;
