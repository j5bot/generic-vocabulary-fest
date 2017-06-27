import React from 'react';

import './Controls.css';

export const Controls = ( props ) => {

  return(
      <div data-controls>
        <i data-up>^</i>
        <i data-left>&lt;</i>
        <i data-right>&gt;</i>
        <i data-down>^</i>

        <i data-pause>=</i>
      </div>
  );

};

export default Controls;
