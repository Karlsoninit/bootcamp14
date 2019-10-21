import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './reducer';
// default reducer test
// const reducer = (state = { count: 0 }) => state;

const rootReducer = combineReducers({
  counter: reducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
