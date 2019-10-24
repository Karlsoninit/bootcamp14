import Type from '../redux/type';

export const search = (state = '', { type, payload }) => {
  switch (type) {
    case Type.SEARCH:
      return payload;
    default:
      return state;
  }
};
