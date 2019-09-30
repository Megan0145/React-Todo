import React from "react";

export default function Todo(props) {
  const { task, completed, removeTask } = props;
  return (
    <div onClick={removeTask}>
      <p> {task} </p>
    </div>
  );
}
