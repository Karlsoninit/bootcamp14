import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter } from '../redux/reducer';
import { post, loader } from '../Post/PostReducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  value: counter,
  post: post,
  isLoading: loader,
});

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
