import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { id, task, complete, toggleComplete } = this.props;

    return (
      <div onClick={toggleComplete(id, !complete)}>
        {complete ? (
          <p style={{ textDecoration: "line-through" }}>{task}</p>
        ) : (
          <p style={{ textDecoration: "none" }}>{task}</p>
        )}
      </div>
    );
  }
}
