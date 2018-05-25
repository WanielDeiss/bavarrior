import React from 'react';
import ReactDOM from 'react-dom';

import App from './layout/App';
import './stylesheets/style.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();