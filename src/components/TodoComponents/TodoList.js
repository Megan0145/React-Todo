// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todoList, removeTask } = props;
  return (
    <div>
      {todoList.map(todo => {
        return <Todo key={todo.id} task={todo.task} completed={todo.completed} removeTask={removeTask} />;
      })}
    </div>
  );
}
