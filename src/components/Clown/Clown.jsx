import React from 'react';
import './Clown.css';

const ClownTagName = 'clown';

export const Clown = ( props ) => {
  return (
    <ClownTagName data-sprite { ...props } />
  );
}

export default Clown;
