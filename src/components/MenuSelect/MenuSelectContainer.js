import { connect } from 'react-redux';
import MenuSelect from './MenuSelect';
import { getValueCategory } from '../Menu/selectors';
import { chooseCategory } from './MenuSelectActions';

const mapStateToProps = state => ({
  value: getValueCategory(state),
});

const mapDispatchToProps = {
  chooseCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuSelect);
