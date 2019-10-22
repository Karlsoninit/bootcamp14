import Type from '../redux/type';

export const chooseCategory = categories => ({
  type: Type.CHOOSE_CATEGORY,
  payload: categories,
});
