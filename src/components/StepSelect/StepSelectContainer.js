import { connect } from 'react-redux';
import { chooseStep } from '../redux/actions';
import StepSelect from './StepSelect';
import { getStep } from './selectors';

const mapStateToProps = state => ({
  valueDefault: getStep(state),
});
const mapDispatchToProps = dispatch => ({
  handleChange: step => dispatch(chooseStep(step.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelect);
