import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loremReducer } from './loremReducer.js';

const rootReducer = combineReducers({
  lorem: loremReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
