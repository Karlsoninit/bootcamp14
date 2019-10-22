import Type from '../redux/type';

export const fetchMenu = menu => ({
  type: Type.FETCH_MENU,
  payload: menu,
});
