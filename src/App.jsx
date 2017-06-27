import React from 'react';

import { GameContainer } from './containers';

import { Clown, Unicorn, Balloon } from './components';

// let sprites = [
//   'Clown',
//   'Unicorn',
//   'Balloon',
//   'Balloon',
//   'Balloon',
//   'Balloon',
//   'Balloon'
// ];

let sprites = [
  Clown,
  Unicorn,
  Balloon,
  Balloon,
  Balloon,
  Balloon,
  Balloon
];

export const App = ( props ) => {

  return (
    <GameContainer sprites={ sprites }></GameContainer>
  );

};

export default App;
