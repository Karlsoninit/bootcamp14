import Type from '../redux/type';

export const choooseCategory = (
  state = { value: 'Choose', label: 'Choose' },
  { type, payload },
) => {
  switch (type) {
    case Type.CHOOSE_CATEGORY:
      return payload;
    default:
      return state;
  }
};
