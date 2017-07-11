import React from 'react';

import { GameContainer } from './containers';

import { Clown, Unicorn, Balloon } from './components';

let sprites = [
  Clown,
  Unicorn,
  Balloon,
  Balloon,
  Balloon,
  Balloon,
  Balloon
];

let gamePositions = {
  start: {
    Clown: 0,
    Unicorn: 48
  },
  rows: 5,
  columns: 10,
  length: 50
};

export const App = ( props ) => {

  return (
    <GameContainer sprites={ sprites } gamePositions={ gamePositions }></GameContainer>
  );

};

export default App;
