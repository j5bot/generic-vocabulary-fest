import React from 'react';

import { Screen } from '../';
import { Start } from '../';
import { SpritesContainer } from '../../containers';
import { Controls } from '../';

import './Game.css';

export const Game = ( props ) => {

  let { started } = props;

  return (
    <div data-game>

      <h1>
        <img src="img/title.png" alt="GENERIC VOCABULARY FEST" />
      </h1>

      <Screen>
        { !started && (
          <Start { ...props }/>
        ) }
        { started && (
          <SpritesContainer { ...props } />
        ) }
      </Screen>

      <Controls />

    </div>
  );

};

export default Game;
