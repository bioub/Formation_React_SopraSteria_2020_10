import React, { useState } from 'react';
import Form from './Form';
import List from './List';

function Todos() {
  const [newTodo, setNewTodo] = useState('Lai');
  const [todos, setTodos] = useState([
    {
      id: 123,
      title: 'Pain',
      completed: false,
    },
    {
      id: 345,
      title: 'Beurre',
      completed: true,
    },
    {
      id: 890,
      title: 'Farine',
      completed: false,
    },
  ]);

  return (
    <div className="Todos">
      <Form
        newTodo={newTodo}
        onNewTodoChange={(newTodo) => setNewTodo(newTodo)}
        onNewTodoAdd={() =>
          setTodos([
            ...todos,
            { id: Math.random(), title: newTodo, completed: false },
          ])
        }
      />
      <List todos={todos} onDelete={(todo) => setTodos(todos.filter((t) => t.id !== todo.id))}/>
    </div>
  );
}

export default Todos;
