import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/singers/i);
  expect(linkElement[0]).toBeInTheDocument();
});
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/albums/i);
  expect(linkElement).toBeInTheDocument();
});
test('test_case03', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});