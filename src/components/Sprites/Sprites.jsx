import React from 'react';
import './Sprites.css';

export const Sprites = ( props ) => {

  let { sprites, spriteStates, gamePositions } = props;

  let {
    createInitializeSpriteAction
  } = props;

  debugger;

  return (
    <div data-sprites>
      {
        sprites.map( ( Sprite, index ) => {

          let sprite = spriteStates[ index ];

          if (!sprite) {

            debugger;

            const gamePosition = gamePositions.start[ Sprite.name ];

            createInitializeSpriteAction( { sprite: Sprite, start: gamePosition, length: gamePositions.length, index: index } );

            return null;
          }

          return (
            <Sprite
              key={ 'sprite' + index }
              data-index={ index }
              data-sprite-position={ sprite.position }
            />
          );
        })
      }
    </div>
  );

};

export default Sprites;
