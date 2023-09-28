// src/Todo.js
import React from "react";
import "../App.css";

function Todo({ text, onDelete, onEdit, index, editList }) {
  return (
    <div>
      {editList && editList.includes(index) ? (
        <input type="text" placeholder="Enter new task" />
      ) : (
        <div className="list-item">
          <span>{text}</span>
          <span className="list-item-btns">
            <button onClick={onDelete}>X</button>
            <button className="edit" onClick={onEdit}>
              Edit
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

export default Todo;
