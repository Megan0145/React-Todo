import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import styled from "styled-components";


// font-family: 'Big Shoulders Display', cursive;
// font-family: 'Montserrat', sans-serif;

const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #dbedff;
  .jumbo {
    background-image: url("todo-bg.jpg");
    background-color: #cccccc;;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-family: "Big Shoulders Display", cursive;
      font-size: 8rem;
      color: white;

    }
  }
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      inputVal: "",
      complete: false
    };
  }

  inputChange = event => {
    this.setState({
      inputVal: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.inputVal,
      id: Date.now(),
      complete: this.state.complete
    };
    this.setState({
      todos: this.state.todos.concat(newTodo),
      inputVal: ""
    });
  };

  toggleComplete = (id, complete) => event => {
    this.setState(currentState => ({
      todos: currentState.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return { id: todo.id, task: todo.task, complete: complete };
        }
      })
    }));
  };

  clearComplete = event => {
    event.preventDefault();
    this.setState(currentState => ({
      todos: currentState.todos.filter(todo => {
        return !todo.complete;
      })
    }));
  };

  getCurrentDate(separator = ".") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    // return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  render() {
    const { todos, inputVal } = this.state;

    return (
      <StyledTodoContainer>
        <div className="jumbo">
          <h2>{this.getCurrentDate()}</h2>
        </div>
        <TodoForm
          inputVal={inputVal}
          addTodo={this.addTodo}
          inputChange={this.inputChange}
          clearComplete={this.clearComplete}
        />
        <TodoList todos={todos} toggleComplete={this.toggleComplete} />
      </StyledTodoContainer>
    );
  }
}

export default App;
