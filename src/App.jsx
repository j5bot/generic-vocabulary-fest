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

const gamePositions = {
  start: {
    Clown: 0,
    Unicorn: 48
  },
  width: {
    Clown: 0,
    Unicorn: 1,
    Balloon: 0
  },
  rows: 5,
  columns: 10,
  length: 50
};

const loopContext = {
  movers: [ 1 ],
  randomMovers: [ 2, 3, 4, 5, 6 ],
  moves: [ 0, -1, -1 * gamePositions.columns, gamePositions.columns, 1, 0 ],
  loopRate: 500
};

export const App = ( props ) => {

  return (
    <GameContainer loopContext={ loopContext } sprites={ sprites } gamePositions={ gamePositions }></GameContainer>
  );

};

export default App;
