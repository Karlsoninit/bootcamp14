import Type from '../redux/type';

export const fetchNewsStart = () => ({
  type: Type.FETCH_NEWS_START,
});

export const fetchNewsSuccsess = data => ({
  type: Type.FETCH_NEWS_SUCCSESS,
  payload: data,
});

export const fetchNewsErorr = error => ({
  type: Type.FETCH_NEWS_ERROR,
  payload: error,
});
