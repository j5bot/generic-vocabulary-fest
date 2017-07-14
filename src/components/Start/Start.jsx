import React from 'react';
import './Start.css';

export const Start = ( props ) => {

  let { createStartGameAction } = props;

  return (
      <button data-start onClick={ () => createStartGameAction( props ) }>start</button>
  );

};

export default Start;
