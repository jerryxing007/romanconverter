import { render, screen } from '@testing-library/react';
import App from './App';

test('renders roman numeral converter', () => {
  render(<App />);
  const linkElement = screen.getByText("Roman numeral converter");
  expect(linkElement).toBeInTheDocument();
});
