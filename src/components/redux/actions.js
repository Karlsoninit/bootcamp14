export const Type = {
  INCREMENT: 'INCREMENT',
};

export const onPlus = value => ({
  type: Type.INCREMENT,
  payload: value,
});
