import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

