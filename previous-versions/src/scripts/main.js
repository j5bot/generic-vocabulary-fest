(function(undefined) {
  'use strict';
  var spriteWidth = 82,
    spriteHeight = 123;

  var music = new Howl({
    src: ['sounds/circus-attractions.mp3'],
    loop: true,
    volume: 0.3
  });

  var sounds = [
    new Howl({ src: ['sounds/hey-hey.mp3'] }),
    new Howl({ src: ['sounds/laugh.mp3'] })
  ];

  var pop = new Howl({
    src: ['sounds/balloon-pop.mp3']
  });

  function randomInteger(min, max) {
    var range = max - min;
    return min + Math.round(Math.random() * range);
  }

  var root = this;

  var positions = new Array(50),
    cols = 10,
    rows = 5,
    balloons = getElementCollection('balloon').map(mapSprite),
    clown = mapSprite(getFirstElement('clown')),
    unicorn = mapSprite(getFirstElement('unicorn')),
    movers = [unicorn];

  // sprites = balloons.concat(clown);

  function getElementCollection(tagname) {
    return Array.prototype.slice.call(document.getElementsByTagName(tagname));
  }

  function getFirstElement(tagname) {
    var e;

    return (e = getElementCollection(tagname)) && e && e.length > 0 && e[0];
  }

  function mapSprite(element) {
    return {
      element: element,
      type: element.tagName.toLowerCase()
    };
  }

  function initialize() {
    var i, l, balloon, position;

    // clown starts in the top left
    clown.position = 0;
    unicorn.position = 48;
    unicorn.spriteWidth = 1;

    positions[0] = clown;
    positions[48] = positions[49] = unicorn;

    // randomly distribute the balloons on the screen
    for (i = 0, l = balloons.length; i < l; i++) {
      balloon = balloons[i];

      while (!balloon.position) {
        position = randomInteger(1, 50);

        if (positions[position]) {
          continue;
        }

        balloon.position = position;
        positions[position] = balloon;
      }

      SpriteManager.moveSprite(balloon, 0);
    }

    SpriteManager.moveSprite(clown, 0);
    SpriteManager.moveSprite(unicorn, 0);

    document.onkeydown = handleKeyDown;

    music.play();

    getFirstElement('pause').onclick = function() {
      music.pause();
    };

    var controls = getFirstElement('controls').children;

    for (var i = 0; i < controls.length; i++) {
      controls[i].onclick = handleClicks;
    }

    SpriteManager.loop();
  }

  function handleKeyDown(event) {
    var key = event.charCode || event.keyCode,
      move;

    switch (key) {
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
    }

    SpriteManager.moveSprite(clown, move);
  }

  function handleClicks(event) {
    var button = event.target.tagName.toLowerCase(),
      move;

    switch (button) {
      case 'left':
        move = -1;
        break;
      case 'up':
        move = -10;
        break;
      case 'right':
        move = 1;
        break;
      case 'down':
        move = 10;
        break;
    }

    SpriteManager.moveSprite(clown, move);
  }

  var SpriteManager = {
    width: 82,
    height: 123,

    lastEventLoop: 0,
    loopRate: 500,

    loop: function() {
      requestAnimationFrame(SpriteManager.loop);

      var time = new Date().valueOf(),
        since = time - SpriteManager.lastEventLoop;

      if (since < SpriteManager.loopRate) {
        return;
      }

      SpriteManager.eventLoop();
      SpriteManager.lastEventLoop = new Date().valueOf();
    },

    eventLoop: function() {
      var i = 0,
        l = movers.length,
        mover,
        move,
        moves = [0, -1, -10, 10, 1, 0];

      for (; i < l; i++) {
        mover = movers[i];
        move = moves[randomInteger(0, moves.length - 1)];
        SpriteManager.moveSprite(mover, move);
      }
    },

    collision: function collision(sprite, occupier) {
      switch (sprite.type) {
        case 'clown':
          sounds[randomInteger(0, 1)].play();
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
        left = tryPosition % 10,
        top = (tryPosition - left) / 10;

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
        left = tryPosition % 10,
        top = (tryPosition - left) / 10,
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

  initialize();
}.call(this));
