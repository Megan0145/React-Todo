import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      formValue: ''
    };
  }

  onValueChange = event => {
    this.setState({
      formValue: event.target.value
    });
  };
  onFormSubmit = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.formValue,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: this.state.todoList.concat(newTodo),
      formValue: ''
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} />
        <TodoForm
          formValue={this.state.formValue}
          onValueChange={this.onValueChange}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

export default App;
