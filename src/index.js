import React from 'react';
import './reset.scss';
import './index.scss';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import AppContainer from './AppContainer';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
