import React, { Component } from "react";
import styled from "styled-components";

const StyledTodoForm = styled.div`
  background-color: white;
  width: 50vw;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 5px 5px #cfcfcf;
  margin-top: -45px;
  form {
      display: flex;
      justify-content: space-around;
      input {
          width: 30%;
          text-align: center;
          height: 5vh;
          border-radius: 10px;
          font-size: 1rem;
          border: 1px solid lightgrey;
          color: grey;
          font-family: 'Montserrat', sans-serif;
      }
      button {
          width: 30%;
          font-size: 1rem;
          border-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          &:hover {
            cursor: pointer;
          }
          &.addTodo {
              background-color: #31547f;
              color: #e7e7e7;
          }
          &.clearCompleted {
              background-color: grey;
              color: white;
          }
      }
  }
`;

export default class TodoForm extends Component {
  render() {
    const { inputVal, inputChange, addTodo, clearComplete } = this.props;
    return (
      <StyledTodoForm>
        <form>
          <input
            placeholder="Your Task..."
            value={inputVal}
            onChange={inputChange}
          />
          <button onClick={addTodo} className='addTodo'>Add Todo</button>
          <button onClick={clearComplete} className='clearCompleted'>Clear Completed Todos</button>
        </form>
      </StyledTodoForm>
    );
  }
}
