import Type from './PostType';

export const fetchPostStart = () => ({
  type: Type.FETCH_POST_START,
});

export const fetchPostSuccess = post => ({
  type: Type.FETCH_POST_SUCCESS,
  payload: post,
});

export const fetchPostError = error => ({
  type: Type.FETCH_POST_ERROR,
  payload: error,
});
