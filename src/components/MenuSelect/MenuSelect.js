import React from 'react';
import Select from 'react-select';

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

const MenuSelect = ({ value, chooseCategory }) => (
  <Select options={options} onChange={chooseCategory} value={value} />
);

export default MenuSelect;
