// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";
import styled from 'styled-components';

const StyledList = styled.div`
    background-color: white;
    margin-top: 60px;
    margin-bottom: 40px;
    border: 1px solid lightgrey;
    p {
        width: 52vw;
        padding: 1rem;
        font-size: 1.3rem;
        color: grey;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default class TodoList extends Component {
  render() {
    const { todos, toggleComplete } = this.props;
    return (
      <StyledList>
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              complete={todo.complete}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </StyledList>
    );
  }
}
