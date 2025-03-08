import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test initial render
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo app')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  // Test adding a new todo
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    // Get the input field and submit button
    const input = screen.getByTestId('todo-input');
    const submitButton = screen.getByTestId('add-button');
    
    // Type in a new todo and submit
    fireEvent.change(input, { target: { value: 'Test new todo functionality' } });
    fireEvent.click(submitButton);
    
    // Check if the new todo is added to the list
    expect(screen.getByText('Test new todo functionality')).toBeInTheDocument();
    
    // Check if the input field is cleared after submission
    expect(input.value).toBe('');
  });

  // Test toggling a todo
  test('toggles a todo when clicked', () => {
    render(<TodoList />);
    
    // Get the first todo item
    const todoText = screen.getAllByTestId('todo-text')[0];
    
    // Initially, the todo should not be completed (no line-through style)
    expect(todoText).toHaveStyle('text-decoration: none');
    
    // Click on the todo to toggle its completed status
    fireEvent.click(todoText);
    
    // After clicking, the todo should be marked as completed (line-through style)
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to not completed
    fireEvent.click(todoText);
    
    // After clicking again, the todo should be marked as not completed
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test deleting a todo
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Get all todos and their delete buttons
    const todos = screen.getAllByTestId('todo-item');
    const deleteButtons = screen.getAllByTestId('delete-button');
    
    // Get the text of the first todo to verify it's removed later
    const firstTodoText = todos[0].querySelector('[data-testid="todo-text"]').textContent;
    
    // Initially, we should have 3 todos
    expect(todos.length).toBe(3);
    
    // Click the delete button of the first todo
    fireEvent.click(deleteButtons[0]);
    
    // After deletion, the first todo should be removed
    expect(screen.queryByText(firstTodoText)).not.toBeInTheDocument();
    
    // We should now have 2 todos
    expect(screen.getAllByTestId('todo-item').length).toBe(2);
  });

  // Test empty state when all todos are deleted
  test('shows empty message when all todos are deleted', () => {
    render(<TodoList />);
    
    // Get all delete buttons
    const deleteButtons = screen.getAllByTestId('delete-button');
    
    // Delete all todos one by one
    fireEvent.click(deleteButtons[0]);
    fireEvent.click(screen.getAllByTestId('delete-button')[0]);
    fireEvent.click(screen.getAllByTestId('delete-button')[0]);
    
    // Check if the empty message is displayed
    expect(screen.getByTestId('empty-message')).toBeInTheDocument();
    expect(screen.getByText('No todos yet!')).toBeInTheDocument();
  });
});