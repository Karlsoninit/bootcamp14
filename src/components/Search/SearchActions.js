import Type from '../redux/type';

export const getSearchValue = value => ({
  type: Type.SEARCH,
  payload: value,
});
