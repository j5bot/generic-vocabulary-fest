import React from 'react';
import './Unicorn.css';

const UnicornTagName = 'unicorn';

export const Unicorn = ( props ) => {
  return (
    <UnicornTagName data-sprite { ...props } />
  );
}

export default Unicorn;
