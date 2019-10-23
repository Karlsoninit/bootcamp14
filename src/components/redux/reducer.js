import { Type } from './actions';

export const counter = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;

    default:
      return state;
  }
};
