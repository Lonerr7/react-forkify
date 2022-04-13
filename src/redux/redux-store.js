import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddeware from 'redux-thunk';
import bookmarksReducer from './bookmarksReducer';
import currentRecipeReducer from './currentRecipeReducer';
import recipesReducer from './recipesReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  recipes: recipesReducer,
  currentRecipe: currentRecipeReducer,
  bookmarks: bookmarksReducer,
});

const bookmarksPersistConfig = {
  key: 'bookmarks',
  storage,
  blacklist: ['recipes', 'currentRecipe'],
};

const persistedReducer = persistReducer(bookmarksPersistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddeware));

export const persistor = persistStore(store);

window.store = store;

export default store;
