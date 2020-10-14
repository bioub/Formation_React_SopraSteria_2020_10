import { connect } from 'react-redux';
import List from '../../components/todos/List';
import { todosSelector } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    todos: todosSelector(state),
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
