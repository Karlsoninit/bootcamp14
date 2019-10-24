import Search from './Search';
import { connect } from 'react-redux';
import { getSearchValue } from './SearchActions';

// const mapStateToProps = state => ({
//   word: state.news.search,
// });

const mapDispatchToProps = {
  getSearchValue,
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
