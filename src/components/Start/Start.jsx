import React from 'react';
import './Start.css';

export const Start = ( props ) => {

  let { createStartGameAction } = props;

  return (
      <div data-start onClick={ createStartGameAction }>start</div>
  );

};

export default Start;
