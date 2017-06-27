import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { game as reducer } from './reducers';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore( reducer );

ReactDOM.render(
  <Provider store={ store }>
    <App></App>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
