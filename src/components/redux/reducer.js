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

const step = (state = { value: 0, label: '0' }, { type, payload }) => {
  switch (type) {
    case Type.CHOOSE_STEP:
      return payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  value: counter,
  step: step,
});
