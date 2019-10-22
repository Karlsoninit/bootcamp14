import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { chooseCategory } from '../redux/actions';
const options = [
  { value: 'Картофель', label: 'Картофель' },
  { value: 'Помидоры', label: 'Помидоры' },
  { value: 'Тыква', label: 'Тыква' },
  { value: 'Фасоль', label: 'Фасоль' },
  { value: 'Маслины', label: 'Маслины' },
  { value: 'Голубика', label: 'Голубика' },
  { value: 'Говядина', label: 'Говядина' },
  { value: 'рис', label: 'рис' },
];
const PostSelect = ({ value, chooseCategory }) => (
  <Select options={options} onChange={chooseCategory} value={value} />
);

const mapStateToProps = state => ({
  value: state.counter.category,
});

const mapDispatchToProps = {
  chooseCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostSelect);
