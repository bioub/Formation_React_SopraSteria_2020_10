import { connect } from 'react-redux';
import List from '../../components/todos/List';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return { // props
    onDelete() {

    }
  };
}

const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = createContainer(List);

export default CounterContainer;
