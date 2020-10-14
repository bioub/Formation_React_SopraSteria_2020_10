import React from 'react';
import { Link, Route } from 'react-router-dom';
import Todos from '../components/todos/Todos';
import About from './About';
import Hello from './Hello';
import Home from './Home';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/todos">Todos</Link>{' '}
        <Link to="/hello/Romain">Hello Romain</Link>{' '}
        <Link to="/hello/Jean">Hello Jean</Link>{' '}
        <Link to="/users">Users</Link>
      </nav>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/todos" component={Todos} />
      <Route path="/hello/:name" component={Hello} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
