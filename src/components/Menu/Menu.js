import React, { Component } from 'react';
import menu from '../../menu.json';
import MenuList from '../MenuList/MenuList';
import MenuSelect from '../MenuSelect/MenuSelectContainer';
import { filterMenu } from './selectors';

class Menu extends Component {
  state = {};
  componentDidMount() {
    console.log('this.props.category', this.props.category);
    this.props.fetchMenu(menu);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.props.fetchMenu(filterMenu(menu, this.props.category));
    }
  }

  render() {
    const { data } = this.props;
    console.log('inner Menu', data);
    return (
      <>
        <MenuSelect />
        <div style={{ display: 'flex', flexRow: 'row' }}>
          {data.length > 0 &&
            data.map(item => <MenuList key={item.id} data={item} />)}
        </div>
      </>
    );
  }
}

export default Menu;
