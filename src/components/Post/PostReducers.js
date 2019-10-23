import Type from './PostType';

export const post = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_START:
      return state;
    case Type.FETCH_POST_SUCCESS:
      return payload;
    case Type.FETCH_POST_ERROR:
      return [payload.message];
    default:
      return state;
  }
};

export const loader = (state = false, { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_START:
      return true;
    case Type.FETCH_POST_SUCCESS:
    case Type.FETCH_POST_ERROR:
      return false;
    default:
      return state;
  }
};
