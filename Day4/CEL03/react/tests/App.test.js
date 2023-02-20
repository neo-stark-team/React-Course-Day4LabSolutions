import { render, screen } from '@testing-library/react';
import App from '../App';
import Books from '../Book';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Robert/i);
  expect(linkElement).toBeInTheDocument();
});

test('test_case02', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Epic/i);
  expect(linkElement).toBeInTheDocument();
});

