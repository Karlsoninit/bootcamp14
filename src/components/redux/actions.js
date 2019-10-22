import Type from './type';

export const increment = value => ({
  type: Type.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value,
});

export const chooseStep = step => ({
  type: Type.CHOOSE_STEP,
  payload: step,
});

export const fetchPost = post => ({
  type: Type.FETCH_POST,
  payload: post,
});
export const chooseCategory = category => ({
  type: Type.CHOOSE_CATEGORY,
  payload: category,
});
