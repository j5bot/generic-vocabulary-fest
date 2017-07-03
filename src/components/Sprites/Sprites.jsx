import React from 'react';

export const Sprites = ( props ) => {

  let { dispatch, sprites, spriteStates } = props;

  let {
    createInitializeSpriteAction
  } = props;

  let spriteIndex = 0;

  debugger;

  return (
    <div data-sprites>
      {
        sprites.map( ( Sprite, index ) => {

          let sprite = spriteStates[ index ];

          if (!sprite) {
            createInitializeSpriteAction( sprite );
          }

          return (
            <Sprite
              key={ 'sprite' + index }
              data-index={ index }
            />
          );
        })
      }
    </div>
  );

};

export default Sprites;
