import { combineReducers } from 'redux';
import { search } from '../Search/SearchReducer';
import { news, loader } from '../News/NewsReducer';

export default combineReducers({
  search,
  news,
  loader,
});
