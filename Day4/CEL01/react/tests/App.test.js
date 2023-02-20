import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Class/i);
  expect(linkElement).toBeInTheDocument();
});

test('test_case02', () => {
  render(<App />);
  const linkElement = screen.queryByTestId('Button1');
  expect(linkElement).toBeDefined();
});
test('test_case03', () => {
  render(<App />);
  const linkElement = screen.queryByTestId('Button2');
  expect(linkElement).toBeDefined();
});
test('test_case04', () => {
  render(<App />);
  const linkElement = screen.queryByTestId('Button3');
  expect(linkElement).toBeDefined();
});
