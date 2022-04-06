import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddeware from 'redux-thunk';

const reducers = combineReducers({});

const store = createStore(reducers, applyMiddleware(thunkMiddeware));

window.store = store;

export default store;
