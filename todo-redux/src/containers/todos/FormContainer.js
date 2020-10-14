import { connect } from 'react-redux';
import Form from '../../components/todos/Form';


function mapStateToProps(state) {
  return { // props
    newTodo: state.newTodo
  };
}

function mapDispatchToProps(dispatch) {
  return { // props
    onNewTodoChange(payload) {
      dispatch({
        type: 'TODO_CHANGE',
        payload
      })
    },
    onNewTodoAdd(title) {
      dispatch({
        type: 'TODO_ADD',
        payload: {
          id: 123,
          title,
          completed: false,
        }
      })
    },
  };
}

const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CounterContainer = createContainer(Form);

export default CounterContainer;
