/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ColorProvider from './customHooks/color-hooks';
import { ErrorScreen } from './components/ErrorScreen/ErrorScreen';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <ErrorBoundary fallback={ErrorScreen}>
        <App />
      </ErrorBoundary>
    </ColorProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);

*/

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
