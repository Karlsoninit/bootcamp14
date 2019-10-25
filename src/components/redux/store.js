import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../redux/Authentication/AuthenticationReducer';
import reduxThunk from 'redux-thunk';

const middleWare = [reduxThunk];

const enhuncer = applyMiddleware(...middleWare);

const rootReducer = combineReducers({
  authentication: reducer,
});

const store = createStore(rootReducer, composeWithDevTools(enhuncer));

export default store;
