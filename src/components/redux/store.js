import { createStore, combineReducers, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../redux/reducers';

const rootReducer = combineReducers({
  news: reducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
