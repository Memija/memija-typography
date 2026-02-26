import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock child components if needed, but integration test is better.
// However, App.js renders a lot.
// If any child component fails, the test fails.

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Memija Typography/i);
  expect(linkElement).toBeInTheDocument();
});
