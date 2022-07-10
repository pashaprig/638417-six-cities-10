import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  FAVORITES_COUNT: 10,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      favoritesCount = {Setting.FAVORITES_COUNT}
    />
  </React.StrictMode>,
);
