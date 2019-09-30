import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [{id: 0, task: 'Finish MVP', complete: false}, {id:1, task:'Start Sorters Hat Project', complete: false}],
    }  
  }

  addTodo = event => {
    event.preventDefault();
    console.log('Add Todo')
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
