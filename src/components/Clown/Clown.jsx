import React from 'react';

import './Clown.css';

export const Clown = ( props ) => {
  return (
    <i data-clown data-sprite { ...props } />
  );
}

export default Clown;
