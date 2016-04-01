import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp, window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
