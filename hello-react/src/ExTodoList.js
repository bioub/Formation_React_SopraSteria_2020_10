import React, { Component } from "react";

class ExTodoList extends Component {
  state = {
    newTodo: '',
    todos: ["Pain", "Lait", "Beurre"],
  };
  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
    });
  }
  render() {
    const { newTodo = '', todos = [] } = this.state;
    const listJsx = todos.map((it) => (
      <div className="TodoItem" key={it}>
        {it}
      </div>
    ));

    return (
      <div className="TodoList">
        <form onSubmit={this.handleSubmit}>
          <input value={newTodo} onChange={this.handleChange} />
          <button>+</button>
        </form>
        <div className="TodoItems">
          {listJsx}
        </div>
      </div>
    );
  }
}

/*
Exercice 1 :
Afficher autant de <div className="TodoItem">A</div>
qu'il y a de valeur dans le tableau du state
Exercice 2 :
En s'inspirant de UserForm
Créer une clé newTodo dans le state qui stocke la valeur du formulaire
Exercice 3 :
Au submit du formulaire ajouter newTodo dans le tableau todos
*/

export default ExTodoList;
