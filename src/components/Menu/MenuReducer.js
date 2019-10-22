import Type from '../redux/type';

export const menu = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_MENU:
      return payload;
    default:
      return state;
  }
};
