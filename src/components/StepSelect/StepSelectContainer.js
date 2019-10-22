import { connect } from 'react-redux';
import { chooseStep } from '../redux/actions';
import StepSelect from './StepSelect';

const mapStateToProps = state => ({
  valueDefault: state.counter.value,
});
const mapDispatchToProps = dispatch => ({
  handleChange: step => dispatch(chooseStep(step.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSelect);
