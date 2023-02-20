import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/List in React/i);
  expect(linkElement).toBeInTheDocument();
});

test('test_case02', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Java/i);
  expect(linkElement).toBeInTheDocument();
});

