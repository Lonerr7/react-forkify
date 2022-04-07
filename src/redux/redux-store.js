import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddeware from 'redux-thunk';
import recipesReducer from './recipesReducer';

const reducers = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddeware));

window.store = store;

export default store;
