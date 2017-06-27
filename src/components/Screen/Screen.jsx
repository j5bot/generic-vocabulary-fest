import React from 'react';

import './Screen.css';

export const Screen = ( props ) => {

  let { children } = props;

  return (
    <div data-screen>
      { children }
    </div>
  );

};

export default Screen;
