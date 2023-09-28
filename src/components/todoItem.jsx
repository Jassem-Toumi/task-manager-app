// src/Todo.js
import React from "react";
import "../App.css";

function Todo({ text, onDelete, onEdit, index, editList }) {
  return (
    <div>
      {editList && editList.includes(index) ? (
        <input type="text" placeholder="Enter new task" />
      ) : (
        <div>
          <span>{text}</span>
          <button onClick={onDelete}>X</button>
          <button className="edit" onClick={onEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Todo;
