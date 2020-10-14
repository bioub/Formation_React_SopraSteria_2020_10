import { connect } from 'react-redux';
import Form from '../../components/todos/Form';
import { todoAdd, todoChange } from '../../store/actions';
import { newTodoSelector } from '../../store/selectors';


function mapStateToProps(state) {
  return { // props
    newTodo: newTodoSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return { // props
    onNewTodoChange(payload) {
      dispatch(todoChange(payload))
    },
    onNewTodoAdd(title) {
      dispatch(todoAdd(title))
    },
  };
}

const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = createContainer(Form);

export default CounterContainer;
