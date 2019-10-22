import Menu from './Menu';
import { connect } from 'react-redux';
import { fetchMenu } from './MenuActions';
import { getMenu } from './selectors';

const mapStateToProps = state => ({
  data: getMenu(state),
  category: state.counter.category.value,
});

const mapDispatchToProps = {
  fetchMenu,
};

// const mapDispatchToProps = dispatch => ({
//   renderMenu: menu => dispatch(fetchMenu(menu)),
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
