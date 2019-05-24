// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('container');
if (root != null) { ReactDOM.render(<App />, root); }
