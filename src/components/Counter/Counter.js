import React from 'react';
import { onPlus } from '../redux/actions';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import toogleDefaultMenu from '../HOC/HOC';
const Counter = ({ value = 10, onPlusProps = () => {} }) => (
  <>
    <button type="button" onClick={onPlusProps}>
      Plus
    </button>
    <h2>{value}</h2>
  </>
);

const mapStateToProps = s => ({
  value: s.value,
});

const mapDispatchToProps = d => ({
  onPlusProps: () => d(onPlus(3)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
