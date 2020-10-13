import React from 'react';

function Form({ newTodo, onNewTodoChange, onNewTodoAdd }) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd();
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input
        value={newTodo}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default Form;
