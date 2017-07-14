import React from 'react';
import './Sprites.css';

export const Sprites = ( props ) => {

  let { sprites, spriteStates } = props;

  return (
    <div data-sprites>
      {
        sprites.map( ( Sprite, index ) => {

          let sprite = spriteStates[ index ];

          return (
            <Sprite
              key={ 'sprite' + index }
              data-sprite={ sprite.flip }
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
