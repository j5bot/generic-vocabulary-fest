import React from 'react';

import { Screen } from '../';
import { Start } from '../';
import { GameOver } from '../';
import { VocabularyWord } from '../';
import { SpritesContainer } from '../../containers';

import './Game.css';

export const Game = ( props ) => {

  let { started, createHandleKeyDownAction, gameOver } = props;

  return (
    <div data-game tabIndex="0" onKeyDown={ createHandleKeyDownAction }>

      <h1>
        <img src="img/title.png" alt="GENERIC VOCABULARY FEST" />
      </h1>

      <Screen>

        { !started && (
          <Start { ...props }/>
        ) }
        { started && (
          <div>
            <VocabularyWord { ...props } />
            <SpritesContainer { ...props } />
          </div>
        ) }
        { gameOver && (
          <GameOver />
        ) }
      </Screen>

    </div>
  );

};

export default Game;
