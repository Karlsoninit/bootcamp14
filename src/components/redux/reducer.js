import Type from './type';
import { combineReducers } from 'redux';

// для работы с обьектом

// const counter = (state = { value: 0, label: '0' }, { type, payload }) => {
//   switch (type) {
//     case Type.INCREMENT:
//       return {
//         ...state,
//         value: state.value + payload,
//       };
//     case Type.DECREMENT:
//       return {
//         ...state,
//         value: state.value - payload,
//       };
//     default:
//       return {
//         ...state,
//         value: state.value,
//       };
//   }
// };

const counter = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;
    case Type.DECREMENT:
      return state - payload;
    default:
      return state;
  }
};

const step = (state = 10, { type, payload }) => {
  switch (type) {
    case Type.CHOOSE_STEP:
      return payload;
    default:
      return state;
  }
};

const post = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST:
      return payload;
    default:
      return state;
  }
};
const chooseCategory = (
  state = { value: 'Картофель', label: 'Картофель' },
  { type, payload },
) => {
  switch (type) {
    case Type.CHOOSE_CATEGORY:
      return payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  value: counter,
  step: step,
  posts: post,
  category: chooseCategory,
});
