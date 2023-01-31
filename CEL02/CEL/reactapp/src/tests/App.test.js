import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/hook/i);
  expect(linkElement[0]).toBeInTheDocument();
})


test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/console/i);
  expect(linkElement).toBeInTheDocument();
})