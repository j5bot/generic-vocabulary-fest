import React from 'react';

import './Balloon.css';

const BalloonTagname = 'balloon';

export const Balloon = ( props ) => {
  return (
    <BalloonTagname data-sprite { ...props } />
  );
}

export default Balloon;
