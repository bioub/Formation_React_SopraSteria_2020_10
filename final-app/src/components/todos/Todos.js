import React from 'react';
import FormContainer from '../../containers/todos/FormContainer';
import ListContainer from '../../containers/todos/ListContainer';

function Todos() {
  return (
    <div className="Todos">
      <FormContainer />
      <ListContainer />
    </div>
  );
}

export default Todos;
