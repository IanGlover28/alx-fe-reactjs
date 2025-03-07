import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const mockTodo = { id: 1, text: 'Test Todo', completed: false };
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  beforeEach(() => {
    // Reset mock functions before each test
    mockToggle.mockClear();
    mockDelete.mockClear();
  });

  test('renders todo text correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('calls onToggle when todo text is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    fireEvent.click(screen.getByTestId('todo-text'));
    
    expect(mockToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    fireEvent.click(screen.getByTestId('delete-button'));
    
    expect(mockDelete).toHaveBeenCalledWith(mockTodo.id);
  });

  test('applies line-through style when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    expect(screen.getByTestId('todo-text')).toHaveStyle('text-decoration: line-through');
  });
});