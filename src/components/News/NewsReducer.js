import Type from '../redux/type';

export const news = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_NEWS_START:
      return state;
    case Type.FETCH_NEWS_SUCCSESS:
      return payload;
    case Type.FETCH_NEWS_ERROR:
      return payload;
    default:
      return state;
  }
};

export const loader = (state = false, { type, payload }) => {
  switch (type) {
    case Type.FETCH_NEWS_START:
      return true;
    case Type.FETCH_NEWS_SUCCSESS:
    case Type.FETCH_NEWS_ERROR:
      return false;
    default:
      return state;
  }
};
