import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers/root.js';
import './index.css';

const store = createStore(
	rootReducer,
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
