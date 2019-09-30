// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todoList } = props;
  return (
    <div>
      {todoList.map(todo => {
        console.log(todo);
        return <Todo key={todo.id} task={todo.task} complete={todo.complete} />;
      })}
    </div>
  );
}
