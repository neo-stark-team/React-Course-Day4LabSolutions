import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/home/i);
  expect(linkElement[0]).toBeInTheDocument();
});
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
test('test_case03', () => {
  render(<App />);
  const linkElement = screen.getByText(/user/i);
  expect(linkElement).toBeInTheDocument();
});