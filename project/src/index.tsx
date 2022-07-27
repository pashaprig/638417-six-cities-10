import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './consts';
import { offers } from './mocks/offers-mock';
import { reviews } from './mocks/review-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      favoritesCount = {Setting.FAVORITES_COUNT}
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
