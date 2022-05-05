import React from 'react';
import './reset.scss';
import './index.scss';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import AppContainer from './AppContainer';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root'));
root.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </PersistGate>
);
