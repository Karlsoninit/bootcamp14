import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';

const middleWare = applyMiddleware(thunk);

const rootReducer = combineReducers({
  DailyMail: reducer,
});

const store = createStore(rootReducer, composeWithDevTools(middleWare));

export default store;
