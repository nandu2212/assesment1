import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ol className="allTodos">
      {todos.map((t) => (
        
        <li >
          <span  key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

export default TodoList;