import React from 'react';

export const Sprites = ( props ) => {

  let { sprites, spriteStates } = props;

  let spriteIndex = 0;

  debugger;

  return (
    <div data-sprites>
      {
        sprites.map( ( Sprite, index ) => {

          let sprite = spriteStates[ index ];

          if (!sprite) {
            // dispatch initialize
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
