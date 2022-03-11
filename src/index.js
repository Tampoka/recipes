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
import { Menu } from './components/Basics/Menu';
import * as ReactDOM from 'react-dom';

const data = [
  {
    name: 'Baked Salmon',
    ingredients: [
      {
        name: 'Salmon',
        amount: 1,
        measurement: 'lb',
      },
      {
        name: 'Pine Nuts',
        amount: 1,
        measurement: 'cup',
      },
      {
        name: 'Butter Lettuce',
        amount: 2,
        measurement: 'cups',
      },
      {
        name: 'Yellow Squash',
        amount: 1,
        measurement: 'med',
      },
      {
        name: 'Olive Oil',
        amount: 0.5,
        measurement: 'cup',
      },
      {
        name: 'Garlic',
        amount: 3,
        measurement: 'cloves',
      },
    ],
    steps: [
      'Preheat the oven to 350 degrees.',
      'Spread the olive oil around a glass baking dish.',
      'Add the yellow squash and place in the oven for 30 mins.',
      'Add the salmon, garlic, and pine nuts to the dish.',
      'Bake for 15 minutes.',
      'Remove from oven. Add the lettuce and serve.',
    ],
  },
  {
    name: 'Fish Tacos',
    ingredients: [
      {
        name: 'Whitefish',
        amount: 1,
        measurement: 'l lb',
      },
      {
        name: 'Cheese',
        amount: 1,
        measurement: 'cup',
      },
      {
        name: 'Iceberg Lettuce',
        amount: 2,
        measurement: 'cups',
      },
      {
        name: 'Tomatoes',
        amount: 2,
        measurement: 'large',
      },
      {
        name: 'Tortillas',
        amount: 3,
        measurement: 'med',
      },
    ],
    steps: [
      'Cook the fish on the grill until hot.',
      'Place the fish on the 3 tortillas.',
      'Top them with lettuce, tomatoes, and cheese.',
    ],
  },
];

/*
render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
*/

// ReactDOM.render(
ReactDOM.hydrate(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById('root'),
);
