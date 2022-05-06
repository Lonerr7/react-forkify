import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import currentRecipeSlice from './currentRecipeSlice';
import recipesSlice from './recipesSlice';

const rootReducer = combineReducers({
  recipes: recipesSlice,
  currentRecipe: currentRecipeSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['recipes', 'currentRecipe'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

window.store = store;
export default store;
