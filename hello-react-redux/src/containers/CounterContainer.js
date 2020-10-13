import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

// function CounterContainer() {
//   const state = store.getState();
//   const count = state.count;

//   function handleIncrement() {
//     store.dispatch({type: 'increment'});
//   }

//   return (
//     <Counter count={count} onIncrement={handleIncrement} />
//   );
// }
function mapStateTopProps(state) {
  return { // props
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return { // props
    onIncrement() {
      dispatch({type: 'increment'});
    }
  };
}

const createContainer = connect(mapStateTopProps, mapDispatchToProps);
const CounterContainer = createContainer(Counter);

export default CounterContainer;
