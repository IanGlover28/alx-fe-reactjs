import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item" data-testid="todo-item">
      <span 
        onClick={() => onToggle(todo.id)}
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        data-testid="todo-text"
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        data-testid="delete-button"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;