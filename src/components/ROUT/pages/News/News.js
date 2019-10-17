import React, { Component } from 'react';
import NewsList from '../../NewsList/NewsList';
import { getAllNews, chooseCategory } from '../../API/API';
import Preloader from '../../Preloader/Preloader';
import Select from '../../Select/Select';
import Loadable from 'react-loadable';

let countRender = 0;
let countDidUpdate = 0;
let countDidMount = 0;

const getCategory = (value, options) => {
  return options.find(elem => elem.value === value);
};

const DropDownComponent = Loadable({
  loader: () =>
    import(
      '../../LogicInnerComponent/DropDown/DropDown' /*webpackChunkName: 'ComponentDropDown' */
    ),
  loading: Preloader,
});

const options = [
  { value: 'business', label: 'business' },
  { value: 'general', label: 'general' },
  { value: 'health', label: 'health' },
  { value: 'science', label: 'science' },
  { value: 'technology', label: 'technology' },
];

class News extends Component {
  state = {
    news: [],
    loader: true,
    category: null,
    isOpen: false,
  };

  componentDidMount() {
    console.log('componentDidMount', countDidMount++);
    getAllNews().then(data =>
      this.setState({
        news: data,
        loader: false,
      }),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState.category);
    console.log('this.state', this.state.category);
    if (prevState.category !== this.state.category) {
      console.log('componentDidUpdate', countDidUpdate++);
      chooseCategory(this.state.category).then(data =>
        this.setState({
          news: data,
          loader: false,
        }),
      );
    }
  }

  back = () => {
    this.props.history.push('/');
  };

  handleChange = evt => {
    console.log(evt.value);
    this.setState({
      category: evt.value,
    });
  };

  dropDownMenu = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    const { news, loader, category, isOpen } = this.state;
    console.log('render', countRender++);
    const get = getCategory(category, options);
    console.log('get obj', get);
    return (
      <>
        <button onClick={this.dropDownMenu}>{isOpen ? 'Close' : 'Open'}</button>
        {isOpen && <DropDownComponent />}
        <Select
          options={options}
          handleChange={this.handleChange}
          value={get}
        />
        {loader && <Preloader />}
        {news.length !== 0 && <NewsList category={category} data={news} />}
        <button onClick={this.back}>Back to Home</button>
      </>
    );
  }
}

export default News;
