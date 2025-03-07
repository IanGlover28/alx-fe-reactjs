import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('calls onAdd with input text when form is submitted', () => {
    // Create a mock function for onAdd
    const mockOnAdd = jest.fn();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    // Get the input field and submit button
    const input = screen.getByTestId('todo-input');
    const submitButton = screen.getByTestId('add-button');
    
    // Type in a new todo
    fireEvent.change(input, { target: { value: 'Test todo' } });
    
    // Submit the form
    fireEvent.click(submitButton);
    
    // Check if onAdd was called with the correct text
    expect(mockOnAdd).toHaveBeenCalledWith('Test todo');
    
    // Check if the input field is cleared after submission
    expect(input.value).toBe('');
  });

  test('does not call onAdd when input is empty', () => {
    // Create a mock function for onAdd
    const mockOnAdd = jest.fn();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    // Get the submit button
    const submitButton = screen.getByTestId('add-button');
    
    // Submit the form without typing anything
    fireEvent.click(submitButton);
    
    // Check that onAdd was not called
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});