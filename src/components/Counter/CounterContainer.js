import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import Counter from './Counter';
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(increment(step)),
  onDecrement: step => dispatch(decrement(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
